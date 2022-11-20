 
import React, { Component } from 'react';
import UserCard from "../UserCard";

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSort: true,
        }
    }


    userMap = () => this.props.users.map((userObj) => <UserCard user={userObj} key={userObj.login.uuid}/>);

    // sortUsers = () => {
    //     const {users} = this.props;
    //     const {isSort} = this.state;
    //     const newUsers = [...users];
    //     newUsers.sort((a,b) => (a.name > b.name && isSort) ? 1 : -1);
    //     this.setState({
    //         users: newUsers,
    //         isSort: !isSort
    //     })
    // }


    render() {
        return (
            <>
            {/* <button onClick={this.sortUsers}>Sorted</button> */}
            <div className="card-container">
                    {this.userMap()}
            </div>
            </>
        );
    }
}

export default UsersList;