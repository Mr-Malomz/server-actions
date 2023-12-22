'use client';
import { Button } from './ui/Button';
import { useFormState } from 'react-dom';
import { updateTodo } from '@/app/actions/updateTodo';
import { TodoRecord } from '@/xata';

export const EditTodoForm = ({ todo }: { todo: TodoRecord }) => {
	const [formState, action] = useFormState(updateTodo, { type: 'initial' });
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
				defaultValue={todo.description!}
			/>
			<input type='hidden' name='id' value={todo.id} />
			<div className='flex justify-end'>
				<div>
					<Button title='Update' />
				</div>
			</div>
		</form>
	);
};
