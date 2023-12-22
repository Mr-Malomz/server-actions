import { Nav } from '@/components/Nav';
import { TodoComp } from '@/components/TodoComp';
import { TodoForm } from '@/components/TodoForm';
import { xataClient } from '@/utils/xataClient';

const xata = xataClient();

export default async function Home() {
	const todos = await xata.db.Todo.getAll();

	return (
		<main className='min-h-screen w-full bg-[#fafafa]'>
			<Nav />
			<div className='w-full mt-6 flex justify-center'>
				<div className='w-full lg:w-1/2'>
					<TodoForm />
					<section className='border-t border-t-zinc-200 mt-6 px-2 py-4'>
						{todos.length < 1 ? (
							<p className='text-sm text-zinc-500 text-center'>
								No todo yet!
							</p>
						) : (
							todos.map((todo) => (
								<TodoComp todo={todo} key={todo.id} />
							))
						)}
					</section>
				</div>
			</div>
		</main>
	);
}
