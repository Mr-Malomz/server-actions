import { Pencil } from 'lucide-react';
import Link from 'next/link';
import { DeleteButton } from './ui/DeleteButton';
import { deleteTodo } from '@/app/actions/deleteTodo';
import { TodoRecord } from '@/xata';

export const TodoComp = ({ todo }: { todo: TodoRecord }) => {
	return (
		<div className='flex border p-2 rounded-lg mb-2'>
			<div className='ml-4'>
				<header className='flex items-center mb-2'>
					<h5 className='font-medium'>Todo item {todo.id}</h5>
					<p className='mx-1 font-light'>|</p>
					<p className='text-sm'>
						{todo.xata.createdAt.toDateString()}
					</p>
				</header>
				<p className='text-sm text-zinc-500 mb-2'>{todo.description}</p>
				<div className='flex gap-4 items-center'>
					<Link
						href={todo.id}
						className='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'
					>
						<Pencil className='h-4 w-4' />
						<p className='ml-2 text-sm'>Edit</p>
					</Link>
					<form action={deleteTodo}>
						<input type='hidden' name='id' value={todo.id} />
						<DeleteButton />
					</form>
				</div>
			</div>
		</div>
	);
};
