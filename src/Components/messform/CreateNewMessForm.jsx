import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import axios from "axios";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled as styled1 } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import { getData } from "../../utils/localStorage";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { patchMessProfile, postMessProfile } from "../../Redux/auth/action";
const Input = styled1("input")({
    display: "none",
});
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50rem",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    minHeight: "35rem",
    overflowY: "scroll",
};

export function CreateNewMessForm({
    mess,
    setMessEditModalOpen,
    messEditModalOpen,
    token,
    messuser

}) {
    const dispatch = useDispatch()
    const handleClose = () => setMessEditModalOpen(false);
    const [imageUrl, setImageUrl] = useState("");
    const [imageLoading, setImageLoading] = useState(false);
    const [payload, setPayload] = useState({
        breakFastTiming: "",
        city: "",
        description: "",
        eveningTimeSlot: "",
        isBreakfast: false,
        isDelivery: false,
        morningTimeSlot: "",
        priceList: "",
        review: "",
        speciality: "",
        title: "",

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value,
        });
    };
    const imageHandler = async (e) => {
        // const reader = new FileReader();
        // reader.onload = () => {
        //     if (reader.readyState === 2) {
        //         setCoverImage({ coverImg: reader.result })
        //     }
        // }
        // reader.readAsDataURL(e.target.files[0])
        const files = e.target.files[0];
        const data = new FormData();
        data.append("file", files);
        data.append("upload_preset", "facebookimagedb");
        setImageLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/raviimagedb/image/upload",
            { method: "POST", body: data }
        );
        const file = await res.json();
        setImageLoading(false);
        setImageUrl(file.secure_url);
        console.log(imageUrl, "jojo");
    };
    const handleSave = () => {
        payload.image = imageUrl
        payload.user_id = messuser._id
        dispatch(postMessProfile(payload, token, messuser._id))

    };
    console.log(payload);

    return (

        <Modal
            open={messEditModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <EditModalStyled>
                    <div>
                        <h1>Edit Details</h1>
                    </div>
                    <div>
                        <TextField
                            name="title"
                            label="title"
                            className="inputfield"
                            onChange={handleChange}
                            color="secondary"
                            fullWidth
                            defaultValue={payload.title}
                        />
                    </div>
                    <div>
                        <TextField
                            name="description"
                            label="description"
                            className="inputfield"
                            onChange={handleChange}
                            color="secondary"
                            fullWidth
                            defaultValue={payload.description}
                        />
                    </div>
                    <ImageSelectStyled>
                        <div>
                            {!imageLoading && imageUrl ? (
                                <div>
                                    {" "}
                                    <img className="previewImage" src={imageUrl} alt="" />
                                </div>
                            ) : !imageLoading ? (
                                <label
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "16rem",
                                    }}
                                    htmlFor="contained-button-file"
                                >
                                    {" "}
                                    <h3>Image</h3>
                                    <Input
                                        accept="image/*"
                                        id="contained-button-file"
                                        onChange={imageHandler}
                                        multiple
                                        type="file"
                                    />
                                    <Button variant="contained" component="span">
                                        Select File
                                    </Button>
                                </label>
                            ) : (
                                "Loading......"
                            )}
                        </div>
                    </ImageSelectStyled>
                    <div>
                        <TextField
                            name="city"
                            label="city"
                            className="inputfield"
                            onChange={handleChange}
                            color="secondary"
                            fullWidth
                            defaultValue={payload.city}
                        />
                    </div>
                    <div>
                        <TextField
                            name="speciality"
                            label="speciality"
                            className="inputfield"
                            onChange={handleChange}
                            color="secondary"
                            fullWidth
                            defaultValue={payload.speciality}
                        />
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Delivery</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={payload.isDelivery}
                                label="Delivery"
                                onChange={handleChange}
                                name="isDelivery"
                                defaultValue={payload.isDelivery}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            name="morningTimeSlot"
                            label="Morning Time Slot"
                            className="inputfield"
                            onChange={handleChange}
                            color="secondary"
                            defaultValue={payload.morningTimeSlot}
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            name="eveningTimeSlot"
                            label="Evening Time Slot"
                            className="inputfield"
                            onChange={handleChange}
                            color="secondary"
                            fullWidth
                            defaultValue={payload.eveningTimeSlot}
                        />
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">BreakFast</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={payload.type}
                                label="BreakFast"
                                onChange={handleChange}
                                name="isBreakfast"
                                defaultValue={payload.isBreakfast}
                            >
                                <MenuItem value={true}>Yes</MenuItem>
                                <MenuItem value={false}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            name="breakFastTiming"
                            label="BreakFast Timing"
                            className="inputfield"
                            onChange={handleChange}
                            defaultValue={payload.breakFastTiming}
                            color="secondary"
                            fullWidth
                        />
                    </div>
                    <div>
                        <TextField
                            name="priceList"
                            label="priceList"
                            className="inputfield"
                            onChange={handleChange}
                            color="secondary"
                            fullWidth
                            defaultValue={payload.priceList}
                        />
                    </div>

                    <div
                        style={{
                            margin: "auto",
                            textAlign: "center",
                            marginBottom: "1rem",
                        }}
                    >
                        <Button onClick={handleSave} variant="contained">
                            Submit
                        </Button>
                    </div>
                </EditModalStyled>
            </Box>
        </Modal>
    );
}
const EditModalStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 1rem;
  height: 35rem;
  h1 {
    color: rgb(45, 140, 255);
  }
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ImageSelectStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  h3 {
    color: rgb(45, 140, 255);
  }
  & > div:nth-child(1) {
  }
  img {
    width: 100%;
  }
`;
