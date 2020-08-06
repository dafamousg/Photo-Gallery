import React from 'react';
import DeleteImage from '../hooks/DeleteImage';
//import useFirestore from '../hooks/useFirestore';
//import {motion} from 'framer-motion';

const DeleteButton = ({selectedImg,setSelectedImg}) => {


  const handleClick = (e) => {
    DeleteImage('images', selectedImg);
    setSelectedImg(null);
  }


  return (
    <div className="btn-delete">
      <button onClick={(handleClick)}>
        Click to delete image
      </button>
    </div>
  )


}

export default DeleteButton;