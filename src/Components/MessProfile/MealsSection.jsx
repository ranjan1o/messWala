import React from "react";
import styled from "styled-components";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { deleteMeals, getOneMeal } from "../../Redux/auth/action";
import { MealForm } from "../messform/MealForm";
import { CreateMealForm } from "../messform/CreateMealForm";
import { getData } from "../../utils/localStorage";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function MealsSection({ mess }) {
    const dispatch = useDispatch();
    const {
        auth: { Meal },
    } = useSelector((state) => state, shallowEqual);
    const {
        auth: { MessProfile },
    } = useSelector((state) => state, shallowEqual);
    const mealsarr = getData("mealsarr")
    const [meals, setMeals] = useState(mealsarr.meals);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [createMealModalOpen, setCreateMealModalOpen] = useState(false);
    const [action, setAction] = useState("Delete");
    const handleDelete = (e) => {
        console.log(e.target.value, MessProfile.mess[0]._id);
        dispatch(deleteMeals(e.target.value, MessProfile.mess[0]._id));
        setMeals(Meal.meals);
    };
    const handleEdit = (e) => {
        dispatch(getOneMeal(e.target.value));
        setTimeout(() => {
            setEditModalOpen(true);
        }, 1000);
    };
    const handleCreateNew = () => {
        setCreateMealModalOpen(true);
    };
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
                                    <Button value={el._id} variant="contained" color="primary" onClick={handleDelete}>
                                        Delete
                                    </Button>
                                    <Button value={el._id} variant="contained" color="secondary" onClick={handleEdit}>
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                    <div style={{ boxShadow: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <Button variant="outlined" onClick={handleCreateNew} color="primary" >Create New</Button>
                    </div>
                </div>
                {editModalOpen ? (
                    <MealForm
                        action={action}
                        onemeal={getData("onemeal").meals}
                        setEditModalOpen={setEditModalOpen}
                        editModalOpen={editModalOpen}
                        mess_id={mess._id}
                    />
                ) : (
                    ""
                )}
                {createMealModalOpen ? (
                    <CreateMealForm
                        setCreateMealModalOpen={setCreateMealModalOpen}
                        createMealModalOpen={createMealModalOpen}
                        mess_id={mess._id}
                    />
                ) : (
                    ""
                )}
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

export default MealsSection;
