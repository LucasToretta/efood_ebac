import img1 from '../assets/img rest 2.png'
import img2 from '../assets/img rest 3.png'

export type Restaurant = {
    id: number
    nome: string
    categoria: string
    avaliacao: number
    descricao: string
    imagem: string
    destaque?: boolean
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
        destaque: true
    },
    {
        id: 2,
        nome: 'La Dolce Vita Trattoria',
        categoria: 'Italiana',
        avaliacao: 4.6,
        descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você. Massas, molhos e sabores tradicionais.',
        imagem: img1
    },
    {
        id: 3,
        nome: 'Burger House',
        categoria: 'Hambúrguer',
        avaliacao: 4.5,
        descricao:
            'Hambúrgueres artesanais preparados com ingredientes selecionados e muito sabor em cada mordida.',
        imagem: img1
    },
    {
        id: 4,
        nome: 'Mex Cantina',
        categoria: 'Mexicana',
        avaliacao: 4.4,
        descricao:
            'Tacos, burritos e pratos apimentados para quem busca uma experiência mexicana autêntica.',
        imagem: img1
    },
    {
        id: 5,
        nome: 'Veggie Life',
        categoria: 'Vegetariana',
        avaliacao: 4.7,
        descricao:
            'Pratos vegetarianos criativos, saudáveis e cheios de sabor, preparados com ingredientes frescos.',
        imagem: img1
    },
    {
        id: 6,
        nome: 'Doce Encanto',
        categoria: 'Sobremesas',
        avaliacao: 4.8,
        descricao:
            'Sobremesas artesanais irresistíveis para adoçar seu dia, feitas com carinho e qualidade.',
        imagem: img1
    }
]
