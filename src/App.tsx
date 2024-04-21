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
import { LogOutPage } from './pages/LogOutPage'
import { LogInPage } from './pages/LogInPage'
import { SignUpPage } from './pages/SignUpPage'
import { VerifyEmailPage } from './pages/VerifyEmailPage'
import { WaitingToVerifyPage } from './pages/WaitingToVerifyPage'
import { SettingsPage } from './pages/SettingsPage'

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
			<Route path='/log-out' element={<LogOutPage />} />
			<Route path='/log-in' element={<LogInPage />} />
			<Route path='/sign-up' element={<SignUpPage />} />
			<Route path='/verify-email/:emailToken' element={<VerifyEmailPage />} />
			<Route path='/waiting-to-verify' element={<WaitingToVerifyPage />} />
			<Route path='/settings' element={<SettingsPage />} />
		</Routes>
	)
}
