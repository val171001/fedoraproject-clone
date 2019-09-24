import React from 'react';

export default class Header extends React.Component {
  render() {
    const container = {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    }
    const sty = {
      margin: '1%',
      marginLeft: '24%'
    }
    const sty2 = {
      margin: '1%',
      marginRight: '24%',
    }
    const aSty = {
      color: '#428bca',
      fontSize: '14px',
      textAlign: 'right',
      textDecoration: 'none'
    }
    return (
     <div style={container}>
       <div style={sty}>
           <img src={'https://start.fedoraproject.org/static/images/fedora-logo.png'}/>
       </div>
       <div style={sty2}>
        <a href={'https://www.redhat.com/en'} style={aSty}>
          Un Proyecto de la Comunidad patrocinado por Red-Hat 
          <img src={'https://start.fedoraproject.org/static/images/sponsors/redhat-community.png'} style={{verticalAlign: 'middle', marginLeft: '5px'}}/>
        </a>
       </div>
     </div>
    )
  }
}
