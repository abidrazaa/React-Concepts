import { useEffect, useState } from "react";
import Loading from "../loading/LoadingComponent";
import Users from "./UsersComponent";


const GithubUsers = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsersFromGithub = async () => {

        const res = await fetch("https://api.github.com/users")
        const data = await res.json()
        setLoading(false)
        setUsers(data)
    }

    const deleteUser = (id) => {

        const filteredUsers = users.filter(user => {
            return user.id != id
        })
        setUsers(filteredUsers)
    }

    // This will only run when the screen renders
    useEffect(() => {
        getUsersFromGithub()
    },[])

    const render = loading ? <Loading /> : <Users users={users} deleteUser={deleteUser}/>
    return render
    
}

export default GithubUsers;