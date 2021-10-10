import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./FoodCard.module.css";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getMessProfile } from "../../Redux/auth/action";

const A = styled.div`
`
export default function FoodCard() {
  const history = useHistory()
  const location = useLocation();
  const [data, setdata] = useState([])
  const dispatch = useDispatch();
  console.log(location.search)
  useEffect(() => {
    axios.get(`http://localhost:8000/messes${location.search}`).then(res => {
      setdata(res.data.mess)
      // setdata(res.data)
    })
  
  }, [])


  return <A>
    {data.map((e) => {
    
      return <Card sx={{ maxWidth: 345 }} onClick={() => {
        console.log(e.user_id._id)
        dispatch(getMessProfile(e.user_id._id))
        setTimeout(() => {
          history.push(`/ranjan?id=${e.user_id._id}`)
        },1000)
      }}>
          <CardMedia
            
        component="img"
        height="250"
        image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y7ywapcvtgxxsnr7gefn"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {e.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {e.speciality}
        </Typography>

        <div className={styles.description_card}>
          <button className={styles.chatbtn}>chat</button>
          <div className={styles.star_rating}>
            <AiOutlineStar />
                <p style={{ marginTop: "-1px" }}>{ e.reviews}</p>
          </div>

          <div>
            <p>35 MINS</p>
          </div>

          <div>
            <p>₹500 FOR TWO</p>
          </div>
        </div>
      </CardContent>
       <div>
          
          <p>Gandhi nagar Bhopal</p>
       </div>
    </Card>
      })}
    </A>
}
