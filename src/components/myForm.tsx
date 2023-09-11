
import useForm from '../hooks/useForm'; 
import ValidationSchema from '../validation/formValidation';

const MyForm: React.FC = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useForm(
    {
      name: '',
      email: '',
      password : '',
    },
    ValidationSchema,
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