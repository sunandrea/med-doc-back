const express = require("express");
const router = express.Router();
const { createValidator } = require("express-joi-validation");
const controllerWrapper = require("../../helpers/controllerWrapper");

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

router.get("/", controllerWrapper(getListContacts));

router.get("/:id", controllerWrapper(getContactById));

router.delete("/:id", controllerWrapper(removeContact));

router.post(
  "/",
  validator.body(contactAddSchema),
  controllerWrapper(addContact)
);

router.put(
  "/:id",
  validator.body(contactUpdateSchema),
  controllerWrapper(updateContactById)
);

module.exports = router;
