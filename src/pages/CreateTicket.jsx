import React from 'react'
import CreateForm from '../components/CreateForm'

function CreateTicket() {
  return (
    <main>
        <h1 className='text-center text-xl text-gray-500 mb-[20px]'>Create a new Ticket</h1>
        <CreateForm />
    </main>
  )
}

export default CreateTicket