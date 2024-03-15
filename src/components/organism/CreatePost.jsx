import React from "react";
import { IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import Stack from '@mui/material/Stack';
import Avatar from "@mui/material/Avatar";
import UserProfile from "../../assets/img/Profile.jpg";
import "./CreatePost.css";

function CreatePost() {
  return (
    <>
    
      <div className="createpost-option-container">

      
        <div className="create-publication-input">
        <IconButton><Avatar/></IconButton>
        <TextField
          className="field-create"
          label="Crear Publicacion"
          variant="filled"
          
        />
        </div>
        

        

        <Button variant="text">
          <PermMediaIcon /> Contenido Media
        </Button>
        <Button variant="text">
          <EventIcon /> Evento
        </Button>
        <Button variant="text">
          <ArticleIcon /> Escribir Articulo
        </Button>
        
      </div>
    </>
  );
}

export default CreatePost;
