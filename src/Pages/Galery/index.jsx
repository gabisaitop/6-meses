import Cards from '../../Components/Cards';
import Menu from '../../Components/Menu'
import { CardsContainer, ContainerBox,ContainerTitle } from "./style";
import * as React from 'react';

export default function GaleryPage() {

    const list = [
        {
            photo: 'niver', 
            title: 'Presente de Aniversário',
            location: 'Sede PicPay',
            date: '11/03/2022'
        },
        {
            photo: 'dia1', 
            title: 'Primeiro dia Pós-Paulista',
            location: 'Sede PicPay',
            date: '14/03/2022'
        },
        {
            photo: 'carrefour', 
            title: 'Idas e vindas no Carrefour',
            location: 'Carrefour',
            date: '16/03/2022'
        },
        {
            photo: 'villa', 
            title: '2° Encontro: Villa Lobos',
            location: 'Shopping Villa-Lobos',
            date: '19/03/2022'
        },
        {
            photo: 'liberdade', 
            title: '3° Encontro: Liberdade',
            location: 'Liberdade',
            date: '26/03/2022'
        },
        {
            photo: 'hamburguer',
            title: 'Lucas e seu amigo',
            location: 'Escola Germinare',
            date: '28/03/2022'
        }, 
        {
            photo: 'tinder',
            title: 'Saga das fotos do Tinder',
            location: 'Escola Germinare',
            date: '29/03/2022'
        }, 
        {
            photo: 'social', 
            title: 'Roupa social, meu vício',
            location: 'Escola Germinare',
            date: 'Março'
        },
        {
            photo: 'lugar', 
            title: 'Menino bem educado',
            location: 'Escola Germinare',
            date: 'Março'
        },
        {
            photo: 'nerdinho',
            title: 'Nerdinho!! <3',
            location: 'Escola Germinare',
            date: '06/04/2022'
        },
        {
            photo: 'uniao', 
            title: 'Oficializamos',
            location: 'Shopping União',
            date: '10/04/2022'
        },
        {
            photo: 'zoo', 
            title: 'Dia de Zoológico',
            location: 'Zoológico de SP',
            date: '17/04/2022'
        },
        {
            photo: 'reset',
            title: 'Primeira foto Pós-Reset',
            location: 'Transporte escolar',
            date: '03/05/2022'
        },
        {
            photo: 'habito',
            title: 'Fotos diárias no almoço',
            location: 'Transporte escolar',
            date: '04/05/2022'
        },
        {
            photo: 'daiso',
            title: 'Rolê Pós-Teatro',
            location: 'Shopping Paulista',
            date: '07/05/2022'
        },
        {
            photo: 'picpay',
            title: 'Dormindo nos puffs',
            location: 'Sede PicPay',
            date: '10/05/2022'
        },
        {
            photo: 'outback',
            title: 'Primeira vez no Outback',
            location: 'Shopping Eldorado',
            date: '14/05/2022'
        },
        {
            photo: 'eldorado',
            title: 'Foto de pai',
            location: 'Shopping Eldorado',
            date: '14/05/2022'
        },
        {
            photo: 'mimir',
            title: 'A mimir',
            location: 'Transporte Escolar',
            date: '17/05/2022'
        },
        {
            photo: 'catboy',
            title: 'Meu lindo catboy',
            location: 'Escola Germinare',
            date: '23/05/2022'
        },
        {
            photo: 'foto',
            title: '1° foto de visualização única',
            location: 'Casa do Lucs',
            date: '30/05/2022'
        },
        {
            photo: 'casa',
            title: 'Vila do Romeu',
            location: 'Casa do Lucs',
            date: '11/06/2022'
        },
        {
            photo: 'morumbi',
            title: 'Dia dos namorados 2022',
            location: 'Shopping Morumbi',
            date: '11/06/2022'
        },
        {
            photo: 'mudanca',
            title: 'Primeiro dia chegando cedo',
            location: 'Escola Germinare',
            date: '13/06/2022'
        },
        {
            photo: 'vid',
            title: 'Festa do David',
            location: 'Clube do Jaguaré',
            date: '18/06/2022'
        },
        {
            photo: 'mine',
            title: 'Matou meus 7 dogs',
            location: 'Minecraft',
            date: '19/06/2022'
        },
        {
            photo: 'junina',
            title: 'Lucs, o caipira',
            location: 'Escola Germinare',
            date: '24/06/2022'
        },
        {
            photo: 'osesp',
            title: 'Noturnos de Chopin',
            location: 'Sala São Paulo',
            date: '03/07/2022'
        },

        {
            photo: 'liberdade2',
            title: 'Tentativa falha de ir no Rizz',
            location: 'Liberdade',
            date: '08/07/2022'
        },
        {
            photo: 'patins',
            title: 'Ring de Patins',
            location: 'Liberdade',
            date: '13/07/2022'
        },
        {
            photo: 'risoto',
            title: 'Rodízio de risoto',
            location: 'Restaurante Rizz',
            date: '13/07/2022'
        },
        {
            photo: 'uniao2',
            title: 'Vamo na Playland?',
            location: 'Shopping União',
            date: '16/07/2022'
        },
        {
            photo: 'william',
            title: '2° vez na Outback',
            location: 'Shopping Bourbon',
            date: '20/07/2022'
        },
        {
            photo: 'catavento',
            title: 'Museu Catavento',
            location: 'Museu Catavento',
            date: '21/07/2022'
        },
        {
            photo: 'japones',
            title: 'Rodízio de Comida Japonesa',
            location: 'Yuzuk Sushi',
            date: '29/07/2022'
        },
        {
            photo: 'paranapiacaba',
            title: 'Cidade histórica mais fofa',
            location: 'Paranapiacaba',
            date: '30/07/2022'
        },
        {
            photo: 'paranapiacaba1',
            title: 'A foto mais fofa',
            location: 'Paranapiacaba',
            date: '30/07/2022'
        },
        {
            photo: 'batom',
            title: 'Manteiga de cacau sem cor',
            location: 'Transporte Escolar',
            date: '10/08/2022'
        },
        {
            photo: 'oculos',
            title: 'Nerdinho 2.0!! <3',
            location: 'Escola Germinare',
            date: '15/08/2022'
        },
        {
            photo: 'beijo',
            title: 'Rejeição </3',
            location: 'Yakusa',
            date: '20/08/2022'
        },
        {
            photo: 'sofa',
            title: '"Hope"',
            location: 'Casa da Sogra',
            date: '27/08/2022'
        },
        {
            photo: 'selfieteatro',
            title: 'Tchaikovsky ao vivo',
            location: 'Theatro Municipal',
            date: '27/08/2022'
        },
        {
            photo: 'japones2',
            title: 'Namorado de gosto caro',
            location: 'Yuzuk Sushi',
            date: '27/08/2022'
        },
        {
            photo: 'theatro',
            title: 'Jazz, nova paixão',
            location: 'Theatro Municipal',
            date: '04/09/2022'
        },
        {
            photo: 'brocha',
            title: 'Vamos pagar 10%?',
            location: 'Shopping West Plaza',
            date: '04/09/2022'
        },
        {
            photo: 'amor',
            title: 'Voltei para perua das 12h',
            location: 'Transporte Escolar',
            date: '06/09/2022'
        },
        {
            photo: 'collor',
            title: 'Lucas conhece Collor',
            location: 'Escritório do Collor',
            date: '08/09/2022'
        },
        {
            photo: 'poli',
            title: 'Lucas descobre poligamia',
            location: 'Escola Germinare',
            date: '08/09/2022'
        },
        {
            photo: 'careca',
            title: 'Lucas careca confirmed',
            location: 'Casa do Lucas',
            date: '11/09/2022'
        },
        {
            photo: 'edison',
            title: 'Lucas não gosta mais de mim',
            location: 'Aula do Edison',
            date: '13/09/2022'
        },
        {
            photo: 'edison',
            title: 'Lucas não gosta mais de mim',
            location: 'Aula do Edison',
            date: '13/09/2022'
        },
        {
            photo: 'mimindo',
            title: 'A mimir novamente',
            location: 'Transporte Escolar',
            date: '15/09/2022'
        },
        {
            photo: 'number-one',
            title: 'Number One!!',
            location: 'Number One',
            date: '16/09/2022'
        },
        {
            photo: 'perua-2',
            title: 'Mais foto na perua',
            location: 'Transporte Escolar',
            date: '11/09/2022'
        },
        {
            photo: 'cogumelo',
            title: 'Lucas Cogumelo :3',
            location: 'Aula do Edison',
            date: '11/10/2022'
        },
        {
            photo: 'sorriso',
            title: 'Foto do teams',
            location: 'Escola Germinare',
            date: '18/10/2022'
        },
        {
            photo: 'bearburguer',
            title: 'Melhor burger ever',
            location: 'Bear Burger',
            date: '23/10/2022'
        },
        {
            photo: 'renner',
            title: '2 pessoas de mesma altura',
            location: 'Lojas Renner',
            date: '23/10/2022'
        },
        {
            photo: 'cats',
            title: 'Como ter um gato?',
            location: 'Outback',
            date: '23/10/2022'
        },
        {
            photo: 'fotofofa',
            title: 'Vamo comprar mousse?',
            location: 'Escola Germinare',
            date: '03/11/2022'
        },
        {
            photo: 'xadrez',
            title: '3o no xadrez, mas o meu 1o',
            location: 'Escola Germinare',
            date: '04/11/2022'
        },
        {
            photo: 'xadrez2',
            title: '1 vs 8',
            location: 'Escola Germinare',
            date: '09/11/2022'
        },
        {
            photo: 'liberdade-3',
            title: 'Novamente Liberdade',
            location: 'Liberdade',
            date: '12/11/2022'
        },
        {
            photo: 'mercado',
            title: 'Sanduíche nosso de cada dia',
            location: 'Sonda supermercados',
            date: '18/11/2022'
        },
        {
            photo: 'mascaraq',
            title: 'Máscara de estrelinha',
            location: 'Casa do Lucas',
            date: '26/11/2022'
        },
        {
            photo: 'cara-bravo',
            title: 'Burger King novamente',
            location: 'Burger King',
            date: '10/12/2022'
        },
        {
            photo: 'pre-bday',
            title: '1 dias antes do niver!',
            location: 'Transporte Escolar',
            date: '13/12/2022'
        },
        {
            photo: 'bday',
            title: 'Feliz niver!',
            location: 'PicPay',
            date: '14/12/2022'
        },
        {
            photo: 'caneca',
            title: 'Caneca foda',
            location: 'PicPay',
            date: '14/12/2022'
        },
        {
            photo: 'pos-bday',
            title: '1 dias depois do niver!',
            location: 'Transporte Escolar',
            date: '15/12/2022'
        },
    ]

    return (
        <>
            <Menu />
            <ContainerBox>
                <ContainerTitle>
                <h1>Galeria de memórias</h1>
                <p>Durante esses 6 meses, passamos por muitas coisas, lugares e experiências diferentes. Então, essa página foi dedicada à expor esses momentos através de fotos (tiradas pela melhor fotógrafa do mundo).</p>
                </ContainerTitle>
                <CardsContainer>
                    {list.map((element, index) => {
                        const photo = element.photo
                        const title = element.title
                        const location = element.location
                        const date = element.date
                        return (<Cards  photo = {photo} title = {title} location = {location} date = {date} key={index}/>)
                    })
                    }
                </CardsContainer>
            </ContainerBox>
        </>
    )
}