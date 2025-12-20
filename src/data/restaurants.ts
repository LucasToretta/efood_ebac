import img1 from '../assets/img-rest2.png'
import img2 from '../assets/img-rest3.png'

export type CardapioItem = {
    id: number
    nome: string
    descricao: string
    foto: string
}

export type Restaurant = {
    id: number
    nome: string
    categoria: string
    avaliacao: number
    descricao: string
    imagem: string
    destaque?: boolean
    cardapio: CardapioItem[]
}

export const restaurants: Restaurant[] = [
    {
        id: 1,
        nome: 'Hioki Sushi',
        categoria: 'Japonesa',
        avaliacao: 4.9,
        descricao:
            'Peça o melhor da culinária japonesa no conforto da sua casa. Sushis frescos, sabores delicados e preparo impecável.',
        imagem: img2,
        destaque: true,
        cardapio: [
            { id: 1, nome: 'Combo Sushi', descricao: 'Seleção especial da casa.', foto: img2 },
            { id: 2, nome: 'Temaki', descricao: 'Salmão com cream cheese.', foto: img2 },
            { id: 3, nome: 'Hot Roll', descricao: 'Crocante por fora.', foto: img2 },
            { id: 4, nome: 'Uramaki', descricao: 'Salmão e pepino.', foto: img2 },
            { id: 5, nome: 'Sashimi', descricao: 'Cortes frescos.', foto: img2 },
            { id: 6, nome: 'Nigiri', descricao: 'Clássico japonês.', foto: img2 }
        ]
    },
    {
        id: 2,
        nome: 'La Dolce Vita Trattoria',
        categoria: 'Italiana',
        avaliacao: 4.6,
        descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você. Massas, molhos e sabores tradicionais.',
        imagem: img1,
        cardapio: [
            { id: 1, nome: 'Pizza Marguerita', descricao: 'Tomate, muçarela e manjericão.', foto: img1 },
            { id: 2, nome: 'Pizza Pepperoni', descricao: 'Pepperoni e queijo.', foto: img1 },
            { id: 3, nome: 'Penne', descricao: 'Massa ao molho.', foto: img1 },
            { id: 4, nome: 'Lasagna', descricao: 'Tradicional italiana.', foto: img1 },
            { id: 5, nome: 'Risotto', descricao: 'Cremoso.', foto: img1 },
            { id: 6, nome: 'Tiramisu', descricao: 'Sobremesa clássica.', foto: img1 }
        ]
    },
    {
        id: 3,
        nome: 'Burger House',
        categoria: 'Hambúrguer',
        avaliacao: 4.5,
        descricao:
            'Hambúrgueres artesanais preparados com ingredientes selecionados e muito sabor em cada mordida.',
        imagem: img1,
        cardapio: [
            { id: 1, nome: 'Burger Clássico', descricao: 'Pão, carne e queijo.', foto: img1 },
            { id: 2, nome: 'Burger Bacon', descricao: 'Com bacon crocante.', foto: img1 },
            { id: 3, nome: 'Burger Cheddar', descricao: 'Cheddar cremoso.', foto: img1 },
            { id: 4, nome: 'Batata Frita', descricao: 'Crocante.', foto: img1 },
            { id: 5, nome: 'Onion Rings', descricao: 'Empanadas.', foto: img1 },
            { id: 6, nome: 'Milkshake', descricao: 'Gelado.', foto: img1 }
        ]
    },
    {
        id: 4,
        nome: 'Mex Cantina',
        categoria: 'Mexicana',
        avaliacao: 4.4,
        descricao:
            'Tacos, burritos e pratos apimentados para quem busca uma experiência mexicana autêntica.',
        imagem: img1,
        cardapio: [
            { id: 1, nome: 'Taco', descricao: 'Tradicional.', foto: img1 },
            { id: 2, nome: 'Burrito', descricao: 'Recheado.', foto: img1 },
            { id: 3, nome: 'Nachos', descricao: 'Com queijo.', foto: img1 },
            { id: 4, nome: 'Quesadilla', descricao: 'Queijo derretido.', foto: img1 },
            { id: 5, nome: 'Chili', descricao: 'Apimentado.', foto: img1 },
            { id: 6, nome: 'Churros', descricao: 'Doce final.', foto: img1 }
        ]
    },
    {
        id: 5,
        nome: 'Veggie Life',
        categoria: 'Vegetariana',
        avaliacao: 4.7,
        descricao:
            'Pratos vegetarianos criativos, saudáveis e cheios de sabor, preparados com ingredientes frescos.',
        imagem: img1,
        cardapio: [
            { id: 1, nome: 'Bowl Veg', descricao: 'Completo.', foto: img1 },
            { id: 2, nome: 'Salada', descricao: 'Fresca.', foto: img1 },
            { id: 3, nome: 'Wrap Veg', descricao: 'Leve.', foto: img1 },
            { id: 4, nome: 'Hambúrguer Veg', descricao: 'Artesanal.', foto: img1 },
            { id: 5, nome: 'Sopa', descricao: 'Quentinha.', foto: img1 },
            { id: 6, nome: 'Sobremesa', descricao: 'Leve.', foto: img1 }
        ]
    },
    {
        id: 6,
        nome: 'Doce Encanto',
        categoria: 'Sobremesas',
        avaliacao: 4.8,
        descricao:
            'Sobremesas artesanais irresistíveis para adoçar seu dia, feitas com carinho e qualidade.',
        imagem: img1,
        cardapio: [
            { id: 1, nome: 'Brownie', descricao: 'Chocolate intenso.', foto: img1 },
            { id: 2, nome: 'Cheesecake', descricao: 'Cremoso.', foto: img1 },
            { id: 3, nome: 'Mousse', descricao: 'Leve.', foto: img1 },
            { id: 4, nome: 'Torta', descricao: 'Caseira.', foto: img1 },
            { id: 5, nome: 'Cookie', descricao: 'Quentinho.', foto: img1 },
            { id: 6, nome: 'Pudim', descricao: 'Clássico.', foto: img1 }
        ]
    }
]
