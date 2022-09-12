import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const RightHeaderButton = ({handleAddUser}) => {

    return(
        <View>
            <TouchableOpacity
                style={styles.myButton}
                onPress={handleAddUser}
            >
                <Text style={styles.ButtonText}>+ Student</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    myButton : {
        // position : "absolute",
        // right : 10,
        margin : 15,
        width : 110,
        height : 40,
        backgroundColor : "green",
        borderRadius : 5,
        elevation: 10
      },
    ButtonText : {
        textAlign: 'center',
        color : "white",
        fontSize : 20,
        fontWeight : "bold",
        paddingTop : 5
    },
})

export default RightHeaderButton;