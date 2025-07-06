import { useState } from "react";
import { ImagePickerResponse, launchImageLibrary, Asset, ImageLibraryOptions } from "react-native-image-picker";
import { IEditProps } from "./IEdit.props";

export const useEdit = (): IEditProps => {

    const [photo, setPhoto] = useState<Asset | undefined>(undefined)
    const selectImage = () => {
        const options: ImageLibraryOptions = {
            mediaType : 'photo',
            quality : 1
        }
        launchImageLibrary(options, (response: ImagePickerResponse )=> {
            if(response.didCancel){
            console.log('User cancelled image picker')
            } else if (response.errorCode){
                console.log('image picker error', response.errorMessage)
            } else  if (response.assets && response.assets.length > 0){
                setPhoto(response.assets[0]);
            }
        });
    };

  return {
    selectImage,
    photo,
  };
};