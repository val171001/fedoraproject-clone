import React from 'react';
import News from './News.jsx'

export default class Header extends React.Component {
    render() {

        const postList = [
            {
                title: 'Managing network interfaces and FirewallD in Cockpit',
                tldr: "In the last article, we saw how Cockpit can manage storage devices. This article will focus on the networking functionalities within the UI. We'll see how to manage the interfaces attached to the system in Cockpit. We'll also look at the firewall and demonstrate how to assign a zone to an interface, and allow/deny services...",
                thumbnail: 'https://fedoramagazine.org/wp-content/uploads/2019/09/cockpit-networking-300x127.jpg',
                url: 'https://fedoramagazine.org/managing-network-interfaces-and-firewalld-in-cockpit/',
                month: 'SEP', day:20
            },
            {
                title: 'CodeReady Containers: complex solutions on OpenShift + Fedora',
                tldr: "Want to experiment with (complex) solutions on OpenShift 4.1+? CodeReady Containers (CRC) on a physical Fedora server is a great choice. It lets you: Configure the RAM available to CRC / OpenShift (this is key as we'll deploy Machine Learning, Change Data Capture, Process Automation and other solutions with significant memory requirements) Avoid installing anything on...",
                thumbnail: 'https://fedoramagazine.org/wp-content/uploads/2019/09/codeready-containers-300x127.jpg',
                url: 'https://fedoramagazine.org/managing-network-interfaces-and-firewalld-in-cockpit/',
                month: 'SEP', day:24
            },
        ]
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