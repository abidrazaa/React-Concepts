import { useState } from "react"
// import { Button, View, Text } from "react-native"

const ShowName = () => {

    const [name, setName] = useState("Abid")

    const handleOnPress = () => {
        (name == "Abid") ? setName("Raza") : setName("Abid")
    }

    return (

        <div>
            <p>My name is {name}!! </p> 
            <button onClick={handleOnPress}>Change my name</button>
        </div>
    )
}

export default ShowName;
