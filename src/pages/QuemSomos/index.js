import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import geladeiraBL from "../../images/geladeira.jpg";
import bebePB from "../../images/bebepB.jpg";
import Principal from "../../components/Layout/Menu/Principal";
import './styles.css'
const QuemSomos = () => {
  return (
    <div>
      <Principal />
      <div 
      className='banner2'
     >
        <div
        style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center',width:"100%" }}>
          <h1
          className='banner-text'
          >
            Gente simples, <br/> fazendo coisas pequenas, <br/>
            em lugares pouco importantes,<br/>
            consegue mudanças extraordinárias!
          </h1>
          <span style={{marginTop: '5px', color: '#FFF'}}>Provérbio Africano</span>
        </div>
      </div>
      <Card
       className="box"
        
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <Box className="box" sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              style={{ marginTop: "40px", fontFamily: 'Quicksand', marginLeft: '30px' }}
            >
              Nossa História
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              style={{ fontFamily: "Quicksand", marginLeft: '30px' }}
            >
              O Mama Ativa teve início em 2021 por meio de um desafio proposto pelo Porto Digital. 
              Tínhamos a missão de desenvolver uma solução tecnológica inspirada na agenda 2030 da ONU, 
              que aborda 16 objetivos de desenvolvimento sustentável(ODS). Escolhemos o ODS que versa sobre
              o objetivo de eliminar as mortes evitáveis de recém-nascidos e crianças menores de 5 anos até 2030. 
              Nossa proposta, modéstia a parte, foi certeira, e vencemos a competição em 1º lugar.
              Desde lá, nos encantamos pela ideia e decidimos seguir adiante com o projeto.
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
         className="cardmedia"
          component="img"
          sx={{ width: 400 }}
          image={geladeiraBL}
        />
      </Card>

      <Card
       className="box"
        
        style={{ backgroundColor: "#C7CBF3"}}
      >
        <CardMedia
         className="cardmedia"
          component="img"
          sx={{ width: 400 }}
          image={bebePB}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              style={{ marginTop: "40px", fontFamily: 'Quicksand' }}
            >
              Nossa Missão
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              style={{ fontFamily: "Quicksand" }}
            >
              Começamos dizendo que a mulher que amamenta é a nossa grande protagonista. 
              Todas as ideias, atuais e futuras, são pensadas cuidadosamente para prover a melhor 
              experiência possível para quem faz acontecer.
              Buscamos através dessa plataforma, trazer para nossa usuária um ambiente amigável, com informações claras e seguras,
              para que munidas de conhecimento, nossa usuária sinta-se motivada a compartilhar seu leite, bem como
              a através de seu exemplo, incentivar outras mulheres a repetirem o gesto.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default QuemSomos;
