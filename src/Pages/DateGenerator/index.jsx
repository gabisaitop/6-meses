import { useState } from 'react';
import Menu from '../../Components/Menu'
import { CardsContainer, ContainerBox, GeneratorContainer, ContainerTitle, GeneratorBox, ButtonBox, FavoriteBox, CardsBox } from "./style";
import DateCard from '../../Components/DateCard';

export default function DateGenerator() {

    const places = ['Piquenique no Villa-Lobos', 'Pinacoteca', 'Museu da Lingua Portuguesa', 'Hoppi Harri', 'Paulista', 'Liberdade', 'Jardim Botânico', 'Aquário de São Paulo', 'Farol Santander', 'Cinema no Shopping', 'Restaurante Chinês da Liberdade', 'Bear Burguer', 'Outback', 'Rodízio de Pizza', 'Rodízio de japonês', 'Number One', 'Campos de Jordão', 'Águas de São Pedro', 'Termas dos Laranjais', 'Café com leitura', 'Mercadão de São Paulo', 'Piquenique no Ibirapuera', 'Compras no Brás', 'Estação Tatuapé', 'Rolê na 12 de Outubro', 'Stand de tiro', 'Playland União', 'Rodízio de Massas', 'Terraço Itália', 'Blue Note SP - Paulista', 'Boliche - Shopping West Plaza', 'Boliche - Shopping União', 'Impulso Park', 'Escape Room', 'Museu da Imagem e do Som', 'Ring de patinação', 'Instituto Tomi Ohtake', 'Itau Cultural', 'Dia de Ceder da Gabi', 'Dia de ceder do lucas', 'Dia Polvo Escolhe Tudo', 'Assistir jogo do Brasil juntos', 'Show ao vivo', 'Cinema ao ar livre', 'Entrecotê Paris', 'Paris 6', 'Coco Bambu', 'Brincar com o Enzo<3']
    const budget1 = [25, 40, 50, 75, 100, 150]
    const planPerson = ['Gabi', 'Lucs', 'Gabi + Lucs']

    const activities = ['Skin Care Day', 'Maratona de MCC na casa da Gabi', 'Cinema na casa da Gabi', 'Piscina na casa da Gabi', 'Assar cookies na casa do Lucs', 'Assar brownies na casa do Lucs', 'Assar bolo na casa do Lucs', 'Cozinhar macarrão na casa do Lucs', 'Noite/ Dia de jogos de tabuleiro', 'Maratonar uma série na Netflix', 'Jogar jogos online', 'Fazer algum curso juntos', 'Ler algum livro juntos', 'Dia de Ceder da Gabi', 'Dia de ceder do lucas', 'Maratonar Drama Total', 'Jogar MiniMania', 'Dançar na Chuva', 'Pintura/ Desenho juntos', 'Jogar Dangaronpa no Xbox', 'Jogar the sims 4 no Xbox', 'Jogar GTA no xbox']
    const budget2 = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50]

    let [listResults, setlistResults] = useState([])
    let [listResults2, setlistResults2] = useState([])

    function random() {

        let placeDefined = places[Math.floor(Math.random() * places.length)]
        let monthDefined = Math.floor(Math.random() * 12)
        let budgetDefined = budget1[Math.floor(Math.random() * budget1.length)]
        let planDefined = planPerson[Math.floor(Math.random() * planPerson.length)]

        if (monthDefined === 0) {
            monthDefined = 3
        }

        let dateDefined = `13/${monthDefined}`

        setlistResults((list) => {
            let newListResults = list
            newListResults = [placeDefined, dateDefined, budgetDefined, planDefined]
            return newListResults
        })
    }

    function random2() {

        let activitiesDefined = activities[Math.floor(Math.random() * activities.length)]
        let dayDefined = Math.floor(Math.random() * 31)
        let monthDefined = Math.floor(Math.random() * 12)
        let budgetDefined = budget2[Math.floor(Math.random() * budget2.length)]
        let planDefined = planPerson[Math.floor(Math.random() * planPerson.length)]

        if (dayDefined === 0) {
            dayDefined = 13
        } else if (monthDefined === 0) {
            monthDefined = 1
        }

        let dateDefined = `${dayDefined}/${monthDefined}`

        setlistResults2((list) => {
            let newListResults = list
            newListResults = [activitiesDefined, dateDefined, budgetDefined, planDefined]
            return newListResults
        })
    }

    const downloadTxtFile = () => {
        const fileOrganizationList = []
        listFavorites.forEach(list => {
            const organizedList = `
            -------
            ${list[0]} organizado por ${list[3]}, ${list[1]}
            O valor máximo a ser gasto é de ${list[2]}
            -------
        `
            fileOrganizationList.push(organizedList)
        })
        const element = document.createElement("a");
        const file = new Blob(fileOrganizationList, {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "dateIdeas.txt";
        document.body.appendChild(element);
        element.click();
    };

    let [listFavorites, setlistFavorites] = useState([])

    function addingFavorite() {
        listResults.length !== 0 ?
            !listFavorites.includes(listResults) ?
                setlistFavorites([...listFavorites, listResults]) : alert('This date was already saved!')
            : alert('You need to randomize a date before saving it!')
    }

    function addingFavorite2() {
        listResults2.length !== 0 ?
            !listFavorites.includes(listResults2) ?
                setlistFavorites([...listFavorites, listResults2]) : alert('This date was already saved!')
            : alert('You need to randomize a date before saving it!')
    }

    return (
        <>
            <Menu></Menu>
            <ContainerBox>
                <ContainerTitle style={{ 'marginBottom': '30px' }}>
                    <h1>Gerador de dates</h1>
                    <p>EU SEI QUE NÓS TEMOS QUE PARAR DE GASTAR!! Entretanto, nessa página há dois geradores de encontros aleatórios, um para datas comemorativas (pode ver que todas as datas são para o dia 13) e outro para dias aleatórios (rolês caseiros, zero custo, no gastos). No final, você consegue fazer dowload de um txt com os dates que você mais gostar!</p>
                </ContainerTitle>

                <GeneratorBox>
                    <GeneratorContainer>
                        <h3>DATES</h3>
                        <p>Lugar: {listResults[0]}</p>
                        <p>Data: {listResults[1]}</p>
                        <p>Orçamento: R${listResults[2]},00</p>
                        <p>Quem vai planejar o dia: {listResults[3]}</p>
                        <ButtonBox>
                            <button onClick={random}>GERAR</button>
                            <img style={{ 'width': '30px' }} src={require(`./assets/heart-icon.png`)} onClick={addingFavorite} />
                        </ButtonBox>
                    </GeneratorContainer>

                    <GeneratorContainer>
                        <h3>ROLES CASEIROS</h3>
                        <p>Lugar: {listResults2[0]}</p>
                        <p>Data: {listResults2[1]}</p>
                        <p>Orçamento: R${listResults2[2]},00</p>
                        <p>Quem vai planejar o dia: {listResults2[3]}</p>
                        <ButtonBox>
                            <button onClick={random2}>GERAR</button>
                            <img style={{ 'width': '30px' }} src={require(`./assets/heart-icon.png`)} onClick={addingFavorite2} />
                        </ButtonBox>
                    </GeneratorContainer>
                </GeneratorBox>


                {listFavorites.length > 0 &&
                    <FavoriteBox>
                    <p>DATES FAVORITOS</p>
                    <img style={{ 'width': '30px' }} src={require(`./assets/download-icon.png`)} onClick={downloadTxtFile} />
                </FavoriteBox>}

                <CardsBox>
                    <CardsContainer>
                        {
                            listFavorites.map((list) => {
                                return <DateCard place={list[0]} dates={list[1]} budget={list[2]} person={list[3]} />
                            })
                        }
                    </CardsContainer>
                </CardsBox>
            </ContainerBox>
        </>
    )
}