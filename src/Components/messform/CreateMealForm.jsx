import TextField from '@mui/material/TextField';
import { useState } from "react"
import Button from '@mui/material/Button';
import axios from "axios";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from "styled-components"
import { saveMeals } from '../../Redux/auth/action';
import { useDispatch, } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { styled as styled1 } from '@mui/material/styles';
import Select from '@mui/material/Select';

const Input = styled1('input')({
    display: 'none',
});
const style = {
    position: 'absolute',
    backgroundColor: "rgb(239, 243, 244)",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};
export function CreateMealForm({ setCreateMealModalOpen, createMealModalOpen, mess_id }) {
    const dispatch = useDispatch()

    const [imageUrl, setImageUrl] = useState("")
    const [imageLoading, setImageLoading] = useState(false)
    const handleClose = () => setCreateMealModalOpen(false);
    const [payload, setPayload] = useState({
        title: "",
        menu: "",
        image: "",
        price: "",
        mess_id: mess_id,
        type: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value,
        });

    };
    const handleSave = () => {
        payload.image = imageUrl

        dispatch(saveMeals(mess_id, payload));

        handleClose()

    }
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
        setImageLoading(true)
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/raviimagedb/image/upload",
            { method: "POST", body: data }
        );
        const file = await res.json();
        setImageLoading(false)
        setImageUrl(file.secure_url);
        console.log(imageUrl, "jojo")
    }

    return <Modal
        open={createMealModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <EditModalStyled>
                <div><h1>Create New Meal</h1></div>
                <div><TextField name="title" required fullWidth label="Title" className="inputfield" defaultValue={payload.title} onChange={handleChange} color="secondary" /></div>
                <div><TextField name="menu" required fullWidth label="Menu" className="inputfield" defaultValue={payload.menu} onChange={handleChange} color="secondary" /></div>
                <ImageSelectStyled>

                    <div>
                        {(!imageLoading && imageUrl) ? <div> <img className="previewImage" src={imageUrl} alt="" /></div> : (!imageLoading) ? <label style={{ display: "flex", justifyContent: "space-between", width: "16rem" }} htmlFor="contained-button-file">         <h3>Image</h3><Input accept="image/*" id="contained-button-file" onChange={imageHandler} multiple type="file" />
                            <Button variant="contained" component="span">
                                Select File
                            </Button>
                        </label> : "Loading......"}

                    </div>
                </ImageSelectStyled>
                <div><TextField name="price" required fullWidth label="Price" className="inputfield" defaultValue={payload.price} onChange={handleChange} color="secondary" /></div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={payload.type}
                        label="Type"
                        onChange={handleChange}
                        name="type"
                    >
                        <MenuItem value={"BreakFast"}>BreakFast</MenuItem>
                        <MenuItem value={"Lunch"}>Lunch</MenuItem>
                        <MenuItem value={"Dinner"}>Dinner</MenuItem>
                    </Select>
                </FormControl>

                <div style={{ margin: "auto", textAlign: "center" }} ><Button onClick={handleSave} variant="contained">Submit</Button></div>
            </EditModalStyled>
        </Box>
    </Modal>
}

const EditModalStyled = styled.div`

width: 100%;
   display: grid;
    grid-template-columns: 1fr;
grid-gap: 1rem;
h1{
    color: rgb(45,140,255);
}
&>div:nth-child(1){
    display: flex;
    align-items: center;
    justify-content: center;
}


`
const ImageSelectStyled = styled.div`
display: flex;
justify-content: space-between;
padding: 0 2rem;
h3{
            color: rgb(45,140,255);
}
&>div:nth-child(1){

}
img{
    width: 100%;
}

`