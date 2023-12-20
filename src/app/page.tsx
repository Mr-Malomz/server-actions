import { Nav } from '@/components/Nav';
import { TodoComp } from '@/components/TodoComp';
import { TodoForm } from '@/components/TodoForm';

export default function Home() {
	return (
		<main className='min-h-screen w-full bg-[#fafafa]'>
			<Nav />
			<div className='w-full mt-6 flex justify-center'>
				<div className='w-full lg:w-1/2'>
					<TodoForm />
					<section className='border-t border-t-zinc-200 mt-6 px-2 py-4'>
						<TodoComp />
					</section>
				</div>
			</div>
		</main>
	);
}
