import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import Web3Manager from './utils/Web3Manager';
export web3EventEmitter from './utils/events';

import { resetMnemonic } from './NATIVE/keychainOps';

export class ContainerComponent extends Component {
  render(){
    return (
      <View>
        <Web3Manager />
        <Button title="reset mnemonic" onPress={(resetMnemonic)} />
      </View>
    );
  }
}