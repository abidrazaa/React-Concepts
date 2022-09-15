import {View, Text, StyleSheet} from "react-native"
import { Button } from "react-native-elements"
import { useDispatch, useSelector } from "react-redux"
import { incrementNumber, decrementNumber } from "../../redux/actions/actions"

const Counter = () => {
    const dispatch = useDispatch()
    const myState = useSelector((state) => state.updateCount)

    return(
        <View>
            <Text>Show the count on Add user Modal</Text>
            <View  style={styles.container}>
                <Button onPress={() => dispatch(decrementNumber())} title="-" />
                <Text>{myState.count} times {myState.name}</Text>
                <Button onPress={() => dispatch(incrementNumber())} title="+" />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "center",
        alignSelf : "center"
    }
})

export default Counter;