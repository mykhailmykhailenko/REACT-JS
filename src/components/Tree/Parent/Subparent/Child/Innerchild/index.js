import UserContext from "../../../../../../contexts/UserContext";

function Innerchild (props) {
    return (
     <UserContext.Consumer>
      {([{firstName, lastName, avatar}, logOut])=>{
         return  (<div style={{border: 'inherit', padding: '20px'}}>
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