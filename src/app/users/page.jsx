"use client"
import React, { useEffect, useState } from 'react'
import ComponentButton from './ComponentButton'
import TableUser from './TableUser'

const UsersPage = () => {
  return (
    <div >
        <h1>UsersPage</h1>
        <div className='flex mt-10'>
          <TableUser />
        </div>

    </div>
  )
}

export default UsersPage