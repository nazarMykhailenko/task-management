import React from 'react'
import { IconBaseProps, IconType } from 'react-icons'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { CustomNavLink } from '../common/CustomNavLink'
import { useNavigate } from 'react-router-dom'

interface IProjectItem {
	name: string
	id: number
}

const Popup: React.FC<{
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	id: number
	isOpen: boolean
}> = ({ setOpen, id, isOpen }) => {
	const navigate = useNavigate()

	const deleteProject = () => {
		console.log('Soon')
	}

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			const popup = document.querySelector('.popup')
			console.log(isOpen, 'it is')
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
		<div className='popup absolute bg-white p-3 rounded-lg shadow-md top-2 -right-3 z-20'>
			<div className='flex items-center justify-between'>
				<h2 className='text-sm font-semibold mb-2'>Options</h2>
				<h2
					onClick={() => setOpen((prev) => !prev)}
					className='text-sm font-semibold mb-2 cursor-pointer'
				>
					X
				</h2>
			</div>
			<div className='grid grid-cols-1 gap-4'>
				<button
					onClick={() => navigate(`/project/${id}`)}
					className='bg-blue-500 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-600'
				>
					Open Project
				</button>
				<button
					onClick={() => deleteProject}
					className='bg-red-500 text-white px-3 py-1 text-sm rounded-md hover:bg-red-600'
				>
					Delete Project
				</button>
			</div>
		</div>
	)
}

export const ProjectItem: React.FC<IProjectItem> = ({ name, id }) => {
	const navLinkStyles =
		'flex flex-row items-center p-2 gap-2 w-full h-full border-2 border-[#f0f1f4] rounded-md'
	const navLinkActiveStyles = 'bg-[#365eff] !border-[#365eff] !text-[#f0f1f4]'
	const isActive = (pathname: string, to: string) => pathname == to
	const [isOpen, setOpen] = React.useState(false)
	return (
		<div className='flex flex-row items-center justify-between gap-5 relative'>
			<CustomNavLink
				to={`/project/${id}`}
				isActive={isActive}
				styles={navLinkStyles}
				activeStyles={navLinkActiveStyles}
			>
				<>
					<div className='text-[13px] font-medium'>{name}</div>
					<div
						onClick={(e: React.MouseEvent<HTMLDivElement>) => {
							e.preventDefault()
							setTimeout(() => {
								setOpen(true)
							}, 50)
						}}
						className='absolute top-1/2 -translate-y-1/2 right-3 px-1 z-10'
					>
						<FaEllipsisVertical className='text-md' />
					</div>
				</>
			</CustomNavLink>
			{isOpen && <Popup isOpen={isOpen} setOpen={setOpen} id={id} />}
		</div>
	)
}
