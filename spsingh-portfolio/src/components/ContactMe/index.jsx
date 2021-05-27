import React, { useState } from 'react'
import { SendOutlined } from '@ant-design/icons';
import { Button, message } from 'antd'
import axios from 'axios'
const ContactMe = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [msg, setmessage] = useState('')
    const [loading, setloading] = useState(false)
    const sendMessage = () => {
        setloading(true)
        if (name.length && email.length && msg.length) {
            let obj = {
                "name": name,
                "email": email,
                "message": msg
            }
            axios.post('https://spsinghapi.herokuapp.com/addData', obj).then(res => {
                if (res.status == 200) {
                    message.success('Message sent successfully');
                }
                else {
                    message.error('Sorry something went wrong');
                }
                setloading(false)
                setname('')
                setemail('')
                setmessage('')
            })
                .catch(err => {
                    message.error('Sorry something went wrong');
                    setloading(false)
                })

        }
        else {
            message.warning('Please fill all the fields');
            setloading(false)
        }
    }
    return (
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form">
                    <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                        <input className="input100" type="text" name="name" placeholder="Full Name" onChange={(e) => setname(e.target.value)} value={name} />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x" onChange={(e) => setemail(e.target.value)} value={email}>
                        <input className="input100" type="text" name="email" placeholder="E-mail" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your message" onChange={(e) => setmessage(e.target.value)} value={msg}>
                        <textarea className="input100" name="message" placeholder="Your Message"></textarea>
                    </div>
                    <div className="container-contact100-form-btn">
                        <Button className="contact100-form-btn" loading={loading} onClick={sendMessage}>
                            <SendOutlined />
                            <span style={{ margin: "0 5px" }}>Send</span>
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
