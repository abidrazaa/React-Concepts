import { useState } from "react"
import { Button, View, Text } from "react-native"

const UseStateHook = () => {

    const [name, setName] = useState("Abid")

    const handleOnPress = () => {
        
        (name == "Abid") ? setName("Raza") : setName("Abid")
    }

    return (

        <View>
            <Text>My name is {name}!! </Text>
        <Button
            onPress={handleOnPress}
            title="Press Me"
        />
        </View>
    )
}