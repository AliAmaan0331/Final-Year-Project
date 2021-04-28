import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import Profile from './Profile'
import ToggleSwitch from './ToggleSwitch'
import "./Dashboard.css";

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Sidebar = ({handleLogout,email}) => {

    return (
        <Container className="sidebar">
            <Profile email={email}/>
            <Menu handleLogout={handleLogout}/>
            <ToggleSwitch />
        </Container>
    )
}

export default Sidebar