import React, { useState, useEffect} from 'react';
import Spiner from '../Spiner';
import {getUsers} from '../../api';
import UsersList from '../UsersList';
function UserDashboard (props) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setFetching] = useState(true);
    const [page, setPage] = useState(1);      
    useEffect(()=>{
        getData();
    }, [page]);
   const getData = () => {
        getUsers({page})
        .then(data => {
            setUsers(data.results)
        })
        .catch((error)=>{
            setError(error)
        })
        .finally(()=>{
            setFetching(false)
        })
    }
   const next = () => {
        setPage(page+1)
    }
   const prev = () => {
        if (page > 1) {
           setPage(page-1)
        }
    }
        return (
            <section>
                <button onClick={prev}>{'<'}</button>
                    <span>{page}</span>
                <button onClick={next}>{'>'}</button>
                {error && <div>Oops! Something goes wrong!</div> }
                {users && <UsersList users={users} setUsers={setUsers}/>}
                 {isFetching && <Spiner />}

            </section>
        );
        }
export default UserDashboard;