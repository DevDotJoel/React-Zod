import { LoginForm } from "./components/login-form"


function App() {

  function submit(data:any){
    console.log(data);

  }

  return (
    <>
    <div className="container vh-100 overflow-hidden">
    <LoginForm submit={submit}/>
    </div>
  
 
    </>
  )
}

export default App
