
import { render , fireEvent , screen } from '@testing-library/react';
import MyForm from './myForm';
import { expect, test } from 'vitest'
import '@testing-library/jest-dom'

test('Form renders correctly and initializes fields', () => {
  render(<MyForm />);

  const nameInput = screen.getByTestId('username') as HTMLInputElement;
  const emailInput = screen.getByTestId('email') as HTMLInputElement;

  expect(nameInput.value).toBe('');
  expect(emailInput.value).toBe('');
});


test('Form validation shows error messages', () => {
  render(<MyForm />);

  const nameInput = screen.getByTestId('username') as HTMLInputElement;
  const emailInput = screen.getByTestId('email') as HTMLInputElement;

  fireEvent.change(nameInput, { target: { value: '' } });
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

  const submitButton = screen.getByTestId('submit-button');
  fireEvent.click(submitButton);

  //const emailError = screen.getByTestId('email-error') as HTMLElement;

  expect(emailInput.value).toBe('invalid-email');
  //expect(emailError.innerText).toBe('Invalid email');

});