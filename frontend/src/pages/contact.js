import { useState, useEffect } from "react"
import axios from "axios"

function Contact() {
    const [username, setUsername] = useState('Churrps')
    const [email, setEmail] = useState('example@gmail.com')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [selectData, setSelectData] = useState([])
    const [selectValue, setSelectValue] = useState('')

    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])

    const axiosFetchData = async(processing) => {
        await axios.get('http://localhost:2501/user')
        .then(res => {
            if (processing) {
                setSelectData(res.data)
            }
        })
        .catch(err => console.log(err))
    }

    const axiosPostData = async() => {
        const postData = {
            username: username,
            email: email,
            role: selectValue,
        }

        await axios.post('http://localhost:2501/user', postData)
        .then(res => setError(<p className="success">{res.data}</p>))
    }

    const SelectDropdown = () => {
        return (
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                <option value="" key="none"> -- Select One -- </option>
                {
                    selectData?.map( (item) => (
                        <option value={item.website} key={item.website}>{item.website}</option>
                    ))
                }
            </select>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!message) {
            setError(<p className="required">Message is empty. Please type a message.</p>)
        } else {
            setError('')
            axiosPostData()
        }
    }

    return (
        <>
            <h1 className="white">Contact Us</h1>

            <form className="contactForm">
                <label>Username</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Email</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Which Role do you want to have?</label>
                <SelectDropdown />

                <label>Message</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                
                {error}

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Contact