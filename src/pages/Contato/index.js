import './contato.css'
import Header2 from '../../components/Header2'

const Contato = () => {
  return (
    <div className="contatoContainer">
    <Header2 />
         <input type="text" placeholder="Nome" className='campo'/>
         <input type="text" placeholder="E-mail" className='campo' />
         <select name="" id="" className='select' >
             <option style={{display : 'none'}}>Motivo do contato</option>
             <option value="parceria">Parceria</option>
             <option value="elogio">Elogio</option>
             <option value="reclamacao">Reclamação</option>
             <option value="outros">Outros</option>
        </select>
        <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem' className='campo'/>
    </div>
  )
}

export default Contato