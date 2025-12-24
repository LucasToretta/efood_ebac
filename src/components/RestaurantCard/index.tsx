import { Link } from 'react-router-dom'
import type { Restaurante } from '../../Types/efood'
import {
    Card,
    Image,
    Content,
    Tags,
    Tag,
    TagDestaque,
    TitleRow,
    Title,
    Rating,
    Star,
    Description,
    ButtonLink
} from './styles'

type Props = {
    restaurant: Restaurante
}

export default function RestaurantCard({ restaurant }: Props) {
    return (
        <Card>
            <Image src={restaurant.capa} alt={restaurant.titulo} />

            <Tags>
                {restaurant.destacado && <TagDestaque>Destaque da semana</TagDestaque>}
                <Tag>{restaurant.tipo}</Tag>
            </Tags>

            <Content>
                <TitleRow>
                    <Title>{restaurant.titulo}</Title>
                    <Rating>
                        {restaurant.avaliacao} <Star>★</Star>
                    </Rating>
                </TitleRow>

                <Description>{restaurant.descricao}</Description>

                <ButtonLink as={Link} to={`/restaurante/${restaurant.id}`}>
                    Saiba mais
                </ButtonLink>
            </Content>
        </Card>
    )
}
