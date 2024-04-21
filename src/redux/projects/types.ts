import { Loading } from '../../@types/global'

export interface IProject {
	project_id: number
	project_name: string
}

export interface IProjectState {
	status: Loading
	projects: IProject[]
}
