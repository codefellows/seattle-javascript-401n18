import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from './App';

const server = setupServer(
  rest.get('http://foobar.com', (req, res, ctx) => {
    let data = {
      count: 1,
      results: [
        { text:'testing' }
      ]
    }
    return res(ctx.json(data))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText("Search Stuff");
  expect(titleElement).toBeInTheDocument();
});

test('can fetch data', async () => {
  render(<App />);
  const form = screen.getByTestId('apiform');
  const urlField = screen.getByTestId('url');
  const getRadio = screen.getByTestId('get');
  // e.target.name ,,, e.target.value

  fireEvent.change(urlField, {target: {name:'url', value:'http://foobar.com'} } );
  fireEvent.click(getRadio, {target: {name:'method', value:'get'} } );
  fireEvent.submit(form);

  await waitFor( () => {
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(1)
  })

})
