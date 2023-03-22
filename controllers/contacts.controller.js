const {
  getListContacts: modelGetListContacts,
  getContactById: modelGetContactById,
  removeContact: modelRemoveContact,
  addContact: modelAddContact,
  updateContactById: modelUpdateContactById,
} = require("../models/contacts/contacts");

const getListContacts = async (req, res, next) => {
  const contacts = await modelGetListContacts();
  res.json(contacts);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await modelGetContactById(id);
  if (!contact) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(contact);
};

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const contacts = await modelGetListContacts();
  const contactIndex = contacts.findIndex((contact) => contact.id === id);
  if (contactIndex === -1) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  await modelRemoveContact(id);
  res.status(200).json({ message: "Contact deleted" });
};

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({ message: "missing required name field" });
    return;
  }
  const contacts = await modelAddContact(name, email, phone);
  res.status(201).json(contacts);
};

const updateContactById = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }

  const contact = await modelUpdateContactById(id, name, email, phone);
  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(contact);
};

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
};
