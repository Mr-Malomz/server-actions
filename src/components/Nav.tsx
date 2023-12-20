export const Nav = () => {
	return (
		<nav className='flex justify-between items-center w-full border border-b-zinc-200 px-8 py-4'>
			<h3 className='text-base lg:text-lg font-medium'>
				Next.js Server Actions
			</h3>
			<button className='border py-1 px-4 rounded-lg hover:bg-zinc-200'>
				Sign out
			</button>
		</nav>
	);
};
