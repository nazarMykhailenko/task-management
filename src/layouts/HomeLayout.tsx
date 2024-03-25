import React from 'react'
import { Navbar, Header } from '../components'
import { Outlet } from 'react-router-dom'

export const HomeLayout: React.FC = () => {
	return (
		<div className='home-wrapper wrapper flex flex-row'>
			<div>
				<Navbar />
			</div>
			<div className='flex flex-col flex-1'>
				<Header />
				<Outlet />
			</div>
		</div>
	)
}
