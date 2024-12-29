import { useState } from "react";

export const user = {
    email: '',
    password: '',
    loggedIn: false,
  };
  
  // Please note: The login does not actually work!
  // This exercise is just about practicing event handling
  // You'll learn how to add user authentication to React apps later in the course!
  function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (event) =>{ setEmail(event.target.value)  };
    const passwordHandler = (event) =>{ setPassword(event.target.value)  };

    function loginHandler(){
      user.email=email;
      user.password=password;
      user.loggedIn=true;

      console.log('login ok !!');
      console.log(user.email);
      console.log(user.password);
      console.log(user.loggedIn);
      
    }


    
    return (
      <div id="app">
        <h1>User Login</h1>
        <p>
          <label>Email</label>
          {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
          <input type="email" onChange={emailHandler} value={email}/>
        </p>
  
        <p>
          <label>Password</label>
          {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
          <input type="password" onChange={passwordHandler} value={password} />
        </p>
  
        <p id="actions">
          <button onClick={loginHandler}>Login</button>
        </p>
      </div>
    );
  }
  
  export default App;