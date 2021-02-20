import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/app.js'

describe('app', () => {

  it('loads the home page', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('homelink'));
    expect(screen.getByRole('document')).toHaveTextContent('Home Page!')
  })

  it('loads the list page using the classic router', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('classiclink'));
    const list = screen.getByLabelText('list');
    expect(list.children[0]).toHaveTextContent('water')
  })

  it('loads the list page using the render() router', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('renderlink'));
    const list = screen.getByLabelText('list');
    expect(list.children[0]).toHaveTextContent('water')
  })

})
