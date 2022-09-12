import {StyleSheet, Text, View, TouchableOpacity } from "react-native"


const CustomButton = () => {
    return(
        <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteUser(user.id)}
        >
            <Text style={styles.ButtonText}>Delete</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    deleteButton : {
        margin : 5,
        width : 90,
        height : 40,
        backgroundColor : "red",
        borderRadius : 20
    },
    ButtonText : {
        textAlign: 'center',
        color : "white",
        fontSize : 20,
        fontWeight : "bold",
        paddingTop : 3
    },
})

export default CustomButton;