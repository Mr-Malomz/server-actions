'use client';
import { Button } from './ui/Button';

export const TodoForm = () => {
	return (
		<form action=''>
			<textarea
				name='content'
				cols={30}
				rows={2}
				className='w-full border rounded-lg mb-2 p-4'
				placeholder='What is happening'
			/>
			<div className='flex justify-end'>
				<div>
					<Button title='Post' />
				</div>
			</div>
		</form>
	);
};
