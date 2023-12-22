'use server'

import { FormResponseType } from '@/utils/types';
import { xataClient } from '@/utils/xataClient';
import { redirect } from 'next/navigation';

export const updateTodo = async (_: FormResponseType, formData: FormData): Promise<FormResponseType> => {
    const xata = xataClient();
    const description = String(formData.get('description'));
    const id = String(formData.get('id'));

    const response = await xata.db.Todo.update(id, { description })

    console.log(response);


    if (response?.description) {
        redirect('/');
        return {
            type: 'success',
            message: 'Todo deleted successfully!',
        };
    } else {
        return {
            type: 'error',
            message: 'Error updating todo!',
        };
    }
}