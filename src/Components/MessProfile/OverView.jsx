import React from 'react'
import styled from "styled-components"
import { useSelector, shallowEqual } from 'react-redux'
import { useState } from 'react'
import { MainLayOut } from '../../Styles/layouts'
import EditIcon from "@mui/icons-material/Edit";
function OverView({ mess }) {
    // const { auth: { MessProfile } } = useSelector(state => state, shallowEqual)
    // const [mess, setMess] = useState(MessProfile.mess[0])
    const [priceList, setPriceList] = useState(mess.priceList.split(","))
    console.log(priceList)
    return (
        <MainLayOutStyled>
            <OverViewStyled>
                <div>
                    <div>
                        <h3>Delivery</h3>
                        <div>{mess.isDelivery ? "Available for kolhapur" : "Not available"}</div>
                    </div>
                    <div>
                        <h3>BreakFast</h3>
                        <div> {mess.isBreakfast ? "Available" : "Not available"} </div>
                    </div>
                    <div>
                        <h3> Morning Time</h3>
                        <div> {mess.morningTimeSlot ? mess.morningTimeSlot : "Not available"} </div>
                    </div>
                    <div>
                        <h3> Evening Time</h3>
                        <div> {mess.eveningTimeSlot ? mess.eveningTimeSlot : "Not available"} </div>
                    </div>
                    <div>
                        <h3> BreakFast Time</h3>
                        <div> {mess.breakFastTiming ? mess.breakFastTiming : "Not available"} </div>
                    </div>
                    <div>
                        <h3>Price List</h3>
                        <div>
                            <ul>
                                {priceList.map((el) => {
                                    return <li>{el}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3>Edit Details</h3>
                        <div>
                            <EditCompoStyled >
                                <EditIcon />
                            </EditCompoStyled>
                        </div>
                    </div>
                </div>
            </OverViewStyled>
        </MainLayOutStyled>
    )
}
const MainLayOutStyled = styled.div`


padding: 0 15rem;
`
const EditCompoStyled = styled.p`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgb(140,147,157);
  :hover{
      background-color: var(--hover-effect)
  }
`;
const OverViewStyled = styled.div`
width: 35rem;

  border-radius: 1rem;
  height: auto;
  padding: 1rem;
  &>div{
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;

      &>div{
          display: flex;
          justify-content: space-between;
          h3{
              color: rgb(45,140,255);
          }
        &>div{
      display: flex;
      justify-content: start;
      width: 60%;

      color: rgb(101,103,107);
        }
  }
}



`

export default OverView
