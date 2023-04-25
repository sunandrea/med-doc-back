const updateExperienceInfo = async (req, res) => {
  const user = req.user;
  const userExperience = user.experience;

  let saveExperience = null;
  let saveExperienceIndex;

  if (user.role === "Patient") {
    return res.status(400).json({ message: "You are not a doctor" });
  }
  const newExperience = req.body;

  if (req.body.id) {
    saveExperience = userExperience.find((el, i) => {
      if (el._id.toString() === req.body.id.toString()) {
        saveExperienceIndex = i;
      }
      return el._id.toString() === req.body.id.toString();
    });
  }

  if (!saveExperience) {
    userExperience.push(newExperience);
  } else {
    saveExperience = {
      ...saveExperience,
      institution: newExperience.institution,
      description: newExperience.description,
      startDate: new Date(newExperience.startDate),
      endDate: new Date(newExperience.endDate),
    };
  }

  userExperience[saveExperienceIndex] = saveExperience;

  await user.save();

  res.status(200).json(userExperience);
};

module.exports = updateExperienceInfo;
