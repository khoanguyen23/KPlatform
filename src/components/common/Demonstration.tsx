"use client"
import { cn } from '@/lib/utils'
import {useState} from 'react'


export const Demonstration = () => {
	const [tapped, setTapped] = useState(false)

	return (
		<button
			type="button"
			className={cn(
				'shadow-lg rounded p-4 text-center transition duration-300',
				{
					'bg-teal-200 text-teal-900': tapped,
					'bg-purple-600 text-purple-100': !tapped,
				},
			)}
			onClick={() => setTapped(!tapped)}
		>
			🤜 Tap this React Component 🤛
		</button>
	)
}
