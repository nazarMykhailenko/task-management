import React from 'react'
// import { BsGraphUpArrow, BsGraphDownArrow } from 'react-icons/bs'
import { FaAngleDown } from 'react-icons/fa6'

interface IMemberItem {
	name: string
	onlineStatus: Date
	profilePic: string
}

export const MemberItem: React.FC<IMemberItem> = ({
	name,
	onlineStatus,
	profilePic,
}) => {
	function formatDate(date: Date): string {
		const now = new Date()
		const daysAgo = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)

		if (daysAgo < 1) {
			const hoursAgo = daysAgo * 24

			if (hoursAgo < 1) {
				const minutesAgo = hoursAgo * 60

				return (
					(Math.floor(minutesAgo) > 1 ? Math.floor(minutesAgo) : 1) + 'min ago'
				)
			}

			return Math.floor(hoursAgo) + 'h ago'
		} else if (daysAgo <= 7) {
			return Math.floor(daysAgo) + ' days ago'
		} else if (daysAgo <= 30) {
			return (
				~~(daysAgo / 7) + (~~(daysAgo / 7) === 1 ? ' week ago' : ' weeks ago')
			)
		} else if (daysAgo <= 180) {
			return (
				~~(daysAgo / 30) +
				(~~(daysAgo / 30) === 1 ? ' month ago' : ' months ago')
			)
		} else {
			return 'Long time ago'
		}
	}

	return (
		<div className='flex flex-row items-center gap-2 p-2 border-2 border-[#f0f1f4] justify-between'>
			<div className='flex flex-row items-center gap-3'>
				<div className='h-10 w-10 rounded-full overflow-hidden'>
					<img
						className='object-cover object-center'
						src={profilePic}
						alt='profile pic'
					/>
				</div>
				<div className='text-xs flex flex-col gap-1'>
					<div className='font-medium ma'>{name}</div>
					<div>Online - {formatDate(onlineStatus)}</div>
				</div>
			</div>
			<div className='cursor-pointer p-2'>
				<FaAngleDown />
			</div>
		</div>
	)
}
