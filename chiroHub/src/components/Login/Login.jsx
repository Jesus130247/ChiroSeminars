import { useState } from "react"
import { signUp, login } from "../../utils/auth_api"
import styles from './Login.module.css'
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import { useNavigate } from "react-router-dom"

export default function Login(props) {
    const [formData, setFormData] = useState({ email:'', username:'', password:''})
    const [newUser, setNewUser] = useState({ email:'', username:'', password:''})
    const [logging, setLogging] = useState(true)
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()
    async function tryLogin(e) {
        e.preventDefault()
        try {
            let token = await login(formData)
            localStorage.setItem('token', token)
            navigate('/ChiroSeminars/')
        } catch (err) {
            console.log(err)
            setMessage('ERROR: Invalid username or password')
        }
    }

    async function trySignUp(e) {
        e.preventDefault()
        setMessage('Signed up')
        setLogging(true)
        await signUp(newUser)
            .catch(err => {
                console.log(err)
                setMessage('ERROR: Username already exists')
                setLogging(false)
            })
    }

    function handleChangeLogin(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    function handleChangeSignUp(e) {
        setNewUser({...newUser, [e.target.name]: e.target.value})
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    function handleSwitch() {
        setLogging(!logging)
        setMessage(null)
    }
    return (
    <>
    <Nav />
    <div className={styles.loginContainer}>
        <section className={styles.login}>
            <h1>Prepare for Battle</h1>
            {logging ? <>
            <h2>- Login -</h2>
            <div style={{color:"red", fontSize:'1.15rem', fontWeight:'700'}}>{message}</div>
            <form action="" onSubmit={tryLogin}>
                <label htmlFor="" > Email: </label>
                <input className={styles.inputs} type="Email" onChange={handleChangeLogin} name="email"/>
                <br />
                <label htmlFor="" >Username: </label>
                <input className={styles.inputs} type="text" onChange={handleChangeLogin} name="username"/>
                <br />
                <label htmlFor="" > Password: </label>
                <input className={styles.inputs} type="password" onChange={handleChangeLogin} name="password"/> 
                <br /><button className={styles.btn}>Login</button>
            </form>
            <p>Don't have an account? <button className={styles.btnCreate} onClick={handleSwitch}>Sign Up</button></p>
            </>
            : <>
            <h2>- Sign Up -</h2>
            <div style={{color:"red", fontSize:'1.15rem', fontWeight:'700'}} >{message}</div>
            <form action="" onSubmit={trySignUp}>
                <label htmlFor="" > Email: </label>
                <input className={styles.inputs} type="Email" onChange={handleChangeSignUp} name="email"/>
                <br />
                <label htmlFor="" >Username: </label>
                <input className={styles.inputs} type="text" onChange={handleChangeSignUp} name="username"/>
                <br />
                <label htmlFor="" > Password: </label>
                <input className={styles.inputs} type="password" onChange={handleChangeSignUp} name="password"/>
                <br /> <button className={styles.btn}>Sign Up</button>
            </form> 
            <p>Have an account? <button className={styles.btnCreate} onClick={handleSwitch}>Login</button></p>
            </> }
        {/* <p>Just want to try? <DemoBtn setFormData={setFormData} formData={formData} props={props}/></p> */}
        </section>
        <br />
        <Footer />
    </div>
    </>
    )
} 