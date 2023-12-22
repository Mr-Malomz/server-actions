'use client';
import { useFormState } from 'react-dom';
import { Button } from './ui/Button';
import { createTodo } from '@/app/actions/createTodo';

export const TodoForm = () => {
	const [formState, action] = useFormState(createTodo, { type: 'initial' });
	return (
		<form action={action}>
			{formState.type === 'error' && (
				<p className='mb-6 text-center text-red-600'>
					{formState.message}
				</p>
			)}
			<textarea
				name='description'
				cols={30}
				rows={2}
				className='w-full border rounded-lg mb-2 p-4'
				placeholder='Input todo details'
				required
			/>
			<div className='flex justify-end'>
				<div>
					<Button title='Create' />
				</div>
			</div>
		</form>
	);
};
