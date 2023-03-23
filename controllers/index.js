const {
    getAll,
    getById,
    addContact,
    deleteContact,
    updateContact,
    updateStatusContact,
} = require('./contacts');

const {
    register,
    login,
    getCurrent,
    logout,
    updateAvatar,
    verifyEmail,
    resendVerifyEmail,
} = require('./auth');

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
    updateAvatar,
    verifyEmail,
    resendVerifyEmail,
};
