import { db } from '$lib/firebase';
import { COLLECTIONS, type Todo } from '$lib/utils/types/collections.type';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore/lite';

export const todoDoc = (todoId: string) => doc(db, COLLECTIONS.TODOS, todoId);

export async function addTodo(todo: Todo, userId: string) {
	try {
		return await setDoc(doc(db, COLLECTIONS.TODOS, userId), todo);
	} catch (error) {
		return error;
	}
}

export async function getTodos(userId: string): Promise<Todo[]> {
	if (userId === '') {
		return [];
	}
	try {
		const snapshot = await getDocs(collection(db, COLLECTIONS.TODOS + `/${userId}`));

		return snapshot.docs.map((doc) => {
			let data: Todo = doc.data() as Todo;
			data.id = doc.id;
			return data;
		});
	} catch (error) {
		return [];
	}
}
