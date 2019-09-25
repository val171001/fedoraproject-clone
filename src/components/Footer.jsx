import React from 'react';

export default class Footer extends React.Component {
    render() {
        const  liSty = {
            float:'left',
            marginRight:'5px',
            padding:'0',
            border:'0',
            borderRight: '1px solid grey'
        }
        return(
            <div style={{position: 'relative', backgroundColor: 'white', top:'-15px', zIndex: '-1',height:'250px', margin: '0',padding: '0', textAlign:'center'}}>
                <div style={{paddingTop: '105px'}}>
                    <div>
                        <p>
                            © 2015 Red Hat, Inc. y otros. Por favor envíe cualquier comentario o correcciones al <a style={{textDecoration: 'none'}} href="mailto:webmaster@fedoraproject.org">equipo de sitios web</a>.
                        </p>
                        <p >
                            El Proyecto Fedora es mantenido y dirigido por la comunidad y patrocinado por Red Hat.
                            <br></br>
                            Este es un sitio mantenido por la comunidad. Red Hat no es responsable de su contenido.
                        </p>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <ul style={{listStyle:'none'}}>
                            <li style={liSty}><a style={{marginRight: '5px', textDecoration: 'none'}} href="https://fedoraproject.org/wiki/Legal:Main">Legal</a></li>
                            <li style={liSty}><a style={{marginRight: '5px', textDecoration: 'none'}} href="https://fedoraproject.org/wiki/Legal:Trademark_guidelines">Lineamientos de marcas comerciales</a></li>
                            <li style={liSty}><a style={{marginRight: '5px', textDecoration: 'none'}} href="https://fedoraproject.org/wiki/Legal:Licenses?rd=Legal/Licenses#This_Website">Licencia del contenido</a></li>
                            <li style={liSty}><a style={{marginRight: '5px', textDecoration: 'none'}} href="https://getfedora.org/sponsors">Patrocinadores</a></li>
                            <li style={liSty}><a style={{marginRight: '5px', textDecoration: 'none'}} href="https://docs.fedoraproject.org/fedora-project/project/code-of-conduct.html">Fedora Code of Conduct</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}