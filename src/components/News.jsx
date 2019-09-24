import React from 'react';

export default class News extends React.Component {
    render() {
        const container = {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            position: 'absolute'
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
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            marginLeft: '10px',
            backgroundColor: 'white'
        }
        const imgStyle = {
            width: '100px',
            height: 'auto',
        }
        return (
            <div style={container}>
                <div>
                    <p style={month}>
                        SEP
                    </p>
                    <p style={day}>
                        20
                    </p>
                </div>
                <div style={news}>
                    <div>
                        <img style={imgStyle} src={'https://fedoramagazine.org/wp-content/uploads/2019/09/cockpit-networking-300x127.jpg'}></img>
                    </div>
                        <a href={'https://fedoramagazine.org/managing-network-interfaces-and-firewalld-in-cockpit/'}>
                            <h3>
                                Managing network interfaces and FirewallD in Cockpit
                            </h3>
                        </a>
                        <p>
                        In the last article, we saw how Cockpit can manage storage devices. This article will focus on the networking functionalities within the UI. We'll see how to manage the interfaces attached to the system in Cockpit. We'll also look at the firewall and demonstrate how to assign a zone to an interface, and allow/deny services...
                        </p>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}