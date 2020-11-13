import React from 'react'


const  Eduation=(props)=>{
    let {education}=props;
    const card=education ?(

            education.map(edu=>{
                    return(
                        <div className='col l12' key={edu.id}>
                            <h5 className="title blue-grey-text ">{edu.name}</h5>
                            <p className="blue-grey-text">{edu.institute}</p>
                            <p className="black-text ">{edu.year}</p>

                        </div>
                    );
                })

        )
        :(<div className='col l12'>
            <h4 className="title red-text">I have no diploma </h4>
        </div>);
    return(
        <div className="section-inner">
        <h1 className="blue-grey-text  ">Educations</h1>

            <div className="row">
                {card}
            </div>

        </div>

    )
}

export default Eduation;
