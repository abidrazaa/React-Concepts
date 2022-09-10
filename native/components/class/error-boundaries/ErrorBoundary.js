import {View} from "react-native"
import React from "react"

class ErrorBoundary extends React.Component{

    constructor(){
        super()
        this.state = {error : false}
    }

    static getDerivedStateFromError(error){
        console.log("error in error boundary ==> ",error)
        return {error : true}
    }

    render(){
        {this.state.error ? <View>This is an error</View> : this.props.children}
    }
}

export default ErrorBoundary;