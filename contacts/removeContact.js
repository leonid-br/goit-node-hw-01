const fs = require('fs/promises');
const listContacts = require('./listContacts');
const contactsPath = require('../db/filePath');

const removeContact = async contactId => {
    try {
        const contacts = await listContacts();

        const idx = contacts.findIndex(item => item.id === contactId);
        if (idx === -1) {
            throw new Error(`Contact with id=${contactId} not found`);
        }

        newContacts = contacts.filter(item => item.id !== contactId);
        const contactsString = JSON.stringify(newContacts);

        await fs.writeFile(contactsPath, contactsString);
        console.table(contacts[idx]);
        return contacts[idx];
    } catch (error) {
        throw error;
    }
};

module.exports = removeContact;
