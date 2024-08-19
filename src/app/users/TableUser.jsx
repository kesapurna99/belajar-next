import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const TableUser = () => {
    const [users, setUsers] = useState([])
    const  fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            // console.log(response)
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])
  return (
    <div className='w-50'>
        <table className='table-auto w-full border border-slate-300'>
            <thead>
            <tr>
                <th>Name</th>
                <th>detail</th>
            </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td><Link href={`/users/detail/${user.id}`}>Detail</Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default TableUser