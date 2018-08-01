import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    View, 
    StyleSheet
} from 'react-native';
import {
    TextField
} from 'react-native-material-textfield';

import { FormInput } from 'react-native-elements';

export default class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true
            }
        }

        // set new state value
        this.setState(newState)

    };


    render() {
        return (
            <View>
                <FormInput {...this.props}
                           secureTextEntry={this.state.password}/>
                <Icon style={styles.icon}
                      name={this.state.icEye}
                      size={this.props.iconSize}
                      color={this.props.iconColor}
                      onPress={this.changePwdType}
                />
            </View>
        );
    }
}


export const styles = StyleSheet.create({

    icon: {
        position: 'absolute',
        top: 10,
        right: 20
    }

});

PasswordInputText.defaultProps = {
iconSize:25,
label: 'Password',
}
    
