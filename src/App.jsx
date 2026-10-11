import React from 'react'
import Sidebar from './Sidebar'
import Feedbar from './Feedbar'
import Suggestion from './Suggestion'

export default function App() {
  return (
    <div className="d-flex  vh-100 bg-white">
        <div className="w-20"><Sidebar/></div>
        <div className="w-50 "><Feedbar/></div>
        <div className='w-30'><Suggestion/></div>
    </div>
  )
}
