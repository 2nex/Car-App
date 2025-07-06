import { JSX } from 'react';
import {KeyboardTypeOptions, ViewStyle} from 'react-native';


export interface IInputProps {
  onChangeText: (e: string) => void;
  secureTextEntry?: boolean;
  placeholder: string;
  isSecure?: boolean;
 leftAction?: JSX.Element;
 containerStyle?: ViewStyle;
  onSecurePress?: (e: any) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
}



