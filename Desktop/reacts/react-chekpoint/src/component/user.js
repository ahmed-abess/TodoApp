import React from'react';

const user =(props)=>{
    const {user , myFunction}=props;
    console.log(user);
   return(
       <div className="card">
           <div className="card-header">
               <div className={user.isAuth ? ("icons  float-right green-icons"):("icons  float-right red-icons")}></div>
           </div>
           <div className="card-body text-left">
               <p>name : {user.name}</p>
               <p>email : {user.email}</p>
               <p>age : {user.age}</p>
              { user.address &&  <p>addresse : {user.address}</p>}

           </div>
           <div className="card-footer">
               <p onClick={()=>{myFunction(user)}}>click me</p>
           </div>
       </div>
   )
}

export default user;
