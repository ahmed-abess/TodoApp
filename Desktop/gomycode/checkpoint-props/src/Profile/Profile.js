
import React from'react'
import propTypes from 'prop-types'

class Profile extends React.Component{


render(){
    const {data}= this.props;
    let inlineStyle={color:'red',fontSize:'50px'};
return(
    <>
        <div className="profile-container">
            {this.props.children}
            <div className="info">
                <p className="fullname">Fullname: <br/> {data.fullname}</p>
                <p>Age: <br/> {this.props.age}</p>
                <p  className={inlineStyle}>Biography: <br/> {data.bio}</p>
            </div>
        </div>
    </>
)
}

}
Profile.propTypes={
    age:propTypes.number,
    data: propTypes.array
}
export default Profile
