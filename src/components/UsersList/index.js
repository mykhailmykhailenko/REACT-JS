import React, { useState } from 'react';
import UserCard from "../UserCard";

function UsersList (props) {
    // const [isSort, setSort] = useState();
    const [filterValue, setFilterValue] = useState('');


    const filterList = () => {
       return props.users.filter(({name: {first, last}}) => {
            return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        });    
    }
    /*
    TODO: add sorting able on hooks
    */

   const userMap = (usersArray) => usersArray.map((userObj) => <UserCard user={userObj} key={userObj.login.uuid}/>);


   const changeHandler = ({target: {name, value}}) => {
        setFilterValue(value);
        filterList();
    }

        return (
            <>
            <input 
                type="text"
                value={filterValue}
                name="filterValue"
                onChange={changeHandler}
                    />
            <div className="card-container">
                    {userMap(filterList())}
            </div>
            </>
        );
}

export default UsersList;