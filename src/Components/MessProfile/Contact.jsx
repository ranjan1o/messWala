import React from 'react'
import styled from 'styled-components'
function Contact({ mess }) {
    return (
        <ContactStyled>
            <div><h1>Contact Details</h1></div>
            <div>
                <h3>Mobile No.</h3><p>: {mess.mobile_no}</p>
            </div>
            <div>
                <h3>You can give visit also</h3>
            </div>
            <div>
                <h3>Address</h3><p>{mess.address}</p>
            </div>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
width: 30rem;
height: 20rem;
display: grid;
grid-template-columns: 1fr;
grid-gap: 1rem;
margin: auto;

&>div{
    display: flex;
    justify-content:space-between;
    h3{
        color: rgb(45,140,255);
    }
    p{
        width: 55%;
        color:rgb(101,103,107);
        font-weight: bold;
    }
}

margin-top: 1rem;
`

export default Contact
