import{View, Text, Pressable} from 'react-native';
import React from 'react';
import InputComponent from '../input/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme/colors';
import { scale } from '../../theme/scale';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../bottomSheet/BottomSheet.styles';
import { createStyles } from './search.styles';
import { ISearchProps } from './ISearch.props';

const SearchComponent = ({onFilterPress}: ISearchProps) => {
    const styles = createStyles();
    return (
         <View  style={styles.flexRow}>
            
            <InputComponent 
              onChangeText={e => console.log(e)}
               leftAction={
               <MaterialIcons 
                color={colors.gray}
                 name="search"
                  size={scale(22)} 
                  />
                }
                containerStyle={{flex: 1}}
            placeholder='Search your dream car...'/>
          
           <Pressable
           onPress={onFilterPress}
           
           style={[styles.borderRound, styles.wh]}>
             <MaterialCommunityIcons 
            name="filter-outline"
             size={scale(26)}
             color={colors.gray}
            
            />
           </Pressable>


         </View>
    );
};

export default SearchComponent;