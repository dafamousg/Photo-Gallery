import {useState, useEffect } from 'react';
import {projectStorage} from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  useEffect(() => {
    //references
    const storageRef = projectStorage.ref(file.name);

    /*Function to:
      1. Calculate the percentage of upload file. (Convert bytes to percent)
      2. Sets error if error occurs
      3. When upload is finnished
    */
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      setUrl(url);
    })
  }, [file])


  return {progress, url, error}
}

export default useStorage;
