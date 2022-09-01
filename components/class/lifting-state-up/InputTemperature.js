import { View, Text, TextInput } from "react-native"
import React, {Component} from 'react';

class InputTemperature extends React.Component{

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.props.changeTemperature(event)
    }

    render(){
        return(
            <View>
                <TextInput 
                    value={(this.props.temperature).toString()}
                    onChangeText={text => this.handleChange(text)}
                />
                <Text>The temperature is {this.props.temperature}</Text>
            </View>
        )
    }

}

export default InputTemperature;