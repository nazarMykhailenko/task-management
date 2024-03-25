import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { TfiFaceSad } from 'react-icons/tfi'
import { Button } from '../components/common/Button'

export const HomePage: React.FC = () => {
	const location = useLocation()

	if (location.pathname === '/') {
		return (
			<div className='h-full w-full flex flex-col gap-3 items-center justify-center text-xl'>
				<div className='flex flex-row items-center gap-2'>
					<span>You need to pick a project to start working </span>{' '}
					<TfiFaceSad />
				</div>
				<div>
					<Button>Pick a project</Button>
				</div>
			</div>
		)
	}

	return <div>{<Outlet />}</div>
}
