import './contato.css';
import Header1 from '../../components/Layout/Menu/Principal';
import { Button } from "@mui/material";

const Contato = () => {
  return (
    <div>
      <Header1 />
      <div className="contatoContainer" style={{ marginBottom: '150px', marginTop: '80px' }}>
        <input type="text" placeholder="Nome" className='campo' />
        <input type="text" placeholder="E-mail" className='campo' />
        <select name="" id="" className='select' >
          <option style={{ display: 'none' }}>Motivo do contato</option>
          <option value="parceria">Parceria</option>
          <option value="elogio">Elogio</option>
          <option value="reclamacao">Reclamação</option>
          <option value="outros">Outros</option>
        </select>
        <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem' className='campo' />
        <Button variant="contained" href="/mensagemenviada" style={{ backgroundColor: '#5B69E8' }}>Enviar</Button>
      </div>
    </div>
  )
}

export default Contato