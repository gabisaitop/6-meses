import Menu from '../../Components/Menu'
import { ContainerBox, Container1, Container2, Container3 } from "./style";

export default function Home() {
    const image1 = require(`./assets/gabielucas1.png`)
    const image2 = require(`./assets/lucas.jpeg`)
    const image3 = require(`./assets/gabielucas2.jpeg`)

    return (
        <>
            <Menu />
            <ContainerBox>
                <Container1>
                    <div>
                        <h3>14/12/2022</h3>
                        <h1>FINALMENTE, FELIZ ANIVERSÁRIO!</h1>
                        <p>E também feliz 9 meses!!! Nem sei como eu te aguentei tanto tempo, honestamente. Mas, já que você acertou as perguntas, aproveite esse colírio para os olhos que desenvolvi com minhas habilidades em programação!!</p>
                        <h5>Feito com carinho &hearts;</h5>
                    </div>
                    <div>
                        <img src={image1} alt="nós" />
                    </div>
                </Container1>
                <Container2>
                <img src={image2} alt="voce" style={{'width': '380px', 'borderRadius': '8px', 'marginRight': '100px'}} />
                    <div>
                        <h2>SOBRE LUCAS BARBOSA</h2>
                        <p>Lucas Barroso Sant'Anna, nascido em 2010 (bem jovem, eu sei), possui 1.70 m de altura (mesmo estando completamente em negação sobre isso) e tem como principal traço de personalidade ser um programador calvíssimo! <br /><br /> Apesar da sua falha capilar, ele até que é um bom partido aceitavelmente interessante (o que falta de cabelo, tem em excesso na personalidade). Ele é MUITO inteligente (e igualmente DRAMÁTICO), GG (gato gostoso), super talentoso, conhecedor assíduo da música (porém péssimo gosto musical), carinhoso quando quer, bem anti-brega e simplesmente um pitel muito muito muito especial para mim. Portanto, é possível concluir a partir dos fatos constatados que o garoto é um partidão, que infelizmente para as demais interessadas, já tem dona! ENFIM, ele já sabe como me sinto sobre ele, mas só para relembrar, eu &hearts; você [muito].</p>
                    </div>
                </Container2>
                <Container3>
                    <div>
                        <h2>SOBRE O CASAL MENOS BREGA DO MUNDO</h2>
                        <p>Lucas Barroso Sant'Anna e Gabriela Saito Pereira se conheceram inicialmente enviando trava slacks um ao outro. Com o tempo, Gabriela percebeu que Lucas era bem desumilde, mas decidiu dar uma chance para o garoto do mesmo jeito (quem não faz caridade hoje em dia, não é mesmo?). Assim, no dia 13 de Março de 2022, foram na Paulista pela primeira vez e foi aí que tudo começou... <br /><br />
                        Com saídas quase que semanais, gastanto MUITO MUITO dinheiro, mas também se divertindo bastante, começou esse relacionamento lindo e FECHADO (lucas NÃO é do mundo, como é possível ver na foto ao lado, ele possui uma dona). Enfim,  hoje, dia 14 de Dezembro, é aniversário desse garoto dramático, porém especial, e ontem, 13 de Dezembro, foi nosso aniversário de oficialmente 9 meses! Eu te amo muito viu, espero que tenha gostado da minha super declaração de amor a você!
                        <br /><br />
                        <strong>PS: se você não achar o easteregg, esse vai ser o último :/</strong></p>
                    </div>
                    <img src={image3} alt="nos pt2" style={{'width': '380px', 'borderRadius': '8px', 'marginLeft': '100px'}}/>
                </Container3>
            </ContainerBox>
        </>
    )
}