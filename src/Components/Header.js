import React from 'react'
import { Card } from 'react-bootstrap'

function Header() {

    return (
        <div>
            <Card>
                <Card.Header style={{ textAlign: "center", fontSize: "25px", fontFamily: "Times New Roman', Times, serif", fontWeight: "bold", backgroundColor: "green", color: "white" }}>Tip Calculator<br></br><p style={{ fontSize: "15px" }}></p></Card.Header>
            </Card>
            <br></br>
        </div>
    )
}

export default Header
