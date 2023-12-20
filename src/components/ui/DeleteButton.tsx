'use client';
import { Trash2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export const DeleteButton = () => {
	const { pending } = useFormStatus();
	return (
		<button className='flex items-center border py-1 px-2 rounded-lg hover:bg-red-300'>
			<Trash2 className='h-4 w-4' />
			<p className='ml-2 text-sm'>
				{pending ? 'Please wait..' : 'Delete'}
			</p>
		</button>
	);
};
