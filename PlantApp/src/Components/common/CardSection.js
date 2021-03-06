import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

const styles = {
  containerStyle: {
    marginTop: 1,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    borderRadius: 20,
  },
};

export { CardSection };
