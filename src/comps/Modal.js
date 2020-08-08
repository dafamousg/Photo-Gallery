import React from 'react';
import {motion} from 'framer-motion';
import DeleteButton from './DeleteButton';

const Modal = ({selectedImg, setSelectedImg}) => {


  const handleClick = (e) => {
    if(e.target.classList.contains('backdrop')){
      setSelectedImg(null);
    }
    
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <motion.img src={selectedImg.url} alt="enlarged"
        initial={{y: "-100vh"}}
        animate={{y:0}}
      />
      <DeleteButton selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
    </motion.div>  
  )

}

export default Modal;
