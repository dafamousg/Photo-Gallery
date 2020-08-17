//import { useState, useEffect } from 'react';
import {projectFirestore} from '../firebase/config';



const updateDoc = async (collection,selectedImg) => {

  const collectionRef = projectFirestore.collection(collection).doc(selectedImg.id);

  try {
    await collectionRef.update({
      caption: selectedImg.caption
    });
    console.log("Document successfully updated!");
  }
  catch (error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  }
}

export default updateDoc;