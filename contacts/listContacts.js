const fs = require('fs/promises');
const contactsPath = require('../db/filePath');

const listContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        console.table(contacts);
        return contacts;
    } catch (error) {
        throw error;
    }
};

module.exports = listContacts;
