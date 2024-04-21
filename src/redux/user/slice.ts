import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosHeaders } from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Loading } from '../../@types/global'
import { IUser, IUserState, ILogInDetails } from './types'

export const signUpUser = createAsyncThunk(
	'user/signUpUser',
	async (userInfo: IUser) => {
		try {
			const body = JSON.stringify(userInfo)
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.post<IUser>(
				'http://localhost:3000/auth/sign_up',
				body,
				{ headers }
			)
			return response.data
		} catch (err) {
			throw new Error(`(F) Failed to sign up user: ${err}`)
		}
	}
)

export const logInUser = createAsyncThunk(
	'user/logInUser',
	async (userInfo: ILogInDetails) => {
		try {
			const body = JSON.stringify(userInfo)
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.post<IUser>(
				'http://localhost:3000/auth/login',
				body,
				{ headers }
			)
			return response.data
		} catch (err) {
			throw new Error(`(F) Failed to log in: ${err}`)
		}
	}
)

export const fetchUpdatedUser = createAsyncThunk(
	'user/fetchUpdatedUser',
	async (user: IUser) => {
		try {
			const body = JSON.stringify(user)
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.patch<IUser>(
				`http://localhost:3000/auth/${user.user_id}`,
				body,
				{
					headers,
				}
			)
			return response.data
		} catch (err) {
			throw new Error(`(F) Failed to update: ${err}`)
		}
	}
)

export const verifyUserEmail = createAsyncThunk(
	'user/verifyUserEmail',
	async (emailToken: string) => {
		try {
			const body = JSON.stringify({ emailToken })
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.post<IUser>(
				'http://localhost:3000/auth/verify_email',
				body,
				{ headers }
			)
			return response.data
		} catch (err) {
			throw new Error(`(F) Failed to verify email: ${err}`)
		}
	}
)

const initialState: IUserState = {
	status: Loading.LOADING,
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logOut(state) {
			state.user = null
			state.status = Loading.LOADING
		},
		updateUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		},
	},
	extraReducers: (builder) => {
		// signUp
		builder.addCase(signUpUser.pending, (state) => {
			state.status = Loading.LOADING
			state.user = null
		})
		builder.addCase(
			signUpUser.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.status = Loading.SUCCESS
				state.user = action.payload
			}
		)
		builder.addCase(signUpUser.rejected, (state) => {
			state.status = Loading.ERROR
			state.user = null
		})

		// login
		builder.addCase(logInUser.pending, (state) => {
			state.status = Loading.LOADING
			state.user = null
		})
		builder.addCase(
			logInUser.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.status = Loading.SUCCESS
				state.user = action.payload
			}
		)
		builder.addCase(logInUser.rejected, (state) => {
			state.status = Loading.ERROR
			state.user = null
		})

		// update
		builder.addCase(fetchUpdatedUser.pending, (state) => {
			state.status = Loading.LOADING
			state.user = null
		})
		builder.addCase(
			fetchUpdatedUser.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.status = Loading.SUCCESS
				state.user = action.payload
			}
		)
		builder.addCase(fetchUpdatedUser.rejected, (state) => {
			state.status = Loading.ERROR
			state.user = null
		})

		// verify email
		builder.addCase(verifyUserEmail.pending, (state) => {
			state.status = Loading.LOADING
			state.user = null
		})
		builder.addCase(
			verifyUserEmail.fulfilled,
			(state, action: PayloadAction<IUser>) => {
				state.status = Loading.SUCCESS
				state.user = action.payload
			}
		)
		builder.addCase(verifyUserEmail.rejected, (state) => {
			state.status = Loading.ERROR
			state.user = null
		})
	},
})

// Action creators are generated for each case reducer function
export const { logOut, updateUser } = userSlice.actions

export default userSlice.reducer
