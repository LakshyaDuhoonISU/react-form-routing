import { useState, useEffect } from 'react'
import './Users.css'
function Users() {

    let [names, setName] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setName(data);
            })
            .catch((err) => { console.log(err); })
    }, [])
    return (
        <div className='container'>
            <table>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
                {
                    names.map((user) => {
                        return (<tr><td>{user.name}</td><td> {user.username}</td><td>{user.email}</td><td>{user.website}</td></tr>);
                    })
                }
            </table>
        </div>
    )
}

export default Users