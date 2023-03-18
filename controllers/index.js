const {
    getAll,
    getById,
    addContact,
    deleteContact,
    updateContact,
    updateStatusContact,
} = require('./contacts');

const { register, login, getCurrent, logout } = require('./auth');

module.exports = {
    getAll,
    getById,
    addContact,
    deleteContact,
    updateContact,
    updateStatusContact,
    register,
    login,
    getCurrent,
    logout,
};
