
import './index.css'
import leftArrow from '../../images/left-arrow.png'
import rightArrow from '../../images/right-arrow.png'
import { useRef } from 'react'
const CarouselComponent = () =>{


   const carousel = useRef(null)

   const previousClick = (e) =>{
      e.preventDefault()
      carousel.current.scrollLeft -= carousel.current.offsetWidth
   }
   
   const nextClick = (e) =>{
      e.preventDefault()
      carousel.current.scrollLeft += carousel.current.offsetWidth

   }
    return(
       <div className='carousel-container'>
         <div className='button'  onClick={previousClick}> 
            <img src={leftArrow} alt=""  />
         </div>
         <div className='carousel'  ref={carousel} >
         <div className='carousel-item'>
         <p>O frasco que armazenará o leite deve ser de vidro com tampa de plástico, como os de café solúvel. Antes de utilizá-lo,  esterelize-o em água fervente por 15 minutos.</p>
         </div>
         
         <div className='carousel-item'>
         <p>A doadora deve estar de cabelos presos
         e idealmente máscara no rosto. Massageie as mamas em movimentos circulares para que o leite seja retirado de todas as regiões do peito. Inicie a coleta no frasco previamente esterelizado.</p>
         </div>
         <div className="carousel-item">
         <p>Após o fim da coleta, tampe o frasco, armazene-o no congelador e entre em contato com o banco de leite que desejar. O leite pode ficar armazenado por até 15 dias.</p>
         </div>
         </div>
         <div className='button' onClick={nextClick}>
           <img src={rightArrow} alt="" />
         </div>
      </div>
         )
   }

export default CarouselComponent