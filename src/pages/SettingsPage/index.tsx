import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { fetchUpdatedUser } from '../../redux/user/slice'
import { EditItem } from './EditItem'
import { Button } from '../../components/common/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { isObjectEmpty } from '../../utils/isObjectEmpty'
import { ISettingsPageInput } from './types'
import { IUser } from '../../redux/user/types'

export const SettingsPage: React.FC = () => {
	const { user } = useAppSelector((state) => state.user)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISettingsPageInput>({ mode: 'onChange' })
	const dispatch = useAppDispatch()
	// const [file, setFile] = React.useState('')

	const onSubmit: SubmitHandler<ISettingsPageInput> = () => {
		if (isObjectEmpty(errors)) {
			dispatch(fetchUpdatedUser(user as IUser))
		}
	}

	// const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	try {
	// 		const formData = new FormData()
	// 		const file = e.target.files && e.target.files[0]
	// 		if (file) {
	// 			formData.append('image', file)
	// 		}
	// 		const { data } = await axios.post(
	// 			'http://localhost:4444/upload',
	// 			formData
	// 		)
	// 		dispatch(setAvatar(data.url))
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// }

	if (!user)
		return (
			<div className='w-screen h-screen flex items-center justify-center'>
				<CircularProgress />
			</div>
		)

	return (
		<div className='flex items-center justify-center h-screen'>
			<form className='w-full max-w-sm' onSubmit={handleSubmit(onSubmit)}>
				<h1 className='text-center text-3xl font-bold mb-10'>Settings</h1>

				{/* <div className='mb-8'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='image'
					>
						Upload Profile Picture
					</label>
					<input
						{...register('image')}
						onChange={handleFileChange}
						className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='file'
					/>
					{errors.image && (
						<p className='text-red-500 text-xs italic'>
							{errors.image.message}
						</p>
					)}
				</div> */}

				<EditItem
					register={register}
					parameter='user_name'
					value={user.user_name}
					errors={errors}
				/>

				<Button big filled>
					Save Changes
				</Button>
			</form>
		</div>
	)
}
