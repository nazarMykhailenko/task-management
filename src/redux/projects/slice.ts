import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosHeaders } from 'axios'
import { Loading } from '../../@types/global'
import { IProject, IProjectState } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

export const getProjects = createAsyncThunk(
	'projects/getProjects',
	async () => {
		try {
			const headers = new AxiosHeaders({ 'Content-Type': 'application/json' })
			const response = await axios.get<IProject[]>(
				'http://localhost:3000/projects',
				{
					headers,
				}
			)
			return response.data
		} catch (err) {
			throw new Error(`Failed to get projects: ${err}`)
		}
	}
)

const initialState: IProjectState = {
	status: Loading.LOADING,
	projects: [],
}

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// get destinations
		builder.addCase(getProjects.pending, (state, _) => {
			state.status = Loading.LOADING
			state.projects = []
		})
		builder.addCase(
			getProjects.fulfilled,
			(state, action: PayloadAction<IProject[]>) => {
				state.status = Loading.SUCCESS
				state.projects = action.payload
			}
		)
		builder.addCase(getProjects.rejected, (state, _) => {
			state.status = Loading.ERROR
			state.projects = []
		})
	},
})

export const {} = projectSlice.actions

export default projectSlice.reducer
