import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = ({handleLogout}) => {
    return (
        <Container>
            <MenuLink title="Dashboard" icon={'home'}/>
            <MenuLink title="Gigs" icon={'file-multiple'} active />
            <MenuLink title="Buyer requests" icon={'gift'}/>
            <MenuLink title="Payments" icon={'bank'}/>
            <MenuLink title="Settings" icon={'cog'} />
            <button  className="btn btn-dark btn-sm btn-block" onClick={handleLogout}>Logout</button>
        </Container>
    )
}

export default Menu