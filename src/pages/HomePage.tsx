import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { TfiFaceSad } from 'react-icons/tfi'
import { Button } from '../components/common/Button'
import { useAppSelector } from '../redux/store'

const Popup: React.FC<{
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	isOpen: boolean
}> = ({ setOpen, isOpen }) => {
	const { projects } = useAppSelector((state) => state.projects)
	const navigate = useNavigate()

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			const popup = document.querySelector('.pick_popup')
			if (isOpen && popup && !popup.contains(target)) {
				setOpen(false)
			}
		}

		document.body.addEventListener('click', handleClickOutside)

		return () => {
			document.body.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div className='bg-black bg-opacity-15 h-screen w-screen fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
			<div className='bg-white pick_popup shadow-lg py-4 px-8 rounded-lg'>
				<div className='flex justify-between gap-x-5 text-lg mb-4'>
					<h2>Pick a project</h2>
					<div onClick={() => setOpen(false)} className='cursor-pointer'>
						X
					</div>
				</div>
				<ul className='flex flex-col gap-y-2'>
					{projects.map((project, index) => (
						<li
							onClick={() => {
								setOpen(false)
								navigate(`/project/${project.project_id}`)
							}}
							key={index}
							className='text-base hover:text-[#365eff] cursor-pointer'
						>
							{`${index + 1}.`} {project.project_name}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export const HomePage: React.FC = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const { user } = useAppSelector((state) => state.user)
	const [isOpen, setOpen] = React.useState(false)

	if (user && !user.isVerified) {
		navigate('/waiting-to-verify')
	}
	console.log(isOpen)

	if (location.pathname === '/') {
		return (
			<div className='h-full w-full flex flex-col gap-3 items-center justify-center text-xl'>
				<div className='flex flex-row items-center gap-3'>
					<span>You need to pick a project to start working </span>{' '}
					<TfiFaceSad />
				</div>
				<div>
					<Button
						onClick={(e: React.MouseEvent<HTMLDivElement>) => {
							e.preventDefault()
							setTimeout(() => {
								setOpen(true)
							}, 50)
						}}
						border
						dashed
					>
						Pick a project
					</Button>
				</div>
				{isOpen && <Popup isOpen={isOpen} setOpen={setOpen} />}
			</div>
		)
	}

	return <div>{<Outlet />}</div>
}
