import React from 'react';
import updateDoc from '../hooks/updateDoc';
//import updateDoc from '../../hooks/updateDoc';
//import useFirestore from '../hooks/useFirestore';
//import {motion} from 'framer-motion';

const EditCaption = ({selectedImg,setSelectedImg}) => {


  const saveClick = (e) => {
    selectedImg.caption = document.getElementById("myTextarea").value;
    updateDoc('images', selectedImg);
    setSelectedImg(null);
  }
  const cancelClick = (e) => {
    setSelectedImg(null);
  }

  return (
    <div className="edit-div">
      <textarea placeholder="Enter to edit" id="myTextarea" name="paragraph_text" cols="50" rows="10"></textarea>
      <div>
        <button onClick={(saveClick)}>Save</button>
        <button onClick={(cancelClick)}>Cancel</button>
      </div>
    </div>
  )


}

export default EditCaption;