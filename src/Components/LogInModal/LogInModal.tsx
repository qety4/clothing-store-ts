import { Fragment, useState } from 'react'
import './loginModal.styles.scss'
import { ReactComponent as GoogleSvg } from './../../assets/svgs/google.svg'
import { signInWithGooglePopup } from '../../libs/firebase/firebase'
import LogInForm from '../LoginForm/LoginForm'
import Register from '../Register/Register'
import { useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'

const body = document.body


const LogIn = () => {
    const [modal, setModal] = useState(false);
    const [log, setLog] = useState(0)

    useEffect(() => {
        return () => {
            body.classList.remove('stop-scroll')
            setModal(false)
        }
    }, [])

    const toggleLogin = (a: number) => {
        setLog(a)
    }

    if (modal) {
        body.classList.add('stop-scroll')
    } else {
        body.classList.remove('stop-scroll')
    }



    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    return (
        <>
            <button
                className='login-btn'
                onClick={() => setModal(true)}
            >
                LOGIN
            </button>

            <Dialog className='headless-modal' open={modal} onClose={() => setModal(false)}>
                <div className='login-modal'>
                    <Dialog.Panel className='login-modal-content' as={motion.div}
                        variants={{
                            hidden: { opacity: 0.8, y: 4.8 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 0.48, delay: 0 }}
                    >

                        <p className='modal-title'>welcome</p>
                        <div className='login-register'>
                            <p
                                className={log === 0 ? 'login' : ''}
                                onClick={() => { toggleLogin(0) }}>LOGIN</p>
                            <p
                                className={log === 0 ? '' : 'login'}
                                onClick={() => toggleLogin(1)}>SIGN UP</p>
                        </div>
                        <div className='modal-form'>
                            {
                                log === 0 ?
                                    <>
                                        <LogInForm />
                                        <p className='reg-link'>don't have an account? <b onClick={() => toggleLogin(1)}>register</b></p>

                                    </>
                                    :
                                    <>
                                        <Register />

                                    </>
                            }
                        </div>
                        <p className='modal-or'>OR</p>
                        <button className='mail-signin' onClick={signInWithGoogle} ><GoogleSvg />  sign in with google</button>

                        {/* <button className='close-modal-btn' onClick={toggle}>&#10005;</button> */}

                    </Dialog.Panel>
                </div>
            </Dialog >
        </>
    )
}

export default LogIn