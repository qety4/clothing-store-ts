import { Fragment, useState } from 'react'
import './loginModal.styles.scss'
import { ReactComponent as GoogleSvg } from './../../assets/svgs/google.svg'
import { signInWithGooglePopup } from '../../libs/firebase/firebase'
import LogInForm from '../LoginForm/LoginForm'
import Register from '../Register/Register'
import { useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

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

    const toggle = () => {
        setModal(!modal)
    }
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
                onClick={toggle}
            >
                LOGIN
            </button>
            <Transition appear show={modal} as={Fragment}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-1000"
                    enterFrom="opacity-0 scale-80"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-1000"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className='login-modal'>
                        <Dialog onClose={toggle} >

                            <div className='login-modal-content'>

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
                            </div>
                        </Dialog>
                    </div>
                </Transition.Child>
            </Transition >

        </>
    )
}

export default LogIn