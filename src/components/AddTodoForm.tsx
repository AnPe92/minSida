import { useState, FormEvent } from 'react';

interface Todo {
    title: string;
    description: string;
    status: string;
    priority: number;
}

export const AddTodoForm = () => {
    const [todo, setTodo] = useState<Todo>({
        title: '',
        description: '',
        status: '',
        priority: 1,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: name === 'priority' ? parseInt(value, 10) : value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/addTodo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });

            if (!response.ok) {
                throw new Error('Failed to create todo');
            }

            alert('Todo created successfully');
            setTodo({
                title: '',
                description: '',
                status: '',
                priority: 1,
            });
        } catch (error) {
            console.error(error);
            alert('An error occurred while creating the todo');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={todo.title}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Description:
                <textarea
                    name="description"
                    value={todo.description}
                    onChange={handleChange}
                />
            </label>
            <label>
                Status:
                <input
                    type="text"
                    name="status"
                    value={todo.status}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Priority:
                <input
                    type="number"
                    min="1"
                    max="5"
                    name="priority"
                    value={todo.priority}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Add Todo</button>
        </form>
    );
};