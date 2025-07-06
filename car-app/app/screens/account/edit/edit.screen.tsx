import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import HeaderComponent from '../../../components/header/component';
import { createStyles } from './edit.styles';
import { renderMarginBottom } from '../../../utils/ui-utils';
import assets from '../../../assets';
import InputComponent from '../../../components/input/component';
import Button from '../../../components/button/component';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from '../../../theme/scale';
import { colors } from '../../../theme/colors';
import { useEdit } from './edit.hook';

const EditScreen = () => {
    const styles = createStyles();
    const {person} = assets;
    const {photo, selectImage} = useEdit()
    
    const source = photo?. uri ?  {uri: photo?.uri} : person;

  return (
    <View style={styles.container}>
      <HeaderComponent title="Edit Profile" hasBack />
      <ScrollView style={styles.main}>
        {renderMarginBottom(6)}
         <Pressable onPress={selectImage} style={styles.profileContainer}>
          <Image source={source} style={styles.profileImage} />
          <View style={styles.editContainer}>
            <Feather name="edit-3" size={scale(12)} color={colors.gray} />
          </View>
          {renderMarginBottom(6)}
           < Text style={styles.title}>John Doe</Text>
          </Pressable>
          <InputComponent 
           placeholder="John" 
           onChangeText={(e)=>console.log(e)}/>
        
          <InputComponent 
           placeholder="Doe" 
           onChangeText={(e)=>console.log(e)}/>
        
          <InputComponent 
           placeholder="john@gmail.com" 
           onChangeText={(e)=>console.log(e)}/>
        
          <InputComponent 
           placeholder="+23000000" 
           onChangeText={(e)=>console.log(e)}/>

            {renderMarginBottom(24)}
           <Button  text='save'
           
           />
        
        
</ScrollView>
          </View>
          
  )}

export default EditScreen;

