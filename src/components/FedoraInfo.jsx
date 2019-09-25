import React from 'react';
//TODO Add icons next to text
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
        return (
            <div style={container}>
                <div style={divSty}>
                    <a style={aSty} href={'https://docs.fedoraproject.org/'}>
                        Documentación de Fedora
                    </a>
                </div>
                <div style={divSty}>
                    <a style={aSty} href={'https://ask.fedoraproject.org/'}>
                        Ayuda para los Usuarios de Fedora
                    </a>
                </div>
                <div style={divSty}>
                    <a style={aSty} href={'https://getfedora.org'}>
                        Obtenga Fedora
                    </a>
                </div>
            </div>
        )
    }
}