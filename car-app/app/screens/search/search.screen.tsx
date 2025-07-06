import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/header/component';
import { createStyles } from './search.styles';
import SearchComponent from '../../components/search/component';
import CarBrandComponent from '../../components/carBrand/component';
import CarComponent from '../../components/car/component';
import { ScrollView } from 'react-native-gesture-handler';
import CarActionView from './view/carActions.view';
import { useSearch } from './search.hook';
import FilterView from './view/filter.view';
import { navigate } from '../../navigators/navigation-utilities';



// Define CarActions, assuming it should be CarActionView

const SearchScreen= () => {
  const styles = createStyles();
  
  const {showFilter, setShowFilter} = useSearch();
  return (
      <View style={styles.container}>
        <HeaderComponent  title="Search" hasBack /> 
        <ScrollView  
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
         
         <SearchComponent  onFilterPress={() => setShowFilter(!showFilter)}

         
         />
         
          <View>
           <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) =>
               <CarBrandComponent 
             item= {item}
            text="Tesla" 
             isHorizontal 
             isSelected={1}
             />}
          />
          </View>
           <View style={[styles.showCaseCars, styles.p18]}>
          <View style={styles.ViewContainer}>
            <Text style={styles.text}>Best Cars</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <View style={styles.flexRow}>
            <CarComponent  onPress={()=>navigate('rootStack')} 
            bottomActions={<CarActionView/>}/>
            <CarComponent onPress={()=>navigate('rootStack')} 
             bottomActions={<CarActionView />} />
          </View>
          <View style={styles.flexRow}>
            <CarComponent onPress={()=>navigate('rootStack')} 
             bottomActions={<CarActionView />}/>
            <CarComponent onPress={()=>navigate('rootStack')} 
             bottomActions={<CarActionView />}/>
          </View>
         
        </View>
        <FilterView 
         visible={showFilter}
         setVisible={setShowFilter}
        />
        </ScrollView>
         </View>
  )
}

export default SearchScreen;