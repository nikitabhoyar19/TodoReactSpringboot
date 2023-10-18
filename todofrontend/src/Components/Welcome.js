import {React, useState} from 'react'
import {useParams, Link} from 'react-router-dom';
import axios from 'axios'
import { retriveHelloWorld } from '../api/HellWorldApiService';


function Welcome() {
    const {username} = useParams()
    //console.log(username);
    const [message, setMessage] = useState(null)

    function sayHello() {
        console.log("called");
        retriveHelloWorld()
        .then((res) => success(res))
        .catch((error) => errorT(error))
        .finally(() => console.log("me"))
    

        // axios.get('http://localhost:9091/hello')
        // .then((res) => success(res))
        // .catch((error) => errorT(error))
        // .finally(() => console.log("Hello"))
    }

    function success(res) {
        console.log(res);
        setMessage(res.data);
    }

    function errorT(error) {
        console.log(error);
    }

  return (
    <div>
        <h1>Welcome {username}</h1>
        Manage Your Todos <Link to='/todos'>Go here</Link>

            <div>
                <button type="button" name="sayHello" onClick={sayHello}>Say</button>
            </div>

            <div className='text-info'>{message}</div>
    </div>
  )
}

export default Welcome