import React from 'react';
import { View, Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../button';
import Colors from '../../utils/styles/colors';
import styles from './styles';

function InfoModal({
  visible,
  onClose,
  title,
  description,
  actionName,
  onPressAction,
  dismissActionText,
  showCloseButton,
  descriptionStyle,
  modalContainerStyle,
}) {
  const handleActionPress = () => {
    if (typeof onPressAction === 'function') onPressAction();
    onClose();
  };

  return (
    <Modal
      useNativeDriver
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropColor={Colors.BACKDROP_COLOR}
      style={styles.modalContainer}
      animationInTiming={500}
      animationOutTiming={500}
    >
      <View
        testID='dialog'
        style={[styles.dialog, modalContainerStyle]}
      >
        <View style={styles.containerTextModal}>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          <Text style={[styles.description, descriptionStyle]}>{description}</Text>
          {actionName ? (
            <View style={styles.actionButtonContainer}>
              <Button
                style={styles.actionButton}
                titleBold title={actionName}
                onPress={handleActionPress}
                activeOpacity={1}
              />
            </View>
          ) : null}
        </View>
        {dismissActionText ? (
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.dismissActionText}>{dismissActionText}</Text>
          </TouchableOpacity>
        ) : null}
        {showCloseButton ? (
          <TouchableOpacity
            testID='closeButton'
            onPress={onClose}
            style={styles.closeIconContainer}
          >
            <FontAwesome name="close" size={30} backgroundColor={Colors.WHITE} />
          </TouchableOpacity>
        ) : null}
      </View>
    </Modal>
  );
}

InfoModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  actionName: PropTypes.string,
  dismissActionText: PropTypes.string,
  onPressAction: PropTypes.func,
  // descriptionStyle: Text.propTypes.style,
  showCloseButton: PropTypes.bool,
  // modalContainerStyle: ViewPropTypes.style,
};

export default InfoModal;
