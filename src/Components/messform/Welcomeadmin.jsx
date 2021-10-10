import styled from "styled-components"
const A1 = styled.div`
h1{
    width:90%
    margin:auto;
    text-align: center;
}
img{
   width: 100%;
   height: 300px;
   margin:auto;
   justify-content: center;
   align-items: center;
}
.img{
    padding: 30px;
    border: 1px solid black;
    width: 70%;
   margin:auto;
}
p{
      width:70%;
    margin:auto;
    text-align: center;

}
`

export function WelcomeAdmin() {
    return <A1>
        <h1>Welcome to messwala</h1>
        <div className="img"><img src="https://www.bing.com/th?id=OIP.X_65uIJkSF8bJl_zyU4twgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></img></div>
        <p>if you are new user u can create your acoount on click top right corner icon </p>
        <p>you have already account go and sign in and start your mess online </p>
        </A1>
}