import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {FontSize} from '../../theme/font-size';
import {typography} from '../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: scale(14),
      paddingVertical: scale(12),
       paddingHorizontal: scale(18),
       
       
    },
    
    borderRound: {
      borderWidth: 1,
      borderColor: colors.border,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: scale(40),
      width: scale(40),
      borderRadius: scale(100),
    },
    
    inputContainer: {
      flex: 1,
      marginTop: 0,
      height: scale(45),
    paddingVertical: 0,
    },
    
    wh: {
      backgroundColor: colors.white,
    },
    
  });
   
