import './styles.css';

export default function Depoimento(){
  return(
    <div className='main_container'>
      <div className='depo_container'>
        <h1 className="depo_text"> 
          “Eu me cuidava ao máximo porque eu estava alimentando vidas. Não era só o meu filho”  
        </h1>
        <h3 className='depo_author'>Valléria Isadora Almeida</h3>
        <h4 className='depo_details'>Mãe de 2 filhos, foi doadora de leite por 9 meses.</h4>
      </div>
      <div className='sentence_container'>
        <h1 className='sentence_text'>Para você, é uma doação.<br /> Para as famílias de Sofia e Rafael, receptores de leite, foi a esperança de vê-los crescer.</h1>
      </div>
    </div>
  );
}