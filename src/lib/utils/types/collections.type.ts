export enum COLLECTIONS {
	'USERS' = 'users',
	'BLOGS' = 'blogs',
	'TODOS' = 'todos'
}

export enum TodoStatus {
	'OPEN',
	'CLOSED',
	'PENDING'
}

export type Todo = {
	userId: string;
	title: string;
	task: string;
	status: TodoStatus;
	id: string;
};
