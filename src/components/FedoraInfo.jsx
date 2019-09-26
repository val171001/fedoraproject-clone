import React from 'react';

export default class FedoraInfo extends React.Component {
    render() {
        const container = {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            backgroundColor: '#3C6EB4',
            textAlign: 'center',
            height: '85px',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '1.1',
            color: 'white',
        }

        const divSty={
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            borderRight: '2px solid #808080'
        }
        const aSty = {
            textDecoration: 'none',
            color: 'white'
        }
        const imgSty = {
            verticalAlign: 'center',
            marginRight: '10px',
            height: '24px',
            width: 'auto'
        }
        return (
            <div style={container}>
                <div style={divSty}>
                    <a style={aSty} href={'https://docs.fedoraproject.org/'}>
                        <img style={imgSty} src={'https://i.postimg.cc/Hr1YdT3Z/docs.png'}></img>
                        Documentación de Fedora
                    </a>
                </div>
                <div style={divSty}>
                    <a style={aSty} href={'https://ask.fedoraproject.org/'}>
                        <img style={imgSty} src={'https://i.postimg.cc/Y4ptL85Q/help.png'}></img>
                        Ayuda para los Usuarios de Fedora
                    </a>
                </div>
                <div style={divSty}>
                    <a style={aSty} href={'https://getfedora.org'}>
                        <img style={imgSty} src={'https://i.postimg.cc/k2Nn5Lpn/download.png'}></img>
                        Obtenga Fedora
                    </a>
                </div>
            </div>
        )
    }
}