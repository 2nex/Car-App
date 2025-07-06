
import React from 'react';
import {Modal, Pressable, View} from 'react-native';
import {IBottomSheetProps} from './BottomSheet.props.ts';
import styles from './BottomSheet.styles.ts';

export const BottomSheet = ({
  visible,
  setVisible,
  children,
}: IBottomSheetProps) => {
  return (
    <Modal
      presentationStyle="overFullScreen"
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <Pressable onPress={() => setVisible(false)} style={styles.dim} />
      <View style={styles.modalOverlay}>{children}</View>
    </Modal>
  );
};