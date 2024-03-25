import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ProjectItem } from './ProjectItem'
import { MemberItem } from './MemberItem'
import { Button } from '../common/Button'
import { CustomNavLink } from '../common/CustomNavLink'
import { GiNetworkBars } from 'react-icons/gi'
import {
	PiColumnsFill,
	PiCalendarBlankDuotone,
	PiChatCircleDots,
} from 'react-icons/pi'
import { FaUserTie, FaRegBuilding } from 'react-icons/fa'
// import { BsGraphUpArrow, BsGraphDownArrow } from 'react-icons/bs'
import { BsGraphUpArrow } from 'react-icons/bs'
import { CiLogout } from 'react-icons/ci'
import classes from './styles.module.scss'

const projects = [
	{ name: 'Piper Enterprise', icon: FaRegBuilding, id: 1 },
	{ name: 'Web Platform', icon: FaRegBuilding, id: 2 },
	{ name: 'Mobile Loop', icon: FaRegBuilding, id: 3 },
	{ name: 'Wiro Mobile App', icon: FaRegBuilding, id: 4 },
]

const teamMembers = [
	{
		name: 'Karen Smith',
		onlineStatus: new Date(2024, 2, 2, 17, 27),
		email: 'karen@example.com',
		info: 'Web Developer',
		phoneNumber: '123-456-7890',
		profilePic: `../../../public/assets/img/wesley-tingey-LpZvsGynEho-unsplash.jpg`,
	},
	{
		name: 'Steve McCannel',
		onlineStatus: new Date(2024, 2, 2, 15, 27),
		email: 'steve@example.com',
		info: 'UI/UX Designer',
		phoneNumber: '987-654-3210',
		profilePic: `../../../public/assets/img/paul-schafer-NDcN_8JiAqw-unsplash.jpg`,
	},
	{
		name: 'Nazar Mykhailenko',
		onlineStatus: new Date(2024, 2, 2, 17, 13),
		email: 'nazar@example.com',
		info: 'Software Engineer',
		phoneNumber: '555-123-4567',
		profilePic: `../../../public/assets/img/dhaya-eddine-bentaleb-6ZLrCWI3Ink-unsplash.jpg`,
	},
	{
		name: 'Alice Cornel',
		onlineStatus: new Date(2024, 2, 2, 16, 59),
		email: 'alice@example.com',
		info: 'Product Manager',
		phoneNumber: '987-987-6543',
		profilePic: `../../../public/assets/img/the-dream-archives-BqD0Id4qemc-unsplash.jpg`,
	},
]

export const Navbar: React.FC = () => {
	const location = useLocation()

	const isActiveNavItem = (pathname: string, to: string) => {
		if (to !== '/') {
			return pathname === to
		}
		return pathname === to || pathname.startsWith('/project/')
	}

	return (
		<div className='flex flex-row h-screen'>
			<div className='py-5 flex flex-col border-r-2 border-[#f0f1f4]'>
				<ul className='flex-1 flex flex-col items-center'>
					<li className='p-3 bg-[#365eff] rounded-xl'>
						<div>
							<FaUserTie className='text-white text-lg' />
						</div>
					</li>
					<li className={classes.listItem}>
						<CustomNavLink
							to='/'
							defaultClasses={classes.link}
							activeClasses={classes.active}
							isActive={isActiveNavItem}
						>
							<PiColumnsFill />
						</CustomNavLink>
					</li>
					<li className={classes.listItem}>
						<CustomNavLink
							to='/statistics'
							defaultClasses={classes.link}
							activeClasses={classes.active}
							isActive={isActiveNavItem}
						>
							<GiNetworkBars />
						</CustomNavLink>
					</li>
					<li className={classes.listItem}>
						<CustomNavLink
							to='/calendar'
							defaultClasses={classes.link}
							activeClasses={classes.active}
							isActive={isActiveNavItem}
						>
							<PiCalendarBlankDuotone />
						</CustomNavLink>
					</li>
					<li className={classes.listItem}>
						<CustomNavLink
							to='/chat'
							defaultClasses={classes.link}
							activeClasses={classes.active}
							isActive={isActiveNavItem}
						>
							<PiChatCircleDots />
						</CustomNavLink>
					</li>
				</ul>
				<div className={`${classes.listItem} justify-self-end`}>
					<NavLink
						className={({ isActive }) =>
							isActive ? `${classes.link} ${classes.active}` : `${classes.link}`
						}
						to='/log-out'
					>
						<CiLogout />
					</NavLink>
				</div>
			</div>

			{(location.pathname === '/' ||
				location.pathname.includes('project/')) && (
				<div className='p-5 border-r-2 border-[#f0f1f4] overflow-y-scroll'>
					<div className='mb-8'>
						<h5 className='mb-4'>Projects</h5>
						<div className='[&>*:not(:last-child)]:mb-3'>
							{projects.map(({ name, icon, id }) => (
								<ProjectItem key={id} name={name} icon={icon} id={id} />
							))}
						</div>
					</div>

					<div className='mb-8'>
						<h5 className='mb-4'>Team members</h5>
						<div className='[&>*:not(:last-child)]:mb-3'>
							{teamMembers.map(({ name, onlineStatus, profilePic, email }) => (
								<MemberItem
									key={email}
									name={name}
									onlineStatus={onlineStatus}
									profilePic={profilePic}
								/>
							))}
						</div>
					</div>

					<div className='mb-8'>
						<h5 className='mb-4'>Time</h5>

						<div className='text-[11px] p-2 border-2 border-[#f0f1f4]'>
							<h6 className='font-medium uppercase text-[#b9c0cf] mb-3'>
								Total hours
							</h6>
							<div className='font-semibold text-lg mb-2'>23.7 hours</div>
							<div className='flex flex-row items-center gap-1'>
								<span className='text-[#41c7a3] flex flex-row items-center gap-1'>
									<span>
										<BsGraphUpArrow />
									</span>
									<span>{2.5}%</span>
								</span>
								<span> from last week</span>
							</div>
						</div>
					</div>

					<Button>+ Add Project</Button>
				</div>
			)}
		</div>
	)
}
