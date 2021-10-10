import styled from 'styled-components';
const A1 = styled.div`
    h1 {
        width: 90%;
        margin: auto;
        text-align: center;
    }
    img {
        width: 100%;
        height: 400px;
        margin: auto;
        justify-content: center;
        align-items: center;
    }
    .img {
        padding: 30px;
        /* border: 1px solid whitesmoke; */
        box-shadow: 0px -1px 10px #babab7;
        width: 70%;
        margin: auto;
    }
    p{
        width: 70%;
        color: #cf1111;
        font-size: 19px;
        margin-top: 5px;
        margin: auto;
        text-align: center;
    }
`;

export function WelcomeAdmin() {
    return (
        <A1>
            <div className="img">
                <img src="https://i.ibb.co/F85SVpj/logo1.png"></img>
            </div>
            <br />
            <br />
            <p>
                If you are new user u can create your acoount on click top right
                corner icon you have{' '}
            </p>
            <p>already account go and sign in and start your mess online </p>
        </A1>
    );
}
