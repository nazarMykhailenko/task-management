import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { AiOutlineEdit } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { updateUser } from '../../redux/user/slice'
import { isObjectEmpty } from '../../utils/isObjectEmpty'
import { ISettingsPageInput } from './types'
import { IUser } from '../../redux/user/types'
import { FieldErrors } from 'react-hook-form'
import { toTitleCase } from '../../utils/toTitleCase'

interface IEditItemProps {
	register: UseFormRegister<ISettingsPageInput>
	parameter: 'user_name'
	value: string
	errors: FieldErrors<ISettingsPageInput>
}

export const EditItem: React.FC<IEditItemProps> = ({
	parameter,
	value,
	register,
	errors,
}) => {
	const dispatch = useAppDispatch()
	const { user } = useAppSelector((state) => state.user)
	const [isEditable, setEditable] = React.useState(false)
	const [inputValue, setInputValue] = React.useState(value)
	const [isError, setError] = React.useState(false)

	React.useEffect(() => console.log('yo', errors), [errors])

	const changeInputValue = (
		e: React.ChangeEvent<HTMLInputElement>,
		parameter: keyof ISettingsPageInput
	) => {
		setInputValue(e.target.value)
		dispatch(updateUser({ ...user, [parameter]: e.target.value } as IUser))
	}

	return (
		<div className='mb-8'>
			<div className='mb-4 text-xl font-medium'>
				{toTitleCase(parameter) + ':'}
			</div>
			<div className='flex items-center space-x-4'>
				<div>
					{isEditable ? (
						<input
							{...register(parameter, {
								required: `${toTitleCase(parameter)} is require field!`,
							})}
							className='w-[12rem] border-b outline-none'
							value={inputValue}
							onChange={(e) => changeInputValue(e, parameter)}
						/>
					) : (
						<div className='w-[12rem]'>{value}</div>
					)}
				</div>
				<div>
					<AiOutlineEdit
						onClick={() => setEditable((prev) => !prev)}
						className='cursor-pointer'
					/>
				</div>
			</div>
			{errors[parameter] && (
				<span className='text-red-500'>{errors[parameter]?.message}</span>
			)}
		</div>
	)
}
