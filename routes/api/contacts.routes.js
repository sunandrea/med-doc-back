const express = require("express");
const router = express.Router();
const { createValidator } = require("express-joi-validation");

const {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
} = require("../../controllers/contacts.controller");

const {
  contactAddSchema,
  contactUpdateSchema,
} = require("../../schemas/contacts.schema");

const validator = createValidator();

router.get("/", getListContacts);

router.get("/:id", getContactById);

router.delete("/:id", removeContact);

router.post("/", validator.body(contactAddSchema), addContact);

router.put("/:id", validator.body(contactUpdateSchema), updateContactById);

module.exports = router;
