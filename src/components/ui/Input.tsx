import { FC } from 'react';

type InputType = {
	type: string;
	placeholder: string;
	name: string;
};

export const Input: FC<InputType> = ({ type, name, placeholder }) => {
	return (
		<input
			type={type}
			className='w-full border h-10 rounded-lg border-zinc-300 p-4'
			placeholder={placeholder}
			name={name}
			required
		/>
	);
};
