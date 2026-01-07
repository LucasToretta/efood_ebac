import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import type { RootState, AppDispatch } from '../../store'
import { useCheckoutMutation } from '../../services/checkoutApi'
import { limpar } from '../Carrinho/carrinhoSlice'

import {
    Container,
    Title,
    Row,
    FieldGroup,
    Label,
    Field,
    FieldSmall,
    ButtonRow,
    Button,
    ErrorText,
    ConfirmBox,
    ConfirmTitle,
    ConfirmText,
    ApiError
} from './styles'

type Step = 'delivery' | 'payment' | 'confirm'

type Props = {
    onBackToCart?: () => void
}

type FormValues = {
    receiver: string
    address: string
    city: string
    zipCode: string
    number: string
    complement: string
    cardName: string
    cardNumber: string
    cvv: string
    expMonth: string
    expYear: string
}

function getErrorMessage(err: unknown): string {
    const fbq = err as FetchBaseQueryError
    if (fbq && typeof fbq === 'object' && 'status' in fbq) {
        const data = (fbq as { data?: unknown }).data
        if (data && typeof data === 'object' && 'message' in (data as Record<string, unknown>)) {
            const msg = (data as Record<string, unknown>).message
            if (typeof msg === 'string' && msg.trim()) return msg
        }
        return 'Não foi possível finalizar o pagamento. Tente novamente.'
    }

    const se = err as SerializedError
    if (se && typeof se === 'object' && 'message' in se) {
        const msg = se.message
        if (typeof msg === 'string' && msg.trim()) return msg
    }

    if (err instanceof Error && err.message.trim()) return err.message
    return 'Não foi possível finalizar o pagamento. Tente novamente.'
}

export default function Checkout({ onBackToCart }: Props) {
    const dispatch = useDispatch<AppDispatch>()
    const itens = useSelector((state: RootState) => state.carrinho.itens)

    const [step, setStep] = useState<Step>('delivery')
    const [orderId, setOrderId] = useState<string>('')
    const [apiError, setApiError] = useState<string>('')

    const total = useMemo(() => {
        return itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
    }, [itens])

    const [checkout, { isLoading }] = useCheckoutMutation()

    const schema = Yup.object({
        receiver: Yup.string().min(3).required('Informe o nome de quem irá receber'),
        address: Yup.string().min(3).required('Informe o endereço'),
        city: Yup.string().min(2).required('Informe a cidade'),
        zipCode: Yup.string().min(8).required('Informe o CEP'),
        number: Yup.string().required('Informe o número'),
        complement: Yup.string(),

        cardName: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.min(3).required('Informe o nome no cartão')
        }),
        cardNumber: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.min(13).required('Informe o número do cartão')
        }),
        cvv: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.min(3).required('Informe o CVV')
        }),
        expMonth: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.required('Informe o mês')
        }),
        expYear: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.required('Informe o ano')
        })
    })

    const formik = useFormik<FormValues>({
        initialValues: {
            receiver: '',
            address: '',
            city: '',
            zipCode: '',
            number: '',
            complement: '',
            cardName: '',
            cardNumber: '',
            cvv: '',
            expMonth: '',
            expYear: ''
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            setApiError('')

            if (step === 'delivery') {
                setStep('payment')
                return
            }

            if (step === 'payment') {
                try {
                    const payload = {
                        delivery: {
                            receiver: values.receiver,
                            address: {
                                description: values.address,
                                city: values.city,
                                zipCode: values.zipCode,
                                number: Number(values.number),
                                complement: values.complement || undefined
                            }
                        },
                        payment: {
                            card: {
                                name: values.cardName,
                                number: values.cardNumber,
                                code: Number(values.cvv),
                                expires: {
                                    month: Number(values.expMonth),
                                    year: Number(values.expYear)
                                }
                            }
                        },
                        products: itens.map((item) => ({
                            id: item.id,
                            price: item.preco
                        }))
                    }

                    const res = await checkout(payload).unwrap()
                    setOrderId(res.orderId)
                    dispatch(limpar())
                    setStep('confirm')
                } catch (err) {
                    setApiError(getErrorMessage(err))
                }
            }
        }
    })

    const showError = (name: keyof FormValues) => {
        const touched = formik.touched[name]
        const error = formik.errors[name]
        return touched && error ? <ErrorText>{error}</ErrorText> : null
    }

    const handleBackToCart = () => {
        if (onBackToCart) onBackToCart()
        else window.location.href = '/carrinho'
    }

    if (step === 'confirm') {
        return (
            <Container>
                <ConfirmBox>
                    <ConfirmTitle>Pedido realizado - {orderId}</ConfirmTitle>
                    <ConfirmText>
                        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                    </ConfirmText>
                    <ConfirmText>
                        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                    </ConfirmText>
                    <ConfirmText>
                        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                    </ConfirmText>
                    <ConfirmText>
                        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                    </ConfirmText>

                    <Button type="button" onClick={() => (window.location.href = '/')}>
                        Concluir
                    </Button>
                </ConfirmBox>
            </Container>
        )
    }

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                {step === 'delivery' && (
                    <>
                        <Title>Entrega</Title>

                        <FieldGroup>
                            <Label htmlFor="receiver">Quem irá receber</Label>
                            <Field id="receiver" {...formik.getFieldProps('receiver')} />
                            {showError('receiver')}
                        </FieldGroup>

                        <FieldGroup>
                            <Label htmlFor="address">Endereço</Label>
                            <Field id="address" {...formik.getFieldProps('address')} />
                            {showError('address')}
                        </FieldGroup>

                        <FieldGroup>
                            <Label htmlFor="city">Cidade</Label>
                            <Field id="city" {...formik.getFieldProps('city')} />
                            {showError('city')}
                        </FieldGroup>

                        <Row>
                            <FieldGroup>
                                <Label htmlFor="zipCode">CEP</Label>
                                <FieldSmall id="zipCode" {...formik.getFieldProps('zipCode')} />
                                {showError('zipCode')}
                            </FieldGroup>

                            <FieldGroup>
                                <Label htmlFor="number">Número</Label>
                                <FieldSmall id="number" {...formik.getFieldProps('number')} />
                                {showError('number')}
                            </FieldGroup>
                        </Row>

                        <FieldGroup>
                            <Label htmlFor="complement">Complemento (opcional)</Label>
                            <Field id="complement" {...formik.getFieldProps('complement')} />
                        </FieldGroup>

                        <ButtonRow>
                            <Button type="submit">Continuar com o pagamento</Button>
                            <Button type="button" onClick={handleBackToCart}>
                                Voltar para o carrinho
                            </Button>
                        </ButtonRow>
                    </>
                )}

                {step === 'payment' && (
                    <>
                        <Title>Pagamento - Valor a pagar R$ {total.toFixed(2)}</Title>

                        <FieldGroup>
                            <Label htmlFor="cardName">Nome no cartão</Label>
                            <Field id="cardName" {...formik.getFieldProps('cardName')} />
                            {showError('cardName')}
                        </FieldGroup>

                        <Row>
                            <FieldGroup>
                                <Label htmlFor="cardNumber">Número do cartão</Label>
                                <FieldSmall id="cardNumber" {...formik.getFieldProps('cardNumber')} />
                                {showError('cardNumber')}
                            </FieldGroup>

                            <FieldGroup>
                                <Label htmlFor="cvv">CVV</Label>
                                <FieldSmall id="cvv" {...formik.getFieldProps('cvv')} />
                                {showError('cvv')}
                            </FieldGroup>
                        </Row>

                        <Row>
                            <FieldGroup>
                                <Label htmlFor="expMonth">Mês de vencimento</Label>
                                <FieldSmall id="expMonth" {...formik.getFieldProps('expMonth')} />
                                {showError('expMonth')}
                            </FieldGroup>

                            <FieldGroup>
                                <Label htmlFor="expYear">Ano de vencimento</Label>
                                <FieldSmall id="expYear" {...formik.getFieldProps('expYear')} />
                                {showError('expYear')}
                            </FieldGroup>
                        </Row>

                        {apiError && <ApiError>{apiError}</ApiError>}

                        <ButtonRow>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                            </Button>
                            <Button type="button" onClick={() => setStep('delivery')}>
                                Voltar para a edição de endereço
                            </Button>
                        </ButtonRow>
                    </>
                )}
            </form>
        </Container>
    )
}
