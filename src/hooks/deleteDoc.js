import {projectFirestore/*, projectStorage*/} from '../firebase/config';



const deleteDoc = (collection,selectedImg) => {
  //const imageRef = projectStorage.ref(selectedImg.fileName);
  /* const doesImageExist = () => {
    
        projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
          snap.forEach(doc => {
            let dis = {...doc.data()}
            console.log(dis.fileName);
          });
          console.log("Iz done");
        });
  } */
  
  projectFirestore.collection(collection).doc(selectedImg.id).delete().then(function() {      
    /*TODO
      Delete image from storage
      else
      Only delete collection doc.*/
    /*imageRef.getMetadata().then(function(metadata) {
      console.log("Metadata timestamp", metadata.timeCreated);
      console.log("Image collection timestamp", selectedImg.createdAt);
        
       if(!doesImageExist){
        imageRef.delete().then(function() {
          // File deleted successfully
          console.log("Image successfully deleted!");
        }).catch(function(error) {
          // Uh-oh, an error occurred!
          console.error("Error removing image: ", error);
        });
      }else{
        console.log("image exists in collection");
      } 
    }).catch(function(error) {
      console.error("retrieving metadata failed ", error);
    });*/

    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
    
}
  
export default deleteDoc;