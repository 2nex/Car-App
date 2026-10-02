// Use the package's existing browser implementation without loading its native bridge.
export {camera as launchCamera, imageLibrary as launchImageLibrary} from 'react-native-image-picker/src/platforms/web';
export type {Asset, ImageLibraryOptions, ImagePickerResponse} from 'react-native-image-picker/src/types';
