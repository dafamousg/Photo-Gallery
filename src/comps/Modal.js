import React, { useState } from 'react';
import {motion} from 'framer-motion';
import DeleteButton from './Buttons/DeleteButton';
import EditButton from './Buttons/EditButton';
import EditCaption from './EditCaption';

const Modal = ({selectedImg, setSelectedImg}) => {
  const [editMode, setEditMode] = useState(false);


  const handleClick = (e) => {
    if(e.target.classList.contains('backdrop')){
      setSelectedImg(null);
    }
    
  }

  const handleOtherClick = (e) => {
    if(!editMode){
      setEditMode(true);
    }
    else{
      setEditMode(false);
    }
    
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      {editMode && <EditButton selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      {editMode && <DeleteButton selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      <motion.img src={selectedImg.url} alt="enlarged"
        initial={{y: "-100vh"}}
        animate={{y:0}}
        />
      {!editMode && <button onClick={handleOtherClick}> Click to enter edit mode</button>}
      {/* Image fullname */}
      {editMode && <EditCaption selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
      {!editMode && selectedImg.caption}
    </motion.div>  
  )

}

export default Modal;
