import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { verifyUserEmail } from '../redux/user/slice'
import { Alert, CircularProgress } from '@mui/material'

export const VerifyEmailPage: React.FC = () => {
	const { user } = useAppSelector((state) => state.user)
	const { emailToken } = useParams()
	const [isLoading, setLoading] = React.useState(false)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	console.log(emailToken, 'emailToken')

	React.useEffect(() => {
		;(async () => {
			await setTimeout(() => {}, 1000)
			if (user?.isVerified) {
				return navigate('/')
			} else {
				if (emailToken) {
					setLoading(true)

					const response = await dispatch(verifyUserEmail(emailToken))

					console.log(response)

					setLoading(false)
				}
			}
		})()
	}, [emailToken, user])

	return (
		<div className='flex items-center justify-center h-screen'>
			<div>
				{isLoading ? (
					<div className='flex items-center justify-center'>
						<CircularProgress />
					</div>
				) : (
					<div>
						{user?.isVerified ? (
							<Alert severity='success' className='mb-4'>
								Email successfully verified
							</Alert>
						) : (
							<Alert severity='error' className='mb-4'>
								Failed to verify email
							</Alert>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
