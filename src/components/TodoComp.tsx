import { Pencil } from 'lucide-react';
import Link from 'next/link';
import { DeleteButton } from './ui/DeleteButton';

export const TodoComp = () => {
	return (
		<div className='flex border p-2 rounded-lg mb-2'>
			{/* <div className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-700 text-sm font-medium text-white flex-shrink-0'>
				1
			</div> */}
			<div className='ml-4'>
				<header className='flex items-center mb-2'>
					<h5 className='font-medium'>Todo item 1</h5>
					<p className='mx-1 font-light'>|</p>
					<p className='text-sm'>2023-11-13</p>
				</header>
				<p className='text-sm text-zinc-500 mb-2'>
					Sample todo item
				</p>
				<div className='flex gap-4 items-center'>
					<Link
						href='123'
						className='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'
					>
						<Pencil className='h-4 w-4' />
						<p className='ml-2 text-sm'>Edit</p>
					</Link>
					<form action=''>
						<input type='hidden' name='id' value='' />
						<DeleteButton />
					</form>
				</div>
			</div>
		</div>
	);
};
