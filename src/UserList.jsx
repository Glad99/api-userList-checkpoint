import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"


const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUserList(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    },[])

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-5 mt-4">USER LIST</h1>
            <div className="flex flex-wrap justify-center items-center">
                {userList.map(user => (<div key={user.id} className="flex flex-col bg-lime-200 mb-6 ml-3 p-5 justify-center   rounded-2xl gap-2 tracking-wide shadow-md m-3 w-[23rem]"><h1><b>NAME:</b> <span className="text-lg">{user.name}</span></h1>
                <h3><b>USERNAME:</b>{user.username}</h3>
                <h3><b>EMAIL:</b> {user.email}</h3>
                <h3><b>WEBSITE:</b> {user.website}</h3>
                <h3><b>PHONE NUMBER:</b> {user.phone}</h3>
                </div>))}
            </div>

        </div>
    )
    }

export default UserList