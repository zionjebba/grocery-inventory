"use client"
import React from 'react'
import { logout } from '../login/actions'

function Dashboard() {
  return (
    <div>
        <button onClick={() => logout}>Logout</button>
    </div>
  )
}

export default Dashboard