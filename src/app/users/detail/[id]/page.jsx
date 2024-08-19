"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const UserDetail = () => {
    const id  = useParams().id;
    const [user, setUser] = useState({})
    const  fetchUser = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            console.log(response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error)
            console.log(id)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [id])

  return (
    <div className='justify-content: center;'>
        <h1>UserDetail</h1>
        <div>
        <table>
        <tbody>
        <tr>
            <td>Name</td>
            <td>:</td>
            <td>{user.name}</td>
        </tr>
        <tr>
            <td>email</td>
            <td>:</td>
            <td>{user.email}</td>
        </tr>
        <tr>
            <td>Username</td>
            <td>:</td>
            <td>{user.username}</td>
        </tr>
        <tr>
            <td>Website</td>
            <td>:</td>
            <td>{user.website}</td>
        </tr>

        </tbody>
        </table>
        </div>
    </div>
  )
}

export default UserDetail