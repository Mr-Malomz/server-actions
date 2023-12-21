'use server'

import { revalidatePath } from 'next/cache';

export const createTodo = async (formData: FormData) => {
    const description = String(formData.get('description'));
}