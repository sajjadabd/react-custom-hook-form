import * as yup from 'yup';
import useForm from '../hooks/useForm'; 

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});


const MyForm: React.FC = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useForm(
    {
      name: '',
      email: '',
      password : '',
    },
    validationSchema,
    (values) => {
      // Handle form submission here
      console.log('Form submitted with values:', values);
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="name"
        />
        {touched.name && errors.name && <div data-testid="name-error">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="email"
        />
        {touched.email && errors.email && <div data-testid="email-error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type="password" // Use 'password' type for password input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="password"
        />
        {touched.password && errors.password && <div>{errors.password}</div>}
      </div>
      {/* Add more form fields */}
      <button 
      type="submit"
      data-testid="submit-button"
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;