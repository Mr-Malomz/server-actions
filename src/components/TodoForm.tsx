'use client';
import { Button } from './ui/Button';

export const TodoForm = () => {
	return (
		<form action=''>
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
