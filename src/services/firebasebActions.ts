import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
  import {v4 as uuidv4} from 'uuid';
  import { storage } from "../firebase";

  export const uploadImage = (imageUpload: any) => {    
    const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
    return uploadBytes(imageRef, imageUpload).then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((url) => url);
    });
  };  