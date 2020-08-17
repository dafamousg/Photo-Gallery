import React from 'react';
import updateDoc from '../hooks/updateDoc';
//import updateDoc from '../../hooks/updateDoc';
//import useFirestore from '../hooks/useFirestore';
//import {motion} from 'framer-motion';

const EditCaption = ({selectedImg,setSelectedImg}) => {


  const handleClick = (e) => {
    selectedImg.caption = document.getElementById("myTextarea").value;
    updateDoc('images', selectedImg);
    setSelectedImg(null);
  }


  return (
    <div className="edit-div">
      <textarea placeholder="Enter to edit" id="myTextarea" name="paragraph_text" cols="50" rows="10"></textarea>
      <button onClick={(handleClick)}>Edit description</button>
    </div>
  )


}

export default EditCaption;