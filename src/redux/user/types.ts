import { Loading } from '../../@types/global'

export interface IUser {
	user_id: number
	user_name: string
	email: string
	password: string
	isVerified: 1 | 0
	emailToken: string | null
	user_image?: string
}

export interface ILogInDetails {
	email: string
	password: string
}

export interface IUserState {
	status: Loading
	user: IUser | null
}
