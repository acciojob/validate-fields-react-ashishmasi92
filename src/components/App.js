
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [input, setInput] = useState({
    username: "",
    password: ""
  })
  let [error, setError] = useState("")
  let { username, password } = input
  

  function implementChange(e) {
    let { name, value } = e.target;
    let updated ={ ...input, [name]: value } 
    setInput(updated)
    if(updated.username && updated.password){
      setError("")
    }

  }



   function validation() {
    if (!username || !password) {
      setError("Both username and password are required.");
      return false;
    }
    setError("");
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (validation()) {
      alert("form submitted successfully")
    }


  }
  return (

    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" name="username" id="username" onChange={implementChange} value={username} />
        <input type="password" name="password" id="password" onChange={implementChange} value={password} />
        <button>Submit</button>
      </form>
  {error&& <p id="errorMessage" style={{color:"red"}}>{error}</p>}
    </div>

  )
}

export default App
