import { EditTodoForm } from '@/components/EditTodoForm';
import { xataClient } from '@/utils/xataClient';
import { X } from 'lucide-react';
import Link from 'next/link';

const xata = xataClient();

export default async function Page({ params }: { params: { edit: string } }) {
	const todo = await xata.db.Todo.read(params.edit);

	return (
		<div className={`relative z-10 open-nav `}>
			<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
					<div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
						<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
							<Link href='/' className='flex justify-end mb-2'>
								<X className='cursor-pointer' />
							</Link>
							<EditTodoForm todo={todo!} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
