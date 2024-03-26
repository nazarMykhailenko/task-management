import React from 'react'
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'

export const Header: React.FC = () => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const [value, setValue] = React.useState('')

	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const focusInput = () => {
		const input = inputRef.current
		if (input) {
			input.focus()
		}
	}

	return (
		<div className='border-b-2 border-[#f0f1f4] p-6 flex items-center justify-between'>
			<div>
				<div className='relative'>
					<input
						className='bg-[#f7f7f7] pl-12 pr-4 py-2 rounded-md text-sm outline-none min-w-64'
						type='text'
						placeholder='Search'
						ref={inputRef}
						value={value}
						onChange={changeValue}
					/>

					<AiOutlineSearch
						onClick={focusInput}
						className='text-[#acacac] text-2xl absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer'
					/>
				</div>
			</div>

			<div className='flex items-center gap-5'>
				<div className='text-2xl text-[#acacac] cursor-pointer'>
					<AiOutlineSetting />
				</div>

				<div className='text-2xl text-[#acacac] cursor-pointer relative'>
					<IoIosNotificationsOutline />
					<span className='absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full'></span>
				</div>

				<div>
					<div className='flex items-center gap-2'>
						<div className='h-10 w-10 rounded-full overflow-hidden cursor-pointer'>
							<img
								className='object-cover object-center'
								src='../../public/assets/img/dhaya-eddine-bentaleb-6ZLrCWI3Ink-unsplash.jpg'
								alt='profile pic'
							/>
						</div>

						<div>Allison Hoper</div>
					</div>
				</div>
			</div>
		</div>
	)
}
