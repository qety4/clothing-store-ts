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


// const defaultFormFields = {
//     displayName: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
// }

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
            setError('displayName', { message: 'passwords do not match' })
            return
        }
    }

    const submit = async (email: string, displayName: string, password: string) => {
        try {
            const { user } = await createAuthUser(email, password)
            console.log(user)
            await createUserDocumentFromAuth(user, { displayName })
            alert('user created !')
        } catch (error) {
            if (error instanceof FirebaseError) {
                setError('displayName', { message: error.code })
                return
            }
            if (error instanceof z.ZodError) {
                console.log(error)
                setError('displayName', { message: error.message })
                return
            }
            setError('displayName', { message: `${error}` })
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

                            required
                            id='reg-email'
                            type="email"
                            {...register('email')}
                        />

                    </div>
                    <div className="input-box">
                        <label htmlFor="reg-name">Name</label>

                        <input className='input-text'

                            required
                            id='reg-name'
                            type="text"
                            {...register('displayName')}
                        />

                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password</label>

                        <input className='input-text'

                            type={visible ? "text" : "password"}
                            required
                            id='password'
                            {...register('password')}
                        
                        />

                        <span className='visibility' onClick={visibilityToggle} >{visible ? <Hide /> : <Show />}</span>
                    </div>
                    <div className="input-box">
                        <label htmlFor="confirm-password">Confirm password</label>

                        <input className='input-text'

                            type={visible ? "text" : "password"}
                            required
                            id='confirm-password'
                            {...register('confirmPassword')}
                        />

                    </div>
                    <button className='form-btn'>CREATE ACCOUNT</button>
                </form>
                <p>{errors.displayName?.message}</p>
            </div>
        </div>
    )
}

export default Register