import React from 'react'

interface IButton {
	children: string
}

export const Button: React.FC<IButton> = ({ children }) => {
	return (
		<div className='flex justify-center items-center w-full px-4 py-2 border-2 border-dashed border-[#365eff] text-[#365eff] text-sm rounded-md cursor-pointer'>
			{children}
		</div>
	)
}
