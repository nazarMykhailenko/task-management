import React from 'react'
import { useParams } from 'react-router-dom'

export const ProjectPage: React.FC = () => {
	const params = useParams()
	return <div>ProjectPage {params.id}</div>
}
