import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import GamePage from './GamePage';
import UserName from './UserName';

export default function GameEntry() {
    const [name1,setName] = useState("");

    const userNameNextPage = () => {
      return(
        <div>
          <UserName userName = {name1}/>
        </div>
      )
    }
    
    return (
        <div>
           <p> Ready For War</p>
           <input onChange={(e)=>setName(e.target.value)} placeholder={"enter your name"}/><br/>
           <button ><Link onClick={userNameNextPage} to="/GamePage">fff</Link></button>
        </div>
    )
}
