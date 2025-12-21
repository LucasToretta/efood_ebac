import { Link } from 'react-router-dom'
import type { Restaurante } from '../../Types/efood'

import {
    Card,
    CardImage,
    CardContent,
    CardTitle,
    CardInfo,
    CardDesc,
    Tag,
    Button
} from './styles'

type Props = {
    restaurante: Restaurante
}

export default function RestaurantCard({ restaurante }: Props) {
    return (
        <Card>
            <CardImage src={restaurante.capa} alt={restaurante.titulo} />

            {restaurante.destacado && <Tag>Destaque da semana</Tag>}

            <CardContent>
                <CardInfo>
                    <CardTitle>{restaurante.titulo}</CardTitle>
                    <span>{restaurante.avaliacao.toFixed(1)}</span>
                </CardInfo>

                <span>{restaurante.tipo}</span>

                <CardDesc>{restaurante.descricao}</CardDesc>

                <Link to={`/restaurante/${restaurante.id}`}>
                    <Button>Saiba mais</Button>
                </Link>
            </CardContent>
        </Card>
    )
}
