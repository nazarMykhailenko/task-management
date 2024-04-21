import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { TfiFaceSad } from 'react-icons/tfi'
import { Button } from '../components/common/Button'
import { useAppSelector } from '../redux/store'

export const HomePage: React.FC = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const { user } = useAppSelector((state) => state.user)

	if (user && !user.isVerified) {
		navigate('/waiting-to-verify')
	}

	if (location.pathname === '/') {
		return (
			<div className='h-full w-full flex flex-col gap-3 items-center justify-center text-xl'>
				<div className='flex flex-row items-center gap-2'>
					<span>You need to pick a project to start working </span>{' '}
					<TfiFaceSad />
				</div>
				<div>
					<Button border dashed>
						Pick a project
					</Button>
				</div>
			</div>
		)
	}

	return <div>{<Outlet />}</div>
}
