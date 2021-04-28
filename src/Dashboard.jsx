  
import React from 'react'


import SideBar from './Sidebar'
import Main from './Main'

const Dashboard = ({handleLogout,email}) => {
    return (
        <div>
                
            <SideBar handleLogout={handleLogout}
            email={email}/> 
            
            <Main/>
            
        </div>
    )
}

export default Dashboard