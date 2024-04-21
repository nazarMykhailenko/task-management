import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/common/Button'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { signUpUser } from '../redux/user/slice'
import { IUser } from '../redux/user/types'
import { Loading } from '../@types/global'

interface ISignUpFormInput {
	user_name: string
	email: string
	password: string
}

export const SignUpPage: React.FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpFormInput>({ mode: 'onChange' })
	const { status } = useAppSelector((state) => state.user)

	const onSubmit: SubmitHandler<ISignUpFormInput> = async (data) => {
		try {
			await dispatch(signUpUser(data as IUser))
		} catch (err) {
			console.log(err)
		}
	}

	React.useEffect(() => {
		if (status === Loading.SUCCESS) {
			navigate('/waiting-to-verify')
		}
	}, [status])

	return (
		<div className='flex items-center justify-center h-screen'>
			<form className='w-full max-w-sm' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-3xl font-bold mb-6'>SignUp</h1>

				<div className='mb-4'>
					<label
						className='block text-gray-700 font-bold mb-2'
						htmlFor='firstName'
					>
						Full name:
					</label>
					<input
						className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.user_name ? 'border-red-500' : ''
						}`}
						type='text'
						{...register('user_name', {
							required: 'Name is require field!',
							minLength: {
								value: 3,
								message: 'Please put correct name',
							},
						})}
					/>
					{errors.user_name && (
						<span className='text-red-500'>{errors.user_name.message}</span>
					)}
				</div>

				<div className='mb-4'>
					<label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
						Email:
					</label>
					<input
						className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.email ? 'border-red-500' : ''
						}`}
						type='email'
						{...register('email', {
							required: 'Email is require field!',
						})}
					/>
					{errors.email && (
						<span className='text-red-500'>{errors.email.message}</span>
					)}
				</div>

				<div className='mb-4'>
					<label
						className='block text-gray-700 font-bold mb-2'
						htmlFor='password'
					>
						Password:
					</label>
					<input
						className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.password ? 'border-red-500' : ''
						}`}
						type='password'
						{...register('password', {
							required: 'Password is required filed',
							minLength: {
								value: 5,
								message: 'Password must be longer than 5 characters',
							},
						})}
					/>
					{errors.password && (
						<span className='text-red-500'>{errors.password.message}</span>
					)}
				</div>

				<div className='flex items-center justify-between'>
					<Button border solid>
						Sign up
					</Button>
				</div>

				<div className='mt-4 text-center'>
					<p className='mb-1'>Already have an account?</p>
					<Link
						to='/log-in'
						className='text-[#365eff] underline focus:outline-none'
					>
						Log in
					</Link>
				</div>
			</form>
		</div>
	)
}
