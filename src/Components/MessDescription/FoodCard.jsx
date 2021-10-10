import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './FoodCard.module.css';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getMessProfile } from '../../Redux/auth/action';

const A = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-flow: wrap;
    margin: auto;
    .price {
    }
`;
export default function FoodCard() {
    const history = useHistory();
    const location = useLocation();
    const [data, setdata] = useState([]);
    const dispatch = useDispatch();
    console.log(location.search);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/messes${location.search}`)
            .then((res) => {
                setdata(res.data.mess);
                // setdata(res.data)
            });
    }, []);

    return (
        <A>
            {data.map((e) => {
                return (
                    <Card
                        style={{
                            flexBasis: '500px',
                            margin: '10px auto',
                            boxShadow: '0px -1px 10px #868683',
                        }}
                        key={e._id}
                        sx={{ maxWidth: 345 }}
                        onClick={() => {
                            console.log(e.user_id._id);
                            dispatch(getMessProfile(e.user_id._id));
                            setTimeout(() => {
                                history.push(`/ranjan?id=${e.user_id._id}`);
                            }, 1000);
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://content3.jdmagicbox.com/comp/tiruvallur/l1/9999pxx44.xx44.170922061704.f8l1/catalogue/naidu-mess-kanchipadi-tiruvallur-hotels-0ckkxyloyl.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h7"
                                component="div"
                                style={{ fontWeight: 'bold', fontSize: '18px' }}
                            >
                                {e.title}
                            </Typography>
                            <Typography variant="body2" color="red">
                                {e.speciality}
                            </Typography>

                            <div className={styles.description_card}>
                                <div
                                    style={{
                                        marginLeft: '-138px',
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <p>Delivery Timing: 28 mins</p>
                                    <p className="price">
                                        Price Range: {e.priceList}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                        <div
                            style={{
                                marginBottom: '10px',
                                marginLeft: '17px',
                                fontWeight: 'bold',
                                color: 'blue',
                            }}
                        >
                            <p>{e.city}</p>
                        </div>
                    </Card>
                );
            })}
        </A>
    );
}
