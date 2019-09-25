import React from 'react';

export default class JoinFedora extends React.Component {
    render() {
        const cont = {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            zIndex: '5'
        }
        const first = {
            backgroundColor: '#3c6eb4',
            color: 'white',
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            height: '130px'
        }
        const imgSty = {
            display: 'block',
            maxWidth: '100%',
            height: 'auto',
            marginLeft: '40px',
            verticalAlign: 'middle'
        }
        const title = {
            marginTop: '36px',
            marginBottom: '10px',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '1.1',
        }
        const second = {
            backgroundColor: '#294172',
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            height: '130px'
        }
        const title2 = {
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '1.1',
            marginTop: '20px',
        }
        const imgSty2 = {
            marginTop: '26px'
        }
        return (
            <div style={cont}>
                <div style={first}>
                    <img style={imgSty} src={'https://start.fedoraproject.org/static/images/fmag-ribbon.png'}></img>
                    <h3 style={title}>
                        <a href={'fedoramagazine.org'} style={{textDecoration: 'none', color: 'white'}}>
                            Lea más en
                            <br></br>
                            <strong>
                                fedoramagazine.org!
                            </strong>
                        </a>
                    </h3>
                </div>
                <div style={second}>
                    <div style={{marginLeft: '80px'}}>
                        <h3 style={title2}>
                            <a href={'https://join.fedoraproject.org/'} style={{textDecoration: 'none', color: 'white'}}>
                                ¿Quiere contribuir
                                <br></br>
                                a Fedora?
                            </a>
                        </h3>
                        <p style={title2}><a style={{textDecoration: 'none', color: 'white'}} href="https://join.fedoraproject.org/"><strong>Únase a nosotros</strong>.</a></p>
                    </div>
                    <div>
                        <img style={imgSty2} src={'https://start.fedoraproject.org/static/images/community.png'}></img>
                    </div>
                </div>
            </div>
        )
    }
}