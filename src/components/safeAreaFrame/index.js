import React, { Fragment } from 'react';
import { ViewPropTypes, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import styles from './styles';
import Colors from '../../utils/styles/colors';

function SafeAreaFrame({
  title,
  completeScreen,
  children,
  headerStyle,
  completeStyle,
  statusBarColor,
  statusBarStyle,
}) {
  let renderSafeArea;
  if (completeScreen) {
    renderSafeArea = (
      <SafeAreaView style={[styles.container, completeStyle]}>
        {children}
      </SafeAreaView>
    );
  } else {
    renderSafeArea = (
      <>
        <SafeAreaView style={[styles.head, headerStyle]} />
        <SafeAreaView style={[styles.bottom, completeStyle]}>
          {children}
        </SafeAreaView>
      </>
    );
  }
  return (
    <Fragment key={title}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} />
      {renderSafeArea}
    </Fragment>
  );
}

SafeAreaFrame.propTypes = {
  title: PropTypes.string,
  completeScreen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  headerStyle: ViewPropTypes.style,
  completeStyle: ViewPropTypes.style,
  statusBarColor: PropTypes.string,
  statusBarStyle: PropTypes.string,
};

SafeAreaFrame.defaultProps = {
  statusBarColor: Colors.WHITE,
  completeScreen: true,
  barStyle: 'default'
};

export default SafeAreaFrame;
