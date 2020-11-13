import React from 'react'


const Experience =(props)=>{
    const {experience}=props;
    console.log(experience);
    const card=experience ?(

            experience.map(exp=>{
                return(
                    <div className='col l12' key={exp.id}>
                        <h5 className="title blue-grey-text ">{exp.name}</h5>
                        <p className="blue-grey-text">{exp.company}</p>
                        <p className="black-text ">from {exp.from} to {exp.to}</p>

                    </div>
                );
            })

        )
        :(<div className='col l12'>
            <h4 className="title red-text">I have no experience yet  </h4>
        </div>);
    return(
        <div className="section-inner">
            <h1 className="blue-grey-text">Experiences</h1>
            <div className="row">
                {card}
            </div>

        </div>
    )
}

export default Experience;
