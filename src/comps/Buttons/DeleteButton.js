import React from 'react';
import deleteDoc from '../../hooks/deleteDoc';
//import useFirestore from '../hooks/useFirestore';
//import {motion} from 'framer-motion';

const DeleteButton = ({selectedImg,setSelectedImg}) => {


  const handleClick = (e) => {
    deleteDoc('images', selectedImg);
    setSelectedImg(null);
  }


  return (
    <div className="box-2">
      <div className="btn btn-two" onClick={(handleClick)}>
        <span>DELETE</span>
      </div>
    </div>
  )


}

export default DeleteButton;