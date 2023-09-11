
import useForm from '../hooks/useForm'; 
import ValidationSchema from '../validation/formValidation';

const MyForm: React.FC = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useForm(
    {
      username: '',
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
        {/* <label className="label" htmlFor='name'>Name</label> */}
        <input
          type="text"
          name="username"
          placeholder='username'
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="username"
          className="input"
          autoComplete="off"
        />
        {touched.username && errors.username && <div className="error" data-testid="username-error">{errors.username}</div>}
      </div>
      <div className="formField">
        {/* <label className="label" htmlFor='email'>Email</label> */}
        <input
          type="text"
          name="email"
          placeholder='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="email"
          className="input"
          autoComplete="off"
        />
        {touched.email && errors.email && <div className="error" data-testid="email-error">{errors.email}</div>}
      </div>
      <div className="formField">
        {/* <label className="label" htmlFor='password'>Password</label> */}
        <input
          type="password" // Use 'password' type for password input
          name="password"
          placeholder='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="password"
          className="input"
          autoComplete="off"
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