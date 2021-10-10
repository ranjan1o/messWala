import React from "react";
import styled from "styled-components";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { getData } from "../../utils/localStorage";

function UserMealsSection({ mess }) {
    const dispatch = useDispatch();
    const {
        auth: { Meal },
    } = useSelector((state) => state, shallowEqual);
    const {
        auth: { MessProfile },
    } = useSelector((state) => state, shallowEqual);
    const mealsarr = getData("mealsarr")
    const [meals, setMeals] = useState(mealsarr.meals);


    useEffect(() => {
        setMeals(Meal.meals ? Meal.meals : getData("mealsarr").meals);
    }, [Meal.meals]);
    return (
        <>
            <MealsSectionStyled>

                <div className="mealsGrid">
                    {meals.map((el) => {
                        return (
                            <div>
                                <img src={el.image} alt="" />
                                <div className="mealTitle">
                                    <span> Today we are having </span><h3> {el.title}</h3><span> for</span> <h3> {el.type}</h3>
                                </div>
                                <div>
                                    <h3>Items</h3>
                                    <p>{el.menu}</p>
                                </div>
                                <div>
                                    <h3>Price</h3>
                                    <p>{el.price}</p>
                                </div>
                                <div>

                                </div>
                            </div>
                        );
                    })}

                </div>

            </MealsSectionStyled>
        </>
    );
}

const MealsSectionStyled = styled.div`
  width: 100%;
  border-radius: 1rem;
  height: auto;
  padding: 1rem;
  .mealsGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    & > div {
      width: 100%;
      height: 40rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 4fr 1fr 1fr 1fr 1fr;
        box-shadow: 0px -1px 10px #babab7;
        padding: 1rem;
        &>div{
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                /* text-align:start; */
                width: 80%;
                display: flex;
                align-items: center;

      color: rgb(101,103,107);
      font-weight: bold;
            }
            h3{
                font-size:1.4rem;
                color:rgb(45,140,255) ;
            }
        }
      img {
        width: 100%;
        height: 20rem;
        object-fit: cover;
      }
      .mealTitle{
          display: flex;
          font-size:1rem !important;
          justify-content:space-around;
          span{

      color: rgb(101,103,107);
      font-weight: bold;
          }
      }
    }
  }
`;

export default UserMealsSection;
