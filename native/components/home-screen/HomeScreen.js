import { useContext, useRef, useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView, Touchable, TouchableOpacity } from "react-native"
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";
import { UserContext } from "../../Routes/Routes";
import FormikForm from "../creditbook-users/FormikForm";


const HomeScreen = ({navigation}) => {

    const [emailError, setEmailError] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    // Using the user context
    const {authToken, setAuthToken} = useContext(UserContext)

    const handleGithubNavigation = () => {
        
        // if(!email.includes("@") || !name) return setEmailError(true)
        // setting email as auth token in user context 
        // setAuthToken is basically a function that is coming from UserContext as a prop

        if(!name) return setEmailError(true)
        setAuthToken(name)

        return navigation.navigate('Github Users')
    }

    const handleUsersNavigation = () => {
        return navigation.navigate("Students")
    }

    return (

        <View style={styles.screen}>
            <Image
                resizeMode="cover"
                source={require('../../assets/creditbook.png')}
                style = {styles.image}
            />
            {/* <Text>This is the home Screen</Text> */}
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={name => {
                            setName(name)
                            setEmailError(false)
                        }
                    }
                    placeholder="name"
                />
                {/* <TextInput
                    style={styles.input}
                    placeholder="email"
                    value={email}
                    onChangeText={email => {
                            setEmail(email)
                            setEmailError(false)
                        }
                    }
                /> */}
                
            </SafeAreaView>
            {emailError ? <Text style={{color:"red", justifyContent:"center",alignItems:"center"}}>Please enter your name</Text> : <></>}

            <TouchableOpacity
                style={styles.myButton}
                onPress={handleGithubNavigation}
            >
                <Text style={styles.ButtonText}>Navigate to Github </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.myButton}
                onPress={handleUsersNavigation}
            >
                <Text style={styles.ButtonText}>Navigate to Students</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    myButton : {
        margin : 15,
        width : 200,
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
    image : { 
        width: 240, 
        height: 150,
        margin : 20
    },
    input: {
        height: 40,
        margin: 12,
        width : 200,
        borderWidth: 1,
        padding: 10,
        borderRadius : 8
    },
    
})

export default HomeScreen;