
import './comoDoar.css'
import right from '../../images/right1.png'
import left from '../../images/left1.png'
import saude from '../../images/cuidados-de-saude1.png'
import producao from '../../images/milk2.png'
import remedios from '../../images/no-drugs2.png'
import Header2 from '../../components/Header2'


const ComoDoar = () => {
    let texto = 'Vem cá que a gente te explica ;)'
    return(
        <div className='contComoDoar' >
            <Header2 />


        
        <div className='divTitulo'>
             <img src={right} alt="" className='image' />
             <h1 >O que preciso<br/>para ser doadora  ?</h1>   
             <img src={left} alt=""  className='image'/>    
        </div>
        <div className='requisitos'>
             <div>
                <img src={saude} alt=""  className='imageRequisitos'/> 
                <span>Saúde</span>
                <p >Para doar leite materno, 
                a lactante em questão precisa possuir boa saúde.</p>   
            </div>
            <div>
                <img src={producao} alt=""  className='imageRequisitos'/>
                <span>Produção</span>
                <p >
                Produzir leite excedente,
              para que não comprometa a amamentação do seu bebê.
                </p>
            </div>    
             <div>
             <img src={remedios} alt=""  className='imageRequisitos'/>
             <span>Remédios</span>
             <p >Não estar usando medicamentos que impeçam a doação.</p>
             </div>
        </div>
        <div className='div3'>
             <h2 >Coletando o leite de forma correta </h2>
             <p>{texto}</p>
        </div>
        </div>
    )
}

export default ComoDoar