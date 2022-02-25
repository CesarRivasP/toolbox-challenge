import { useState } from 'react';
import { Keyboard } from 'react-native';

function useForm({
  initialState,
  validationRegex,
}) {
  const [form, setForm] = useState(() => initialState);
  const [errors, setErrors] = useState({});

  const handleChangeInput = (field, value) => {
    if (errors[field]) {
      let deleteErrors = errors;
      deleteErrors[field] = null;
      setErrors({ ...deleteErrors });
    }
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSetErrors = (field, errorMessage) => {
    setErrors((prev) => ({
      ...prev,
      [field]: errorMessage,
    }))
  };

  const handleChangeAllForm = (values) => setForm((prev) => ({ ...prev, ...values }));

  const handleValidateForm = () => {
    Keyboard.dismiss();
    const newErrors = {};
    let thereIsAnError = false;
    validationRegex.forEach((item) => {
      if (item.required && !form[item.field]) {
        thereIsAnError = true;
        newErrors[item.field] = 'This field is required';
      } else if (item.regex && !item.regex.test(form[item.field])) {
        thereIsAnError = true;
        newErrors[item.field] = item.regexErrorMessage;
      } else {
        newErrors[item.field] = null;
      }
    });
    setErrors(newErrors);
    return !thereIsAnError;
  };

  return {
    form,
    errors,
    handleChangeInput,
    handleChangeAllForm,
    handleValidateForm,
    handleSetErrors,
  };
}

export default useForm;
