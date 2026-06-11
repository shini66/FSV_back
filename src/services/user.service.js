import { generateId } from "../utils/generateId.js";

let users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

const getServiceAllUsers = () => {
    return users;
};

const createServiceUser = (userData) => {
    const newUser = { id: generateId(users), ...userData };
    users.push(newUser);
    return newUser;
};

const getServiceUserById = (userId) => {
    return users.find(user => user.id === parseInt(userId));
};

const updateServiceUser = (userId, userData) => {
    const userIndex = users.findIndex(user => user.id === parseInt(userId));
    if (userIndex === -1) return null;
    users[userIndex] = { ...users[userIndex], ...userData };
    return users[userIndex];
};

const deleteServiceUser = (userId) => {
    const userIndex = users.findIndex(user => user.id === parseInt(userId));
    if (userIndex === -1) return null;
    const deletedUser = users.splice(userIndex, 1);
    return deletedUser[0];
};

export {
    getServiceAllUsers,
    createServiceUser,
    getServiceUserById,
    updateServiceUser,
    deleteServiceUser
};