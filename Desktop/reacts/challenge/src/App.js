import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Education from'./components/Education'
import Experience from "./components/Experience";
import Project from "./components/Project";


class App extends React.Component{
    state={
        education:[
            {id:1,name:"bachelor's degree in experimental science",year:2010,institute:"ibn charaf zriba hammem"},
            {id:2,name:"basic license in computer science",year:2015,institute:"ENICAR"},
            {id:3,name:"engineering diploma in information system",year:2018,institute:"polytech-central"}
        ],
        experience:[
            {id:1,name:"php/symfony developper",from:"01-01-2019",to:"31-05-2019",company:"open bee"},
            {id:2,name:"php/symfony developper",from:"01-01-2019",to:"31-05-2019",company:"open bee"},
            {id:3,name:"php/symfony developper",from:"01-01-2019",to:"31-05-2019",company:"open bee"},
            {id:4,name:"php/symfony developper",from:"01-01-2019",to:"31-05-2019",company:"open bee"},
        ],
        project:[
            {id:1,name:"Dev site web nolita",description:"conception et realisation de site vente en ligne nolita"},
            {id:2,name:"Dev site web nolita",description:"conception et realisation de site vente en ligne nolita"},
            {id:3,name:"Dev site web nolita",description:"conception et realisation de site vente en ligne nolita"},
            {id:4,name:"Dev site web nolita",description:"conception et realisation de site vente en ligne nolita"},
            {id:5,name:"Dev site web nolita",description:"conception et realisation de site vente en ligne nolita"},
            {id:6,name:"Dev site web nolita",description:"conception et realisation de site vente en ligne nolita"}
        ]
    }
  render() {
    return (
        <div className="App">
            <div className="container">
                <Navbar/>
                <Education education={this.state.education}/>
                <Experience experience={this.state.experience}/>
                <Project project={this.state.project}/>
            </div>
        </div>
    );

  }
}

export default App;
