import React from 'react';
import updateDoc from '../../hooks/updateDoc';
//import useFirestore from '../hooks/useFirestore';
//import {motion} from 'framer-motion';

const EditButton = ({selectedImg,setSelectedImg}) => {


  const handleClick = (e) => {
    updateDoc('images', selectedImg);
    setSelectedImg(null);
  }


  return (
    <div>
      <div className="btn btn-two" onClick={(handleClick)}>
        <span>Edit Caption</span>
      </div>
    </div>
  )


}

export default EditButton;