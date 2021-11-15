import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { Link, useHistory } from 'react-router-dom'

const customStyles = {
    content: {
        width: '100vw',
        marginLeft: '-3%',
        marginTop: '-3%',
        height: '100vh',
        textAlign: 'center',
        paddingTop: '10%',
        backgroundColor: '#FFE2AC'
    },
};

Modal.setAppElement('#root')

export default function Signup({ setCurrentUser, afterOpenModal, closeModal, openModal, modalIsOpen, subtitle }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        console.log(user);
                        setCurrentUser(user)
                        history.push('/')
                    })
                } else {
                    res.json().then(errors => {
                        console.error(errors)
                    })
                }
            })
    }


    return (
        <div className='modal'>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h1 className='login-h1'>Sign Up</h1>
                <button className='modal-button' onClick={closeModal}>X</button>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Username' value={username} required onChange={(e) => setUsername(e.target.value)} /> <br />
                    <input type='password' placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)} /> <br />
                    <button type='submit'>Sign Up</button>
                    <p>Already a member? Click <Link to='/login'><span>here</span></Link> to log in.</p>
                </form>
            </Modal>
        </div>
    )
}