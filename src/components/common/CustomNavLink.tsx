import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

interface ICustomNavLink {
	to: string
	children: React.ReactElement
	isActive: (pathname: string, to: string) => boolean
	defaultClasses?: string
	activeClasses?: string
	styles?: string
	activeStyles?: string
}

export const CustomNavLink: React.FC<ICustomNavLink> = ({
	to,
	children,
	isActive,
	defaultClasses = '',
	activeClasses = '',
	styles = '',
	activeStyles = '',
}) => {
	const location = useLocation()
	const def = defaultClasses + styles
	const active = activeClasses + activeStyles

	return (
		<NavLink
			to={to}
			className={
				isActive(location.pathname, to) ? `${def} ${active}` : `${def}`
			}
		>
			{children}
		</NavLink>
	)
}
