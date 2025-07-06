import {View, Text, Image} from 'react-native';
import React from 'react';
import { createStyles } from './signin.styles';
import assets from '../../assets';
import InputComponent from '../../components/input/component';
import CheckBoxComponent from '../../components/checkbox/component';
import Button from '../../components/button/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale } from '../../theme/scale';
import { ScrollView } from 'react-native-gesture-handler';
import { navigate } from '../../navigators/navigation-utilities';
import { useSignin } from './signin.hook';



const SignInScreen = () => {
    const styles = createStyles();
    const {isSecure, setIsSecure} = useSignin();
    const {logo_black} = assets;
    

return (
<ScrollView style={styles.container}>

<View style={styles.flexRow}>
<Image  source={logo_black} style={styles.carlogo} />
    <Text style={styles.titleStyle}>Qent</Text>
    </View>
    <View  style={styles.textContainer}>
    <Text style={styles.textStyle}>Welcome back</Text>
    <Text style={styles.textStyle}>Ready to hit the road.</Text>
    
    </View>

    <View style={styles.inputContainer}>
    <InputComponent 
    onChangeText={e => console.log(e)}
     placeholder={'Email/phone Number'}
      />
     <InputComponent 
    isSecure
     secureTextEntry={ isSecure }
    onChangeText={e => console.log(e)}
     placeholder={'password'} 
     onSecurePress={() => setIsSecure(!isSecure)}
     />
    </View>


    <View style={[styles.colG2]}>
     <View style={ styles.flexRow}>
    <CheckBoxComponent onPress={e => {
        console.log('item', e);
    } } isChecked={false}
     />
     
     <Text style={styles.textRemember}>Remember Me</Text>
     </View>
      <Text style={styles.textRemember}>Forgot Password</Text>
    </View>

    <View style={styles.buttonContainer}>

    <Button  text='Login'
            textStyles={styles.buttonText} 
            />
    <Button  
    onPress={() => navigate('SignUpScreen')}
    
    text='Sign Up'
    textStyles={styles.outlineButtonText}
     buttonStyles={styles.outlineButton}/>
    

    </View>

    
    <View style={styles.borderContainer}>
     <View  style={styles.orBorder}/>
        <Text  style={styles.orText}> Or </Text>
        <View style={styles.orBorder} />
        </View>

    <View style={[styles.buttonContainer, styles.mt14]}>

     
    <Button  
                text='Apple Pay'
                textStyles={styles.outlineButtonText}
                buttonStyles={styles.iconButtonStyle}
                component={<MaterialIcons name='apple' size={scale(26)} />} onPress={function (e: any): void {
                
                } }                  />

<Button  text='Google Pay'
            textStyles={styles.outlineButtonText}
            buttonStyles={styles.iconButtonStyle}
            component={<AntDesign name='google' size={scale(20)} />} onPress={function (e: any): void {
                
            } }            
 />

 


</View>

<View  style={styles.haveAccountContainer}>
    <Text style={styles.donthaveText}> 
        Don't have an account? t{'\t'}
        <Text> Sign up</Text> </Text>
</View>
</ScrollView>



);
};

export default SignInScreen;