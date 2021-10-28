const listContacts = require('./listContacts');

const getContactById = async contactId => {
    try {
        const contacts = await listContacts();
        const getContact = contacts.find(item => item.id === contactId);

        if (!getContact) {
            throw new Error(`Contact with id=${contactId} not found`);
        }
        console.table(getContact);
        return getContact;
    } catch (error) {
        throw error;
    }
};

module.exports = getContactById;
