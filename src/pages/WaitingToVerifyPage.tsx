import React from 'react'
import { useAppSelector } from '../redux/store'
import { useNavigate } from 'react-router-dom'

export const WaitingToVerifyPage: React.FC = () => {
	const { user } = useAppSelector((state) => state.user)
	const navigate = useNavigate()

	React.useEffect(() => {
		if (user?.isVerified) {
			navigate('/')
		}
	}, [user])
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='bg-white p-6 rounded-lg shadow-md'>
				<p className='text-lg text-[#365eff] text-center font-semibold'>
					You need to verify your email
				</p>
			</div>
		</div>
	)
}
