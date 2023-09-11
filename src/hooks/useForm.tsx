import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import * as yup from 'yup';
import _ from 'lodash';

// Define a type for the form values
type FormValues = {
  [key: string]: any;
};

// Define a type for the form errors
type FormErrors = {
  [key: string]: string;
};

// Define a type for the form validation schema
type ValidationSchema = yup.ObjectSchema<{
  [key: string]: string;
}> ;

const useForm = (
  initialValues: FormValues,
  validationSchema: ValidationSchema,
  onSubmit: (values: FormValues) => void
) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormValues>({});

  useEffect(() => {
    validationSchema.validate(values, { abortEarly: false })
      .then(() => {
        setErrors({});
      })
      .catch((validationErrors: yup.ValidationError) => {
        const newErrors: FormErrors = {};
        validationErrors.inner.forEach((error) => {
          const path = error.path as string; // Cast error.path to string
          _.set(newErrors, path, error.message);
        });
        setErrors(newErrors);
      });
  }, [values, validationSchema]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(_.mapValues(initialValues, () => true));

    if (_.isEmpty(errors)) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;