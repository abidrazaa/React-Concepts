import { useState } from "react"
import {StyleSheet, Text, View, ScrollView, SafeAreaView, Modal, TextInput } from "react-native"
import UsersList from "./UsersList";
import RightHeaderButton from "./RightHeaderButton";
import AddUserModal from "./AddUserModal";

const CreditBookUsers = ({navigation}) => {

    const tempUsers = [
        {id : 1, name : "Abid", age : 22},
        {id : 2, name : "Akarsh", age : 25},
        {id : 3, name : "Hasan", age : 23}
    ]
    const [users, setUsers] = useState(tempUsers)
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)
    const [error, setError] = useState(false)
    const [checked, setChecked] = useState({});


    const deleteUser = (id) => {

        const filteredUsers = users.filter(user => {
            return user.id != id
        })
        setUsers(filteredUsers)
    }

    const handleAddUser = () => {
        setModalVisible(true)
    }

    const handleFormSubmit = () => {
        if(!name || !age) return setError(true)
        var newId = 0;
        if(users.length){
            newId = parseInt(users[users.length - 1].id)+1
        }
        users.push({id : newId ,name, age})
        setModalVisible(!modalVisible)
        setName("")
        setAge("")
    }

    return(
        <SafeAreaView style={styles.screen}>
            <ScrollView>
                <View style = {styles.container}>

                    <View style = {styles.header}>
                        <Text style={styles.heading}>List of Students</Text>
                        <RightHeaderButton handleAddUser={handleAddUser} />
                    </View>
                    <View style={styles.body}>
                        {
                            users.length == 0 
                            ? 
                            <Text style={{textAlign:"center"}}>No Student Exist</Text> 
                            : 
                            <UsersList 
                                users={users} 
                                deleteUser={deleteUser} 
                                checked={checked} 
                                setChecked={setChecked} 
                            />
                        }
                    </View>

                    <AddUserModal 
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        name={name}
                        setName={setName}
                        handleFormSubmit={handleFormSubmit}
                        age={age}
                        setAge={setAge}
                        error={error}
                        setError={setError}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {

    },
    header : {
        alignItems : "center",
        width : "100%",
        padding : 10,
        // marginTop : 55,
        display:"flex",
        flexDirection :"row",
        justifyContent : "space-between"

    },
    heading : {
        color : "grey",
        fontWeight : "bold",
        fontSize : 30
    },
    body : {
        margin : 10,
    },
    myButton : {
        position : "absolute",
        right : 10,
        margin : 15,
        width : 80,
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

export default CreditBookUsers;