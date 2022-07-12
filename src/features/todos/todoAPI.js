export function fetchTodo(text = '') {
	return new Promise((resolve) =>
		setTimeout(() => resolve({ data: text }), 1000)
	);
}
