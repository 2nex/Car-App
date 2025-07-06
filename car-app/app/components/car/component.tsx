import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import { createStyles } from './car.styles';
import assets from '../../assets';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';
import { scale } from '../../theme/scale';
import { renderMarginBottom } from '../../utils/ui-utils';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ICarComponentProps } from './ICar.props';
import FavouriteComponent from '../favourite/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const CarComponent = ({bottomActions, onPress}: ICarComponentProps)  => {
    const styles = createStyles();
    const {ferrari} = assets;
    

    return (

        <Pressable  onPress={onPress} style={styles.container}>
            <FavouriteComponent favStyles={{}} />
       <View style={styles.carBackground}>
         <Image   source={ferrari}  resizeMode="contain" style={styles.carImage}/>
       </View>
          <View style={styles.textContainer} >
           {renderMarginBottom(4)}
         <Text style={styles.title}>Ferrari</Text>
           {renderMarginBottom(4)}
           <View style={styles.flex} >
          <Text style={styles.title}>5.0</Text>
           <FontAwesome name='star'
            size= {scale(18)}
            color={colors.star}/>
           </View>
          {renderMarginBottom(4)}
           <View style={styles.flex} >
            <Octicons name='location'
            style={{marginLeft: 0, margin: 0, padding: 0}} size= {scale(16)}
            color={colors.gray}
             />
             <Text style={styles.text}>Washington DC</Text>
            
          </View>
           {renderMarginBottom(6)}
           {bottomActions ? (
            bottomActions

           ) : (
             <View style={styles.flex}>
           <View style={[styles.flex, styles.priceContainer]} >
            <MaterialCommunityIcons
            name='sofa-single-outline'
            style={{marginLeft: 0, margin: 0, padding: 0}} size= {scale(16)}
            color={colors.gray}
             />
             <Text style={[styles.text, styles.textBold]}>4 Seats</Text>
            
          </View>
          <View style={styles.flex} >

            <Pressable  style={styles.dollarContainer}>
                 <Fontisto
            name='dollar' size={scale(8)} color={colors.gray}
             />
            </Pressable>
           
             <Text style={[styles.text, styles.textBold, styles.price]}>
              $200/Day</Text>
            
          </View>
           </View>

           )}
         
 </View>  

        </Pressable>
    )}

export default CarComponent;