const { program } = require('commander');

const contactsOperation = require('./contacts');

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            contactsOperation.listContacts();
            break;

        case 'get':
            contactsOperation.getContactById(Number(id));
            break;

        case 'add':
            contactsOperation.addContact(name, email, phone);
            break;

        case 'remove':
            contactsOperation.removeContact(Number(id));
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);

// (async () => {
//     try {
//         const contacts = await contactsOperation.listContacts();
//         console.log('contacts', contacts);

//         const contactId = 7;
//         const contact = await contactsOperation.getContactById(contactId);
//         console.log('contact', contact);

//         const removeContact = await contactsOperation.removeContact(contactId);

//         const name = 'your name';
//         const email = 'your email';
//         const phone = 'your phone number';
//         const addContact = await contactsOperation.addContact(
//             name,
//             email,
//             phone,
//         );
//     } catch (error) {
//         console.log(error.message);
//     }
// })();
