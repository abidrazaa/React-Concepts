import { useContext, useRef, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, SafeAreaView } from "react-native"
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";
import { UserContext } from "../../../Routes/Routes";
const HomeScreen = ({navigation }) => {


    const [emailError, setEmailError] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    // Using the user context
    const {authToken, setAuthToken} = useContext(UserContext)

    const handleGithubNavigation = () => {
        
        if(!email.includes("@") || !name) return setEmailError(true)
        // setting auth token in user context 
        setAuthToken(email)
        return navigation.navigate('Users')
    }

    return (

        <View style={styles.screen}>
            <Text>This is the home Screen</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={name => setName(name)}
                    placeholder="name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                />

                {emailError ? <Text>Email or name is not valid</Text> : <></>}
                
                <Button
                    title="Go to Github Users"
                    onPress={handleGithubNavigation}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    input: {
        height: 40,
        margin: 12,
        width : 200,
        borderWidth: 1,
        padding: 10,
      },
})

export default HomeScreen;