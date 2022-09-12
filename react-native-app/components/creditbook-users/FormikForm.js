import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const FormikForm = ({error, setError, modalVisible, setModalVisible, users}) => {
    return (
        <Formik 
            initialValues={{age : "", name : ""}}
            onSubmit = {({name, age}) => {
                if(!name || !age) return setError(true)
                var newId = 0;
                if(users.length){
                    newId = parseInt(users[users.length - 1].id)+1
                }
                users.push({id : newId ,name, age})
                setModalVisible(!modalVisible)
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        style={styles.input}
                        placeholder="name"
                    />
                    <TextInput
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        style={styles.input}
                        keyboardType='numeric'
                        placeholder="age"
                    />

                    {error ? <Text style={{margin:4,color:"red",alignSelf:"center"}}>Name or Age is empty</Text> : <></>}
                    
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.textStyle}>Add Student</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    input : {
        height: 40,
        margin: 12,
        width : 200,
        borderWidth: 1,
        padding: 10,
        borderRadius : 8
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})

export default FormikForm;