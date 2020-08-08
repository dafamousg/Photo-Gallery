import React from 'react';
import deleteDoc from '../hooks/deleteDoc';
//import useFirestore from '../hooks/useFirestore';
//import {motion} from 'framer-motion';

const DeleteButton = ({selectedImg,setSelectedImg}) => {


  const handleClick = (e) => {
    deleteDoc('images', selectedImg);
    setSelectedImg(null);
  }


  return (
    <div class="box-2">
      <div class="btn btn-two" onClick={(handleClick)}>
        <span>DELETE</span>
      </div>
    </div>
  )


}
    {/* <div>
      <button class="glow-on-hover" type="button" onClick={(handleClick)}>
        Click to delete image
      </button>
    </div> */}

export default DeleteButton;