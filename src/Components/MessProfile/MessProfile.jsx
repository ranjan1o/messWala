import React, { useState } from "react";
import styled from "styled-components";
import { MainLayOut } from "../../Styles/layouts";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getMessProfile, patchMessProfile } from "../../Redux/auth/action";
import { CreateNewMessForm } from "../messform/CreateNewMessForm";
import { useEffect } from "react";
import MealsSection from "./MealsSection";
import OverView from "./OverView";
import { getData } from "../../utils/localStorage";
import { MessForm } from "../messform/MessForm";
import {
    makeStyles,
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core/styles";
const useStyles = makeStyles({
    button: {
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
});
function MessProfile() {
    const dispatch = useDispatch();
    const {
        auth: { user },
    } = useSelector((state) => state, shallowEqual);
    const {
        auth: { MessProfile },
    } = useSelector((state) => state, shallowEqual);
    const {
        auth: { token },
    } = useSelector((state) => state, shallowEqual);
    console.log(token, "tokendskohf")

    const messUser = getData("messuser").user
    const token2 = getData("messuser").token
    console.log(messUser, "shj")

    const [tabValue, setTabvalue] = useState("one");
    // console.log(auth)
    const [userProfile, setUserProfile] = useState(user);
    const messProfile = getData("messProfile")

    const [mess, setMess] = useState(messProfile?.mess[0]);
    const [messEditModalOpen, setMessEditModalOpen] = useState(false)
    const handleTabChange = (event, newValue) => {
        setTabvalue(newValue);
    };
    const classes = useStyles();

    const handleMessEditOpen = () => {
        setMessEditModalOpen(true)
    }
    if (messProfile.mess.length !== 0) {
        return (<MainLayOut>
            <MessProfileStyled>
                <div className="MessImageDiv">
                    <div className="imageDiv">
                        <img
                            src={mess.image ? mess.image : "https://b.zmtcdn.com/data/pictures/0/19625810/63c4d74849093f2a0493198c1dc4e302.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"}
                            alt=""
                        />
                    </div>
                    <div className="headingInfo">
                        <div>
                            <h1>{mess.title ? mess.title : "please edit details"}</h1>
                        </div>
                        <div>
                            <Rating name="disabled" value={2} disabled />
                            <span>{mess.reviews.length}</span>
                        </div>
                    </div>
                </div>
                <div className="speciality">
                    <div>{mess.speciality}</div>
                    <div>{mess.city}</div>
                </div>
                <div className="bio">
                    <h2>Things, you can't ignore.....</h2>
                    <p>{mess.description}</p>
                </div>
                <div className="btns">

                    <Button className={classes.button} variant="outlined" color="primary">
                        <ShareIcon />
                        Share
                    </Button>
                    <Button onClick={handleMessEditOpen}>Edit</Button>
                </div>
                <div className="tabs">
                    <Box sx={{ width: "100%" }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="Overview" />
                            <Tab value="two" label="Meals" />
                            <Tab value="three" label="Reviews" />
                            <Tab value="four" label="Contact" />
                        </Tabs>
                    </Box>
                    {messEditModalOpen ? <MessForm messuser={messUser} token={token2} mess={mess} messEditModalOpen={messEditModalOpen} setMessEditModalOpen={setMessEditModalOpen} /> : ""}
                </div>
                {tabValue === "one" ? <OverView mess={mess} /> : ""}
                {tabValue === "two" ? <MealsSection mess={mess} /> : ""}

            </MessProfileStyled>
        </MainLayOut>
        );
    } else {
        return <MainLayOut>
            <MessProfileStyled>
                <div className="MessImageDiv">
                    <div className="imageDiv">
                        <img
                            src="https://b.zmtcdn.com/data/pictures/0/19625810/63c4d74849093f2a0493198c1dc4e302.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                            alt=""
                        />
                    </div>
                    <div className="headingInfo">
                        <div>
                            <h1>Please add Title</h1>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="speciality">
                    <div></div>
                    <div></div>
                </div>
                <div className="bio">
                    <h2>Things, you can't ignore.....</h2>
                    <p>"oops! seems like you have nothing to show"</p>
                </div>
                <div className="btns">
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleMessEditOpen}
                    >
                        <AddIcon />
                        Add Details
                    </Button>

                </div>
                <div className="tabs">
                    <Box sx={{ width: "100%" }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="Overview" />
                            <Tab value="two" label="Meals" />
                            <Tab value="three" label="Reviews" />
                            <Tab value="four" label="Contact" />
                        </Tabs>
                    </Box>
                    {messEditModalOpen ? <CreateNewMessForm messuser={messUser} token={token2} mess={mess} messEditModalOpen={messEditModalOpen} setMessEditModalOpen={setMessEditModalOpen} /> : ""}
                </div>

            </MessProfileStyled>
        </MainLayOut>
    }
}

const MessProfileStyled = styled.div`
  width: 100%;
  background-color: #ffff;
  box-shadow: 0px 0px 13px rgb(140, 147, 157);
  .MessImageDiv {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5fr 1fr;
    height: 30rem;
    grid-gap: 1rem;
    .imageDiv {
      width: 100%;
      height: 25rem;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .headingInfo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      & > div:nth-child(1) {
        display: flex;
        justify-content: start;
        align-items: center;
      }
      & > div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        & > span:nth-child(2) {
          color: darkblue;
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }
  .speciality {
    padding-left: 1rem;
    & > div {
      font-size: 14px;
    }
    & > div:nth-child(1) {
      color: red;
    }
  }
  .bio {
    height: auto;
    padding: 1rem 16rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  .btns {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    padding-right: 35rem;
    padding-left: 1rem;
  }
  .tabs {
    margin-top: 1rem;
  }
`;

export default MessProfile;
