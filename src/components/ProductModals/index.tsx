import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import type { Produto } from '../../Types/efood'
import type { AppDispatch } from '../../store'
import { adicionar, abrir } from '../../pages/Carrinho/carrinhoSlice'
import {
    Overlay,
    ModalBox,
    CloseBtn,
    ModalBody,
    ImageWrapper,
    Info,
    Title,
    Desc,
    Portion,
    ActionBtn
} from './styles'

type Props = {
    produto: Produto
    onClose: () => void
}

export default function ProductModal({ produto, onClose }: Props) {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'auto'
        }
    }, [onClose])

    return (
        <Overlay role="dialog" aria-modal="true" onClick={onClose}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <CloseBtn type="button" aria-label="Fechar" onClick={onClose}>
                    ×
                </CloseBtn>

                <ModalBody>
                    <ImageWrapper>
                        <img src={produto.foto} alt={produto.nome} />
                    </ImageWrapper>

                    <Info>
                        <Title>{produto.nome}</Title>
                        <Desc>{produto.descricao}</Desc>
                        <Portion>Serve: {produto.porcao}</Portion>

                        <ActionBtn
                            type="button"
                            onClick={() => {
                                dispatch(adicionar(produto))
                                dispatch(abrir())
                            }}
                        >
                            Adicionar ao carrinho – R$ {produto.preco.toFixed(2)}
                        </ActionBtn>
                    </Info>
                </ModalBody>
            </ModalBox>
        </Overlay>
    )
}
