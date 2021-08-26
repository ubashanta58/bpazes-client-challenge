import Link from 'next/link'
import {useState} from 'react'
import baseUrl from '../helpers/baseUrl'
import { useRouter } from 'next/router'
import { STATES } from 'mongoose'
const Signup = ()=>{
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router  = useRouter()

  const userSignup = async(e)=>{
    e.preventDefault()
    const res =   await fetch(`${baseUrl}/api/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password,
        confirmPassword
      })
    })

    const res2 = await res.json()
    if(res2.error){
      M.toast({html: res2.error,classes:"red"})
    }else{
      M.toast({html: res2.message,classes:"green"})
      router.push('/login')
    }
  }
    return(
      <div className="container card authcard center-align">
        <h3>Register</h3>
        <form onSubmit={(e)=>userSignup(e)}>
          <input type="text" placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <input type="email" placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password" placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <input type="password" placeholder="ConfirmPassword"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          />
            <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit">signup
              <i className="material-icons right">forward</i>
          </button>
          <Link href="/login"><a><h5>Already have a account ?</h5></a></Link>
        </form>

      </div>
    )
  }
  
  export default Signup