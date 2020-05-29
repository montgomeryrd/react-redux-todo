export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    };
};

export const deleteTask = (taskID) => {
    return {
        type: 'DELETE_TASK',
        payload: taskID
    };
};