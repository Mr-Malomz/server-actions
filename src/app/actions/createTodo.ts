'use server'

import { FormResponseType } from '@/utils/types';
import { revalidatePath } from 'next/cache';
import { xataClient } from '@/utils/xataClient';

export const createTodo = async (_: FormResponseType, formData: FormData): Promise<FormResponseType> => {
    const xata = xataClient();
    const description = String(formData.get('description'));

    const response = await xata.db.Todo.create({ description })

    if (response.description) {
        revalidatePath('/');
        return {
            type: 'success',
            message: 'Todo created successfully!',
        };
    } else {
        return {
            type: 'error',
            message: 'Error creating todo!',
        };
    }
}