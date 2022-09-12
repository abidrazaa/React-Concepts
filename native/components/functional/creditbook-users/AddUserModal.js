import {StyleSheet, Text, View, TouchableOpacity, Pressable, Modal, TextInput } from "react-native"


const AddUserModal = ({modalVisible, setModalVisible, name, setName, handleFormSubmit, age, setAge, error, setError}) => {
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={name => {
                                    setName(name)
                                    setError(false)
                                }
                            }
                            placeholder="name"
                        />
                        <TextInput
                            style={styles.input}
                            value={age}
                            keyboardType='numeric'
                            onChangeText={age => {
                                    setAge(age)
                                    setError(false)
                                }
                            }
                            placeholder="age"
                        />
                        {error ? <Text style={{margin:4,color:"red"}}>Name or Age is empty</Text> : <></>}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleFormSubmit}
                        >
                        <Text style={styles.textStyle}>Add Student</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
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

export default AddUserModal;