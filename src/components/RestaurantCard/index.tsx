import { Link } from 'react-router-dom'
import type { Restaurant } from '../../data/restaurants'
import {
    Card,
    Image,
    Content,
    Tags,
    Tag,
    TitleRow,
    Title,
    Rating,
    Description,
    Button
} from './styles'

type Props = {
    restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: Props) {
    return (
        <Card>
            <Image src={restaurant.imagem} alt={restaurant.nome} />
            <Tags>
                {restaurant.destaque && <Tag>Destaque da semana</Tag>}
                <Tag>{restaurant.categoria}</Tag>
            </Tags>
            <Content>
                <TitleRow>
                    <Title>{restaurant.nome}</Title>
                    <Rating>{restaurant.avaliacao} ★</Rating>
                </TitleRow>
                <Description>{restaurant.descricao}</Description>
                <Link to={`/restaurante/${restaurant.id}`}>
                    <Button>Saiba mais</Button>
                </Link>
            </Content>
        </Card>
    )
}
