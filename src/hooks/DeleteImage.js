import {projectFirestore, projectStorage } from '../firebase/config';



const DeleteImage = (collection,selectedImg) => {
  const imageRef = projectStorage.ref(selectedImg.fileName);

    projectFirestore.collection(collection).doc(selectedImg.id).delete().then(function() {
      //if fileName + (collection doc)createdAt == image-name + (image)created
      //Delete image from storage
      //else
      //Only delete collection doc.
      imageRef.delete().then(function() {
        // File deleted successfully
        console.log("Image successfully deleted!");
      }).catch(function(error) {
        // Uh-oh, an error occurred!
      console.error("Error removing image: ", error);
      });
      
      console.log("Document successfully deleted!");
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
}

export default DeleteImage;