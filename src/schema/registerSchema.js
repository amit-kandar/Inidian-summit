import * as Yup from 'yup';

const registerSchema = Yup.object({
  fullname: Yup.string().required('Full Name is required'),
  institution: Yup.string().required('Institution Name is required'),
  contact: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format 123-456-7890')
    .required('Phone number is required'),
  parentContact: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format 123-456-7890')
    .nullable(),
  age: Yup.number()
    .required('Age is required')
    .min(18, 'You must be at least 18 years old'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  committee1: Yup.string().required('Committee preference is required'),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
});

export default registerSchema;
