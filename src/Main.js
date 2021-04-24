import React from 'react'
import styled from 'styled-components'

import NewDepositBtn from './NewDepositBtn'
import Deposits from './Deposits'
import "./Dashboard.css";

import depositData from './DepositData.json'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {
    return (
        <Container className="main">
           
            <NewDepositBtn />
            <Deposits title="Active Orders" count={2} data={depositData.active} />
            <Deposits title="Delivered Orders" count={8} data={depositData.closed} />
        </Container>
    )
}

export default Main