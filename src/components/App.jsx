import React from 'react'
import Header from './Header.jsx'
import FedoraInfo from './FedoraInfo.jsx'
import NewsContainer from './NewsContainer.jsx'
import JoinFedora from './JoinFedora.jsx'
import Footer from './Footer.jsx'

export default class App extends React.Component {
  render() {
    return (
     <div>
       <Header />
       <FedoraInfo />
       <NewsContainer />
       <JoinFedora />
       <Footer />
     </div>
    )
  }
}
