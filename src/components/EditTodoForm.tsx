'use client';
import { Button } from './ui/Button';


export const EditTodoForm = () => {
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
			<input type='hidden' name='id' value='' />
			<div className='flex justify-end'>
				<div>
					<Button title='Update' />
				</div>
			</div>
		</form>
	);
};
