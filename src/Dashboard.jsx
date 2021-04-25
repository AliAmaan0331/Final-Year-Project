  
import React from 'react'


import SideBar from './Sidebar'
import Main from './Main'

const Dashboard = ({handleLogout}) => {
    return (
        <div>
                
            <SideBar handleLogout={handleLogout}/> 
            
            <Main/>
            <button onClick={handleLogout}>Logout</button> 
        </div>
    )
}

export default Dashboard