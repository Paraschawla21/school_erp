export const updateFormData = (formData) => ({
  type: "UPDATE_FORM_DATA",
  payload: formData,
});

export const submitFormData = () => ({
  type: "SUBMIT_FORM_DATA",
});
