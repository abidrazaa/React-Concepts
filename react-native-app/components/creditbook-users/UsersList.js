import {StyleSheet, Text, View, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox';

    const UsersList = ({users, checked, setChecked, deleteUser}) => {
    return (
        <View>
            {users.map(user => {
                return(
                    <View style={styles.userContainer} key={user.id}>
                        <View style={styles.nameAndChecbox}>
                            <CheckBox
                                disabled={false}
                                value={checked[user.id]}
                                onValueChange={(newValue) => {
                                    setChecked({...checked, [user.id] : newValue})
                                }}
                            />
                            <Text style = {{marginLeft : 10}}>{user.name} is {user.age} years old</Text>
                        </View>
                        <View>
                            <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() => deleteUser(user.id)}
                                >
                                    <Text style={styles.ButtonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                )
            })}
        </View>
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
    userContainer : {
        backgroundColor : "white",
        padding : 8,
        borderRadius : 10,
        marginTop : 10,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        textAlign : "center"
    },
    nameAndChecbox : {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop : 13
    }
})


export default UsersList;