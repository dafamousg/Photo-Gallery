import {projectFirestore} from '../firebase/config';



const DeleteImage = (collection,selectedImg) => {

    projectFirestore.collection(collection).doc(selectedImg).delete().then(function() {
      //if fileName + (collection doc)createdAt == image-name + (image)created
      //Delete image from storage
      //else
      //Only delete collection doc.
      console.log("Document successfully deleted!");
      }).catch(function(error) {
      console.error("Error removing document: ", error);
      });
}

export default DeleteImage;