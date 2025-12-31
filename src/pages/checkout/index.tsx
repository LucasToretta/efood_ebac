import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import type { RootState } from '../../store'
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
    ConfirmText
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

export default function Checkout({ onBackToCart }: Props) {
    const dispatch = useDispatch()
    const itens = useSelector((state: RootState) => state.carrinho.itens)

    const [step, setStep] = useState<Step>('delivery')
    const [orderId, setOrderId] = useState<string>('')

    const total = useMemo(() => {
        return itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
    }, [itens])

    const [checkout, { isLoading }] = useCheckoutMutation()

    const schema = Yup.object({
        receiver: Yup.string().required(),
        address: Yup.string().required(),
        city: Yup.string().required(),
        zipCode: Yup.string().required(),
        number: Yup.string().required(),
        complement: Yup.string(),
        cardName: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.required()
        }),
        cardNumber: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.required()
        }),
        cvv: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.required()
        }),
        expMonth: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.required()
        }),
        expYear: Yup.string().when([], {
            is: () => step === 'payment',
            then: (s) => s.required()
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
            if (step === 'delivery') {
                setStep('payment')
                return
            }

            const products = itens.flatMap((item) =>
                Array.from({ length: item.quantidade }).map(() => ({
                    id: item.id,
                    price: item.preco
                }))
            )

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
                products
            }

            try {
                const res = await checkout(payload).unwrap()
                setOrderId(res.orderId)
            } catch {
                setOrderId(`FAKE-${Date.now()}`)
            }

            dispatch(limpar())
            setStep('confirm')
        }
    })

    const showError = (name: keyof FormValues) => {
        const touched = formik.touched[name]
        const error = formik.errors[name]
        return touched && error ? <ErrorText>{error}</ErrorText> : null
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
                            <Label>Quem irá receber</Label>
                            <Field {...formik.getFieldProps('receiver')} />
                            {showError('receiver')}
                        </FieldGroup>

                        <FieldGroup>
                            <Label>Endereço</Label>
                            <Field {...formik.getFieldProps('address')} />
                            {showError('address')}
                        </FieldGroup>

                        <FieldGroup>
                            <Label>Cidade</Label>
                            <Field {...formik.getFieldProps('city')} />
                            {showError('city')}
                        </FieldGroup>

                        <Row>
                            <FieldGroup>
                                <Label>CEP</Label>
                                <FieldSmall {...formik.getFieldProps('zipCode')} />
                                {showError('zipCode')}
                            </FieldGroup>

                            <FieldGroup>
                                <Label>Número</Label>
                                <FieldSmall {...formik.getFieldProps('number')} />
                                {showError('number')}
                            </FieldGroup>
                        </Row>

                        <FieldGroup>
                            <Label>Complemento (opcional)</Label>
                            <Field {...formik.getFieldProps('complement')} />
                        </FieldGroup>

                        <ButtonRow>
                            <Button type="submit">Continuar com o pagamento</Button>
                            <Button type="button" onClick={() => onBackToCart && onBackToCart()}>
                                Voltar para o carrinho
                            </Button>
                        </ButtonRow>
                    </>
                )}

                {step === 'payment' && (
                    <>
                        <Title>Pagamento - Valor a pagar R$ {total.toFixed(2)}</Title>

                        <FieldGroup>
                            <Label>Nome no cartão</Label>
                            <Field {...formik.getFieldProps('cardName')} />
                            {showError('cardName')}
                        </FieldGroup>

                        <Row>
                            <FieldGroup>
                                <Label>Número do cartão</Label>
                                <FieldSmall {...formik.getFieldProps('cardNumber')} />
                                {showError('cardNumber')}
                            </FieldGroup>

                            <FieldGroup>
                                <Label>CVV</Label>
                                <FieldSmall {...formik.getFieldProps('cvv')} />
                                {showError('cvv')}
                            </FieldGroup>
                        </Row>

                        <Row>
                            <FieldGroup>
                                <Label>Mês de vencimento</Label>
                                <FieldSmall {...formik.getFieldProps('expMonth')} />
                                {showError('expMonth')}
                            </FieldGroup>

                            <FieldGroup>
                                <Label>Ano de vencimento</Label>
                                <FieldSmall {...formik.getFieldProps('expYear')} />
                                {showError('expYear')}
                            </FieldGroup>
                        </Row>

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
