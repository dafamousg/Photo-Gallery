import {projectFirestore, projectStorage} from '../firebase/config';

const deleteDoc = (collection,selectedImg) => {
  const imageRef = projectStorage.ref(selectedImg.fileName);
  
  projectFirestore.collection(collection).doc(selectedImg.id).delete().then(function() {      
    let sameImage = 0;
    let lastImg = false;
  
    //Checks if more than one copy of image exists in collection
    projectFirestore.collection(collection)
    .orderBy('createdAt')
    .onSnapshot((snap) => {
      snap.forEach(doc => {
        let dis = {...doc.data()}
        dis.fileName === selectedImg.fileName && sameImage++;
      });
      sameImage === 0 ? lastImg=true : lastImg=false;
    });
    
    imageRef.getMetadata().then(function(metadata) {
      //Deletes image from storage if lastImg is true
      if(lastImg){
        imageRef.delete().then(function() {
          // File deleted successfully
          console.log("Image successfully deleted!");
        }).catch(function(error) {
          // Uh-oh, an error occurred!
          console.error("Error removing image: ", error);
        });
      }else{
        console.log("Image was not deleted from storage");
      } 
    }).catch(function(error) {
      console.error("retrieving metadata failed ", error);
    });
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
    
}
  
export default deleteDoc;