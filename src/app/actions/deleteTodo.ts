'use server'

import { xataClient } from '@/utils/xataClient';
import { revalidatePath } from 'next/cache';

export const deleteTodo = async (formData: FormData) => {
    const xata = xataClient();
    const id = String(formData.get('id'));

    await xata.db.Todo.delete(id)

    revalidatePath('/');
}