import React from 'react';
import News from './News.jsx'

export default class Header extends React.Component {
    render() {
        const style = {
            backgroundColor: 'transparent' //#DEDEDE'
        }
        const h4Sty = {
            color: '#555',
            fontSize: '18px',
            margin: '30px',
            fontWeight: '500',
            lineHeight: '1.1',
        }
        return (
            <div style={style}>
                <h4 style={h4Sty}>
                    Últimas noticias de la Revista Fedora:
                </h4>
                <News />
            </div>
        )
    }
}