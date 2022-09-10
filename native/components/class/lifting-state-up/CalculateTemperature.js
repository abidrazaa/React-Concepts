import { View, Text, TextInput } from "react-native"
import React, {Component} from 'react';
import InputTemperature from "./InputTemperature";

class Temperature extends React.Component{

    constructor(props){
        super(props)
        this.state = {temperature : "10", boil : false}
        this.changeTemperature = this.changeTemperature.bind(this)
    }

    changeTemperature(temp){
        const temperature = parseFloat(temp)
        if (Number.isNaN(temperature)) {
            return this.setState({temperature : ""})
        }

        this.setState({temperature : temp})

        temperature > 100 
            ? this.setState({boil : true})
            : this.setState({boil : false})
    }

    render(){
        return(
            <View>
                <InputTemperature 
                    temperature={this.state.temperature}
                    changeTemperature = {this.changeTemperature}
                />
                <Text>{this.state.boil ? "The water will boil" : "Will not boil"}</Text>

            </View>

        )
    }
}

export default Temperature;