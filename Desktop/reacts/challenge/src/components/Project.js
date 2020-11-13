import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Image from'../project.jpg'

const Project=(props)=>{
        const {project}=props

    const card=project?(
        project.map(proj=>{
            return(

                    <div className="col s9 l6" key={proj.id}>
                        <div className="card">
                            <div className="card-image">
                                <img src={Image}/>
                                    <span className="card-title">{proj.name}</span>
                            </div>
                            <div className="card-content">
                                <p>{proj.description}</p>
                            </div>
                            <div className="card-action">
                                <a href="https://www.github.com">
                                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                                </a>
                            </div>
                        </div>
                    </div>
            )
            }
        )
        )
        :(<div>I have no Project yet </div>);
        return(
            <div className="section-inner">
                <h1 className="blue-grey-text  ">Projects</h1>

                <div className="row">
                    {card}
                </div>

            </div>
        )
}

export default Project;
