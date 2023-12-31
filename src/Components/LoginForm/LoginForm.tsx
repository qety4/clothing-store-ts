import {  useState } from 'react'
import { ReactComponent as Show } from './../../assets/svgs/show.svg'
import { ReactComponent as Hide } from './../../assets/svgs/hide.svg'
import { signIn } from '../../libs/firebase/firebase'
import './loginForm.styles.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginValidator } from '../../libs/validators/loginValidator'
import { z } from 'zod'
import { FirebaseError } from 'firebase/app'
import Button, { ButtonTypes } from '../Button/Button'

type FormData = z.infer<typeof loginValidator>

const LogInForm = () => {
    const [remember, setRemember] = useState<boolean>(false)

    const [visible, setVisible] = useState<boolean>(false)


    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(loginValidator),
    })

    const visibilityToggle = () => {
        setVisible(!visible)
    }


    const signInDemo = () => {
        submit('demo@mail.com', 'aaaaaa')
    }

    const onSubmit = (formData: FormData) => {
        submit(formData.email, formData.password)
    }

    const submit = async (email: string, password: string) => {

        try {
            if (remember) {
                await signIn(email, password, true)
            } else {
                await signIn(email, password, false)
            }
        }
        catch (error) {
            if (error instanceof FirebaseError) {
                setError('email', { message: error.message })
                return
            }
            if (error instanceof z.ZodError) {
                setError('password', { message: error.message })
                return
            }
            setError('email', { message: `${error}` })
        }
        finally {
            reset()
        }
    }


    return (
        <div>
            <div className="login-form-container" >

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                        <label htmlFor="log-email">Email</label>
                        <input className='input-text'
                            id='log-email'
                            type="email"
                            {...register('email')}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="log-password">Password</label>
                        <input className='input-text'
                            id='log-password'
                            type={visible ? "text" : "password"}
                            {...register('password')}
                        />
                        <span className='visibility' onClick={visibilityToggle} >{visible ? <Hide /> : <Show />}</span>
                    </div>

                    <label htmlFor="log-rem" className='log-remember'>Remember me <input onChange={() => setRemember((prev) => !prev)} name='remember' type="checkbox" id='log-rem' /></label>
                    <Button type={ButtonTypes.LoginBtn}>LOG IN</Button>
                    <p className='sign-in-demo' onClick={signInDemo} >sign in demo</p>
                </form>
                <p>{errors.password?.message || errors.email?.message}</p>
            </div>
        </div>
    )
}

export default LogInForm