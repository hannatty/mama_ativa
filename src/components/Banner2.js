import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Banner2() {
    return (
      <div 
      style={{
        backgroundImage: "url(/banner2.svg)",
        height: "300px", width: '100%', backgroundRepeat: "no-repeat"
      }} >
        <div
        style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <h1
          style={{marginTop: '30px',marginBottom: '0px', fontFamily: 'Hammersmith One', fontSize: '38px', color: '#FFF' }}>
            Gente simples, <br/> fazendo coisas pequenas, <br/>
            em lugares pouco importantes,<br/>
            consegue mudanças extraordinárias!
          </h1>
          <span style={{marginTop: '5px', color: '#FFF'}}>Provérbio Africano</span>
        </div>
      </div>
    );
  };