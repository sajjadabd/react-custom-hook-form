
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
    <form 
    className="form"
    onSubmit={handleSubmit}
    >
      <div className="formField">
        <label className="label" htmlFor='name'>Name</label>
        <input
          type="text"
          name="name"
          placeholder='Name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="name"
          className="input"
        />
        {touched.name && errors.name && <div className="error" data-testid="name-error">{errors.name}</div>}
      </div>
      <div className="formField">
        <label className="label" htmlFor='email'>Email</label>
        <input
          type="text"
          name="email"
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="email"
          className="input"
        />
        {touched.email && errors.email && <div className="error" data-testid="email-error">{errors.email}</div>}
      </div>
      <div className="formField">
        <label className="label" htmlFor='password'>Password</label>
        <input
          type="password" // Use 'password' type for password input
          name="password"
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="password"
          className="input"
        />
        {touched.password && errors.password && <div className="error" >{errors.password}</div>}
      </div>
      {/* Add more form fields */}
      <button 
      type="submit"
      data-testid="submit-button"
      className="button"
      >
        Submit
      </button>

    </form>
  );
};

export default MyForm;