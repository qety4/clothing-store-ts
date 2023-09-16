import { useState } from 'react'
import './register.styles.scss'
import { ReactComponent as Show } from './../../assets/svgs/show.svg'
import { ReactComponent as Hide } from './../../assets/svgs/hide.svg'
import { createAuthUser, createUserDocumentFromAuth } from '../../libs/firebase/firebase'
import { FirebaseError } from 'firebase/app'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { registerValidator } from '../../libs/validators/registerValidator'

type FormData = z.infer<typeof registerValidator>


const Register = () => {
    const [visible, setVisible] = useState(false)


    const visibilityToggle = () => {
        setVisible(!visible)
    }

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(registerValidator),
    })

    const onSubmit = (formData: FormData) => {
        if (formData.password === formData.confirmPassword)
            submit(formData.email, formData.displayName, formData.password)
        else {
            setError('root', { message: 'passwords do not match' })
            return
        }
    }

    const submit = async (email: string, displayName: string, password: string) => {
        try {
            const { user } = await createAuthUser(email, password)

            await createUserDocumentFromAuth(user, { displayName })
            alert('user created !')
        } catch (error) {
            if (error instanceof FirebaseError) {
                setError('root', { message: error.code })
                return
            }
            if (error instanceof z.ZodError) {

                setError('root', { message: error.message })
                return
            }
            setError('root', { message: `${error}` })
        }
        finally {
            reset()
        }
    }


    return (
        <div className="reg-form">
            <div className="login-form-container" >
                <form action="" className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                        <label htmlFor="reg-email">Email</label>
                        <input className='input-text'
                            id='reg-email'
                            type="email"
                            {...register('email')}
                        />

                    </div>
                    <div className="input-box">
                        <label htmlFor="reg-name">Name</label>

                        <input className='input-text'
                            id='reg-name'
                            type="text"
                            {...register('displayName')}
                        />

                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password</label>

                        <input className='input-text'
                            type={visible ? "text" : "password"}
                            id='password'
                            {...register('password')}
                        
                        />

                        <span className='visibility' onClick={visibilityToggle} >{visible ? <Hide /> : <Show />}</span>
                    </div>
                    <div className="input-box">
                        <label htmlFor="confirm-password">Confirm password</label>

                        <input className='input-text'

                            type={visible ? "text" : "password"}
                            id='confirm-password'
                            {...register('confirmPassword')}
                        />

                    </div>
                    <button className='form-btn'>CREATE ACCOUNT</button>
                </form>
                <p>{errors.password?.message}</p>
            </div>
        </div>
    )
}

export default Register