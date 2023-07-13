import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/booking-form/BookingForm';

test('Check for heading Element text', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
});
