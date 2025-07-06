import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import HeaderComponent from '../../../components/header/component';
import StepperComponent from '../../../components/stepper/component';
import { createStyles } from './status.styles';
import assets from '../../../assets';
import { renderBoderBottom, renderMarginBottom } from '../../../utils/ui-utils';
import Button from '../../../components/button/component';
import { navigate } from '../../../navigators/navigation-utilities';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from '../../../theme/scale';

const BookingStatusScreen = () => {
    const styles = createStyles();
    const {success}= assets;
  return (
       <View style={styles.container}>
      <HeaderComponent title= "Payment Status" hasBack />
    
      <ScrollView style={styles.main}>
   <View style={styles.successContainer}>
   <Image
   resizeMode="contain"
    source={success}  
    style={styles.success}/>
   <Text  style={styles.title}>Payment successful </Text>
   <Text  style={styles.infoText}>Your car rent Booking has been successfully </Text>
   </View>
   {renderBoderBottom(18)}
        <View style={styles.bookingInfo}>
         <Text style={[styles.title, styles.f14]}>Booking Information</Text>
   {renderBoderBottom(12)}
   {renderBoderBottom(1)}
   {renderBoderBottom(12)}
    <View style={styles.horizontalContainer}>
    <Text style={[styles.value]}>Car Model</Text>
    <Text style={[styles.value, styles.bl]}>Tesla Model 3</Text>
    </View>
    <View style={styles.horizontalContainer}>
    <Text style={[styles.value]}>Rental Date</Text>
    <Text style={[styles.value, styles.bl]}>19 Jul - 24 Jul 25</Text>
    </View>
    <View style={styles.horizontalContainer}>
    <Text style={[styles.value]}>Name</Text>
    <Text style={[styles.value, styles.bl]}>John Doe</Text>
    </View>
     </View>
   {renderBoderBottom(18)}
   {renderBoderBottom(1)}
   {renderBoderBottom(18)}
    <View style={styles.bookingInfo}> <Text style={[styles.title, styles.f14]}>Booking Information</Text></View>
   {renderBoderBottom(18)}
   <View style={styles.horizontalContainer}>
    <Text style={[styles.value]}>Transaction ID </Text>
    <Text style={[styles.value, styles.bl]}>#0001234BOJ1</Text>
    </View>
   <View style={styles.horizontalContainer}>
    <Text style={[styles.value]}>Transaction Date </Text>
    <Text style={[styles.value, styles.bl]}>19 Jul - 24 Jul 25</Text>
    </View>
   <View style={styles.horizontalContainer}>
    <Text style={[styles.value]}>Payment</Text>
    <Text style={[styles.value, styles.bl]}>Cash</Text>
    </View>
    {renderBoderBottom(4)}
    {renderBoderBottom(1)}
    {renderBoderBottom(18)}
    <View style={styles.horizontalContainer}>
    <Text style={[styles.value, styles.bold, styles.bl]}>Total Amount</Text>
    <Text style={[styles.value, styles.bold, styles.bl]}>$1415</Text>
    </View>

     <Button
                    text="Download Reciept"
                    textStyles={styles.outlineButtonText}
                    buttonStyles={styles.iconButtonStyle}
                    component={<Feather name="download" size={scale(26)} />}
                  />
                
                   {renderMarginBottom(14)}
                  <Button
                    text="Share Your Reciept"
                    textStyles={styles.outlineButtonText}
                    buttonStyles={styles.iconButtonStyle}
                    component={< EvilIcons name="share-google" size={scale(20)} />}
                  />

        </ScrollView>
       
                  {renderMarginBottom(24)}
         <Button
        onPress={() => navigate('BookingStatusScreen')}
        text="Confirm"
        buttonStyles={styles.btn}
      />{renderMarginBottom(24)}
       

        </View>
  )
}

export default BookingStatusScreen;