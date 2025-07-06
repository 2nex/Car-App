import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';
import { sitingCapacity } from './view/filter.data';


export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: scale(28),
    },
    main: {
     
      flex:1,
    },
      showCase:{
        marginTop: scale(30),
        rowGap: scale(12),
    },
    

    showCaseCars: {

      backgroundColor: colors.white,
       flex: 1,
      borderTopLeftRadius: scale(30),
      borderTopRightRadius: scale(30),
      marginTop: scale(24),
      paddingTop: scale(20),
     
      
      
    },
    showContainer : {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
     textPrimary: {fontSize: FontSize.FONT_16Px,
      color: colors.black,
      fontFamily: typography.semiBold,
    },
     p18: {
              paddingHorizontal: scale(18),
    },
     viewAll:{
      color: colors.placeholder,
      fontSize: FontSize.FONT_12Px,
       
    },
    ViewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
        },
        
     flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(14),
      paddingVertical: scale(12),
      backgroundColor: colors.background

    },
    
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: scale(4),
        
    
    },
    
    textBold: {
        fontFamily: typography.bold,

    },

    textContainer: {
        paddingHorizontal: scale(12),

    },

    text: {
        fontSize: FontSize.FONT_12Px,
        color: colors.placeholder,
        fontFamily: typography.bold,

    },
    dollarContainer: {
        borderColor: colors.gray,
        borderWidth: scale(1),
        height: scale(14),
        width: scale(14),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },

    priceContainer :{
    paddingVertical: scale(4),
    alignItems: 'center',
    columnGap: scale(4),

    },
    price : {
        fontSize: FontSize.FONT_11Px,
        color: colors.black,   
    },

    buttonStyles: {
      paddingVertical: scale(6),
      paddingHorizontal: scale(8),

    },
    textStyles: {
      fontSize: FontSize.FONT_12Px,
    },
    filterView: {
      flex: 0.97,
      backgroundColor: colors.white,
      borderTopRightRadius: scale(15),
      borderTopLeftRadius: scale(15),
    },
     header: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-between',
      paddingHorizontal: scale(12),
      paddingVertical: scale(18),
      borderBottomColor: colors.btnBorder,
      borderBottomWidth: 0.1,
     },
     _f08: {
      flex: 0.08,
     },
     filterContainer: {
     paddingHorizontal: scale(18),
      flex: 1,

     },
     filterTypeText: {
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
     },
slider:{
  width: '100%',
  height: scale(40)

}, frsb: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: scale(12),
},
inputContainer: {
flex: 1,

},
tabContainerStyle: {
  borderWidth: 0,

},
sitingCapTab: {
  paddingHorizontal: scale(32),

},
tabStyle: {
  borderWidth: 1,
  borderColor: colors.btnBorder,

},
tabTextStyle: {
  color: colors.placeholder,
  fontFamily: typography.regular,
  fontSize: FontSize.FONT_12Px,

},
placeHolder: {
  color: colors.placeholder
},
clearAll: {
  color: colors.black,
  fontSize: FontSize.FONT_12Px,
  fontFamily: typography.semiBold
},
btnContainerStyle: {
  paddingVertical: scale(10),
  paddingHorizontal: scale(12),
  backgroundColor: colors.black,
},
btnTextStyle:{
  fontSize: FontSize.FONT_12Px,
}

  });
