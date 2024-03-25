import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomeLayout } from './layouts/HomeLayout'
import {
	HomePage,
	ProjectPage,
	CalendarPage,
	ChatPage,
	StatisticsPage,
} from './pages'
import './App.scss'

export const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeLayout />}>
				<Route path='/' element={<HomePage />}>
					<Route index path='/project/:id' element={<ProjectPage />} />
				</Route>
				<Route path='/statistics' element={<StatisticsPage />} />
				<Route path='/calendar' element={<CalendarPage />} />
				<Route path='/chat' element={<ChatPage />} />
			</Route>
		</Routes>
	)
}
