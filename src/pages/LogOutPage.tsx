import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Button } from '../components/common/Button'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'
import { logOut } from '../redux/user/slice'

export const LogOutPage: React.FC = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const logUserOut = () => {
		dispatch(logOut())
		navigate('/')
	}
	return (
		<div className='w-screen h-screen flex justify-center items-center bg-[#365eff]'>
			<div className='bg-white w-[28%] rounded-2xl flex flex-col p-14 pt-20'>
				<div className='flex justify-center mb-10'>
					<FiLogOut className='text-[100px] text-[#365eff]' />
				</div>
				<div className='text-center text-2xl mb-20'>
					<h3 className='mb-2'>Oh no? You're leaving...</h3>
					<h3>Are you sure?</h3>
				</div>
				<div className='flex flex-col gap-6'>
					<Button border solid filled big onClick={() => navigate('/')}>
						Naah, Just Kidding
					</Button>
					<Button border solid big onClick={() => logUserOut()}>
						Yes, Log Me Out
					</Button>
				</div>
			</div>
		</div>
	)
}
