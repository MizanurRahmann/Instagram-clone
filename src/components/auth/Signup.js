import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Input } from '@material-ui/core';
import { auth } from '../firebase/config';

function getModalStyle() {
    const top = 50 + Math.round(Math.random() * 20) - 10;
    const left = 50 + Math.round(Math.random() * 20) - 10;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Signup() {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signup = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            return authUser.user.updateProfile({displayName: username});
        })
        .catch(error => setError(error.message))
    }

    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="app__signup">
                        <center>
                            <img className="app__header-image" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
                        </center>
                        <Input
                            className="input"
                            placeholder="Username"
                            type="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />
                        <Input
                            className="input"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                        <Input
                            className="input"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                        
                        <small className="error__message">{error}</small>
                        <Button className="btn__signup" onClick={signup}>Signup</Button>
                    </form>

                </div>
            </Modal>
            <Button onClick={() => setOpen(true)}>Signup</Button>
        </React.Fragment>
    )
}

export default Signup
