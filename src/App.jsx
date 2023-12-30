// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css'; // Import the corresponding CSS file

const buttonData = [
  {
    title: "01",
    content: (<div>Dia 1: <br/>Durante os 31 dias você vai lançar para o universo:
    "Tudo que eu quero, eu posso até  não  ter, mas tudo que tenho eu mereço. Tudo que eu quero pode vir para mim. mereço, atraio e luto por tudo que quero e sou grato(a) ao universo por ser assim"
              <br/>Faça três afirmações positivas sobre situações do seu trabalho, estudos, atividades e pessoal.</div>),
    color: "green", // Adjust this color
  },
  {
    title: "02",
    content: (<div>Dia 2: <br/>Coisas que você ama em você 
    <br/>Hoje é direto!
    Faça uma lista de 1 a 10 e escreva 10 coisas que te fazem se enxergar único.<br/>1) Quais seus pontos fortes
<br/>2)  O que você ama no seu corpo
<br/>3) O que gosta sobre seus pensamentos 
<br/>4) Etc...
<br/>Não se deixe parar até ter dez .
<br/>Agora olhe essa lista, você é incrível,  não  é!?
    </div>),
    color: "orange", // Adjust this color
  },
  {
    title: "03",
    content: (<div><br/>Dia 3:
<br/>Faça uma massagem  com seu óleo ou hidratante no seu corpo, na frente do espelho, tocando com carinho em cada parte dele e olhe atentamente para você, admire cada pedacinho seu e aceite aqueles que não  gosta tanto, se puder põe uma musiquinha de fundo respire fundo e termine se abraçando e dizendo: Eu me amo, me valorizo e me quero bem.</div>),
    color: "green", // Adjust this color
  },
  {
    title: "04",
    content: (<div><br/>Dia 4:
      <br/>Faça uma carta de amor para você, coloque junto um bombom, uma flor, ou algo do tipo e coloque embaixo do seu travesseiro, borrife seu perfume no seu travesseiro, para conhecer seu cheiro e leia na manhã seguinte  sua cartinha.</div>),
    color: "purple", // Adjust this color
    margin: "1"
    
  },
  {
    title: "05",
    content: (<div><br/>Leve para seu trabalho, ou em casa durante o seu dia no seus afazeres, um disquete e toda vez que você tiver um dissabor ( põe uma bolinha colorida na sua boca e deixe derreter, feche os olhos e se acolha mentalmente) "se você não  puder o açúcar,  escolha algo para adoçar seu coração"</div>),
    color: "green", // Adjust this color
  },
  {
    title: "06",
    content: (<div>Dia 6:
      <br/>Faça uma refeição com você,  arrume sua mesa, coloque um espelho na frente, se olhe profundamente e acolha seus sentimentos , emoções e pensamentos e veja como sua companhia é incrível e como seus pensamentos te pertencem e você nunca se ouviu tanto</div>),
    color: "orange", // Adjust this color
  },
  {
    title: "07",
    content: (<div>Dia 7:
      <br/> Faça algo por você,  um skin care, uma hidratação no cabelo, uma unha, vista uma roupa diferente, grava uma mensagem bem bonita e  ouça varias vezes durante o dia</div>),
    color: "green", // Adjust this color
  },
  {
    title: "08",
    content:(<div>Dia 8:
      <br/>Arrume seu guarda roupas, tire o que não  combina com essa nova fase sua,  joga fora o que ta quebrado, rearrume seus portas retratos, arrume um cantinho para ser seu, de  fazer algo por você,  como ler, escutar música,  assistir tv, ficar quietinho etc...</div>),
    color: "orange", // Adjust this color
  },
  {
    title: "09",
    content: (<div>Dia 9:
      <br/>Se leve para jantar, almoçar ou tomar café com você,  se arrume como se fosse encontrar alguém e curta sua companhia. 
      <br/>Você é sua melhor companhia, aprenda a ficar com você e se divertir</div>),
    color: "green", // Adjust this color
  },
  {
    title: "10",
    content: (<div>Dia 10: <br/>Faça uma refeição nutritiva.
      <br/>Assim como no exercício, hoje NÃO é para atingir uma determinada meta.
      <br/>Hoje, você faz um SUCO VERDE ou uma saladinha ou coma uma receita saudável.
      <br/>Ame seu corpo! Alimentando-o com coisas boas. Vitaminas, minerais e energia para terminar o seu dia forte.
      <br/>Alimentação saudável e exercícios não são punição, são amor próprio. <br/>Desafie-se a ver desta forma.</div>),
    color: "orange", // Adjust this color
  },
  {
    title: "11",
    content: (<div>Dia 11:
      <br/>Faça uma atividade física hoje,  pode ser um alongamento de 5 minutos,  uma caminhada até a padaria, soltar um ponto antes de casa, uma pedaladinha até a praça. 
      <br/>Perceba que você pode cuidar do seu corpo, o respeitando como único e buscando tratá-lo como um templo onde habita tudo que é seu e importante</div>),
    color: "green", // Adjust this color
  },
  {
    title: "12",
    content:(<div>Dia 12:
      <br/>Você tem um bichinho(tipo um peixinho, um cãozinho ou um gatinho)? Se sim ótimo!  tire tempo de qualidade com eles hoje  sem pressa até se sentir satisfeito de afeto.
      <br/>Se não  tiver, que tal ter uma plantinha, procurar um hobby hoje para começar? Tipo dançar, teatro, um curso que gostaria de fazer como hobby e ir atrás? 
      Acredite em voce, eu acredito</div>),
    color: "orange", // Adjust this color
  },
  {
    title: "13",
    content: (<div></div>),
    color: "green", // Adjust this color
  },
  {
    title: "14",
    content: (<div></div>),
    color: "orange", // Adjust this color
  },
  {
    title: "15",
    content: (<div></div>),
    color: "green", // Adjust this color
  },
  {
    title: "16",
    content: (<div></div>),
    color: "orange", // Adjust this color
  },
  {
    title: "17",
    content: (<div></div>),
    color: "green", // Adjust this color
  },
  {
    title: "18",
    content: (<div></div>),
    color: "orange", // Adjust this color
  },
  {
    title: "19",
    content: (<div></div>),
    color: "green", // Adjust this color
  },
  {
    title: "20",
    content: (<div></div>),
    color: "orange", // Adjust this color
  },
  {
    title: "21",
    content: `Dia 21: Tire hoje para descansar...
               Descanse sem culpa, quebre a rotina e as obrigações, só faça o estritamente necessário.`,
    color: "green", // Adjust this color
  },
  {
    title: "22",
    content: `Dia 22: Arrume sua casa, suas coisas e organize sua vida...
               Perceba se você está se sabotando, deixando para trás o direito de gozar nos seus feitos.`,
    color: "orange", // Adjust this color
  },
  {
    title: "23",
    content: `Dia 23: Veja quando foi a última vez que fez um check-up...
               Marque um clínico, peça um hemograma. Cuide da sua saúde física.`,
    color: "purple", // Adjust this color
  },
  {
    title: "24",
    content: `Dia 24: Cuide de sua saúde mental...
               Se afaste de ambientes tóxicos, escolha não agradar todo mundo.`
  },
  {
    title: "25",
    content: "Discover effective cardio exercises for a great workout.",
    color: "orange",
  },
  {
    title: "26",
    content: "Learn about different gym equipment and their uses.",
    color: "green",
  },
  {
    title: "27",
    content: "Discover effective cardio exercises for a great workout.",
    color: "orange",
  }, {
    title: "28",
    content: "Learn about different gym equipment and their uses.",
    color: "green",
  },
  {
    title: "29",
    content: "Discover effective cardio exercises for a great workout.",
    color: "orange",
  }, {
    title: "30",
    content: "Learn about different gym equipment and their uses.",
    color: "green",
  },
  {
    title: "31",
    content: "Discover effective cardio exercises for a great workout.",
    color: "orange",
  },
];

const ButtonPage = () => {
  const { buttonNumber } = useParams();
  const navigate = useNavigate();
  const buttonInfo = buttonData[parseInt(buttonNumber, 10) - 1] || {
    title: "Default Title",
    content: "Default Content",
    color: "blue",
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="button-page-background"> {/* Add the class for gradient background */}
      <div style={{padding: '20px' }}>
        <h1>{buttonInfo.title}</h1>
        <p>{buttonInfo.content}</p>
        <Link to="/">Back to Buttons</Link>
      </div>
    </div>
  );

};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <div className="home-container">
              <div className="gradient-background" />
              <div className="content">
                <h1>Seu presente de Janeiro</h1>
                <p>31 dias de reflexões e autocuidado</p>
                <div className="button-list">
                  <Link to={`/button/1}`} style={{ backgroundColor: buttonData[0].color }}>
                    {buttonData[0].title}
                  </Link>
                  <div className="button-grid">
                    {buttonData.slice(1).map((button, index) => (
                      <Link key={index} to={`/button/${index + 2}`} style={{ backgroundColor: button.color }}>
                        {button.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/button/:buttonNumber" element={<ButtonPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
