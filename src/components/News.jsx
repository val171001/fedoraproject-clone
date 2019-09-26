import React from 'react';

export default class News extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const container = {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            width: '90%',
        }
        const month = {
            fontSize: '16px',
            textTransform: 'uppercase',
            margin: '0'
        }
        const day = {
            fontSize: '30px',
            fontWeight: 'bold',
            margin: '0'
        }
        const news = {
            display:'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '0',
            margin: '0',
            marginLeft: '15px'
        }
        const imgStyle = {
            margin: '10%',
            width: '100px',
            height: 'auto',
        }
        const readMore = {
            float: 'right',
            backgroundColor: '#3c6eb4',
            borderRadius: '5px',
            color: 'white',
            marginRight: '30px',
            marginBottom: '-15px',
            padding: '5px 10px 5px 10px',
            fontSize: '14px',
            textDecoration: 'none'
        }
        const newsP = {
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'center'
        }
        return (
            <div style={newsP}>
                <div style={container}>
                    <div>
                        <p style={month}>
                            {this.props.month}
                        </p>
                        <p style={day}>
                            {this.props.day}
                        </p>
                    </div>
                    <div style={news}>
                        <div style={{padding: '0', margin: '0'}}>
                            <img style={imgStyle} src={this.props.thumbnail}></img>
                        </div>
                        <div style={{margin:'0', padding: '0', marginLeft: '3%', marginRight: '1%'}}>
                            <a href={this.props.url} style={{textDecoration: 'none', margin:'0'}}>
                                <h3 style={{fontSize: '24px', fontWeight: '500', lineHeight: '1.1', color: '#3c6eb4'}}>
                                    {this.props.title}
                                </h3>
                            </a>
                            <p style={{margin:'0', marginBottom: '10px'}}>
                                {this.props.tldr}
                            </p>
                            <a style={readMore} href={this.props.url}>
                                Read more...
                            </a>
                        </div>
                        <div style={{paddingRight: '15px', float: 'right', display:'grid', gridTemplateColumns: 'auto auto'}}>
                            <img style={{height: '40px', wisth: 'auto', verticalAlign: 'center', margin:'0', padding:'0'}} src={'https://i.postimg.cc/tYxqKsdn/comment.png'}></img>
                            <p>{this.props.comments}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}