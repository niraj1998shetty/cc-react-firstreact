import "./input.css";
const Input = () => {
  
function submitHandler(e){
  let u= document.getElementById("uname").value;
e.preventDefault(u);
}

function usernamehandler(event) {
  let u= event.target.value;
  if (u.length < 3) {
    document.getElementById("msg").textContent = "not valid";
    document.getElementById("msg").style.color = "red";
  }
  else{
    document.getElementById("msg").textContent = "valid";
      document.getElementById("msg").style.color = "green";

  }
}
  return (
    <>
      <h1>User Input Form</h1>
      <div>
        <form className="form-wrap">
          <label htmlFor="username">User Name:</label>
          <input
            onChange={usernamehandler}
            minLength="4"
            maxLength="8"
            required
            type="text"
            id="uname"
          ></input><span id="msg"><small></small></span>
          <br></br>
          <label htmlFor="email">Email:</label>
          <input
            
            type="email"
            pattern=".+@gmail.com"
            required
          ></input>
          <br></br>
          <label htmlFor="phone">Phone:</label>
          <input
            
            type="tel"
            pattern="[0-9]{10}"
            required
          ></input>
          <input type="button" onClick={submitHandler} value="submit"></input>
        </form>
      </div>
    </>
  );
};
export default Input;
