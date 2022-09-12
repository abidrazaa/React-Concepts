import { useEffect, useState, useContext } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native"
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { UserContext } from "../../Routes/Routes";
const Users = ({users, deleteUser}) => {

    // using the context passed from the HomeScreen 
    // Using email as authToken
    const {authToken, setAuthToken} = useContext(UserContext)

    return(
        <SafeAreaView style={styles.screen}>
            <ScrollView>
                <View style={{width:"100%", alignItems : "center"}}>
                    <Text style={styles.heading}>Github Users</Text>
                    <Text style={styles.heading}>Welcome {authToken} !!</Text>
                        {
                            users.map((u, i) => {
                            return (
                                <Card key={i}>
                                    <View  style={styles.card}>
                                        <Image
                                            resizeMode="cover"
                                            source={{
                                                uri: u.avatar_url,
                                            }}
                                            style = {styles.image}
                                        />
                                        <Text style={styles.name}>Name : {u.login}</Text>
                                        <Text>Type : {u.type}</Text>
                                        <TouchableOpacity
                                            style={styles.viewButton}
                                        >
                                            <Text style={styles.ButtonText}>View</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.deleteButton}
                                            onPress={() => deleteUser(u.id)}
                                        >
                                            <Text style={styles.ButtonText}>Delete</Text>
                                        </TouchableOpacity>
                                        
                                    </View>
                                </Card>
                            );
                            })
                        }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen : {
        width:"100%",
        paddingTop : 2,
        paddingBottom : 20,
        justifyContent : "center",
    },
    heading : {
        fontSize : 30,
        fontWeight : "bold",
        color : "brown"
    },
    card : {
        justifyContent:"center",
        alignItems:"center"
    },
    image : { 
        width: 240, 
        height: 150 
    },
    name : {
        color:"red", 
        fontWeight:"bold"
    },
    viewButton : {
        margin : 5,
        width : 90,
        height : 40,
        backgroundColor : "pink",
        borderRadius : 20
    },
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
    }
})

export default Users;