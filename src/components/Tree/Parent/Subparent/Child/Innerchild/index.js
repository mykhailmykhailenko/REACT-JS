import UserContext from "../../../../../../contexts";

function Innerchild (props) {
    return (
     <UserContext.Consumer>
      {([{firstName, lastName, avatar}, logOut])=>{
         return  (<div style={{border: '2px solid black', padding: '20px'}}>
         <p>Innerchild</p>
         <p>{firstName} {lastName} </p>
         <img src={avatar} />
         <button onClick={logOut}>LogOut</button>
       </div>
         )
         }}
     </UserContext.Consumer>
    )
 }

 export default Innerchild;
