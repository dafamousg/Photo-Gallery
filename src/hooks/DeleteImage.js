import {projectFirestore} from '../firebase/config';



const DeleteImage = (collection,selectedImg) => {

    projectFirestore.collection(collection).doc(selectedImg).delete().then(function() {
      console.log("Document successfully deleted!");
      }).catch(function(error) {
      console.error("Error removing document: ", error);
      });
}

export default DeleteImage;