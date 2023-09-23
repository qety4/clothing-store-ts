import { useState } from 'react'
import './loginModal.styles.scss'
import { ReactComponent as GoogleSvg } from './../../assets/svgs/google.svg'
import { signInWithGooglePopup } from '../../libs/firebase/firebase'
import LogInForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import { useEffect } from 'react'
import { Dialog, } from '@headlessui/react'
import { motion } from 'framer-motion'
import Button, { ButtonTypes } from '../Button/Button'

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
    
    if (modal) {
        body.classList.add('stop-scroll')
    } else {
        body.classList.remove('stop-scroll')
    }

    const toggleLogin = (a: number) => {
        setLog(a)
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
                            hidden: { opacity: 0.8, y: 3 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 0.3, delay: 0 }}
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
                                        <RegisterForm />

                                    </>
                            }
                        </div>
                        <p className='modal-or'>OR</p>
                        <Button onClick={signInWithGoogle} type={ButtonTypes.RoundedBtnM}><GoogleSvg />  sign in with google</Button>

                        <button className='close-modal-btn' onClick={()=>setModal(false)}>&#10005;</button>

                    </Dialog.Panel>
                </div>
            </Dialog >
        </>
    )
}

export default LogIn