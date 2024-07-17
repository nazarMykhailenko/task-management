import React from 'react'

interface IButton {
	children: string
	dashed?: boolean
	filled?: boolean
	big?: boolean
	solid?: boolean
	border?: boolean
	otherStyles?: string
	onClick?: (...args: any[]) => void
}

export const Button: React.FC<IButton> = ({
	children,
	border,
	dashed,
	filled,
	big,
	solid,
	otherStyles,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={`flex justify-center items-center w-full px-4 py-2 text-[#365eff] text-sm rounded-md cursor-pointer ${
				border ? 'border-2 border-[#365eff]' : ''
			} ${dashed ? 'border-dashed' : ''} ${solid ? 'border-solid' : ''} ${
				filled ? 'bg-[#365eff] text-white' : ''
			} ${big ? 'py-3 text-base' : ''} ${solid ? '' : ''} ${
				otherStyles ? otherStyles : ''
			}`}
		>
			{children}
		</button>
	)
}
