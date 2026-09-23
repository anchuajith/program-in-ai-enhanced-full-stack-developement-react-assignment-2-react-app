import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {

            try {

                const response = await fetch(
                    "https://dummyjson.com/users"
                );

                const data = await response.json();

                setUsers(data.users);

            } catch (error) {

                console.log("Error fetching users:", error);

            }

        };

        fetchUsers();

    }, []);

    return (
        <div className='min-h-screen bg-pink-100 p-10'>

            <h1 className="justify-self-center font-extrabold text-3xl m-5">Users</h1>

            <table className='border border-black p-2 mx-auto'>

                <thead className='bg-yellow-500 text-white'>
                    <tr>
                        <th className='p-4'>Id</th>
                        <th className='p-4'>Name</th>
                        <th className='p-4'>Email</th>
                        <th className='p-4'>Phone</th>
                        <th className='p-4'>Age</th>
                        <th className='p-4'>Role</th>
                        <th className='p-4'>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map(user => (
                        <tr key={user.id}>

                            <td className='p-4'>{user.id}</td>

                            <td className='p-4'>
                                {user.firstName} {user.lastName}
                            </td>

                            <td className='p-4'>{user.email}</td>

                            <td className='p-4'>{user.phone}</td>

                            <td className='p-4'>{user.age}</td>

                            <td className='p-4'>{user.role}</td>

                            <td>
                                <button className='bg-yellow-500 rounded text-white p-2'>
                                     <Link to={`/users/${user.id}`}>
                                        View User
                                    </Link>
                                </button>
                               
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Users;