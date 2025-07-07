import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { createStyles } from './notifcation.styles';
import HeaderComponent from '../../components/header/component';
import SingleItem from './component/singleItem';
import { renderMarginBottom } from '../../utils/ui-utils';

const NotificationScreen = () => {
  const styles = createStyles();
  return (
    <View  style={styles.container}>
      <HeaderComponent title="Notification" hasBack />
      <View style={styles.main}>
        <FlatList
        data={[1,2,3,3,4, 3]}
        renderItem={({item}) => <SingleItem unRead={item % 2 === 0} />}
         />
         {renderMarginBottom(80)}
      </View>
    </View>
  )
}

export default NotificationScreen;