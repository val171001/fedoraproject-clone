import React from 'react';
import News from './News.jsx'
import postList from '../resources/posts.json'

export default class Header extends React.Component {
    render() {
        const renderPosts = []
        let index=0
        postList.forEach(value => {
            renderPosts.push(
                <News
                    title={value.title}
                    tldr={value.tldr}
                    thumbnail={value.thumbnail}
                    url={value.url}
                    month={value.month}
                    day={value.day}
                    comments={value.comments}
                    key={index}
                />
            )
            index++
        })
        
        const h4Sty = {
            color: '#555',
            fontSize: '18px',
            margin: '30px',
            fontWeight: '500',
            lineHeight: '1.1',
        }
        return (
            <div>
                <div>
                    <h4 style={h4Sty}>
                        Últimas noticias de la Revista Fedora:
                    </h4>
                </div>
                <div>
                    {renderPosts}
                </div>
            </div>
        )
    }
}