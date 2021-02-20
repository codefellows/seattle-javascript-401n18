import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../components/main.js'

// Option 1:
// This group of function sets up a jest Spy, so we can "watch" for when the handler
// is called and make our test 'await' that.
// function pokemonHandler(req, res, ctx) {
//   let output = {
//     results: [
//       { name: 'foo' },
//       { name: 'bar' }
//     ]
//   }
//   return res(ctx.json(output))
// }

// Jest watcher, so we can await if this has been called ...
// const simulatePokemon = jest.fn(pokemonHandler);

// // Actual mock server server
// const server = setupServer(
//   rest.get('*', simulatePokemon)
// )

// Option 2
const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        { name: 'foo' },
        { name: 'bar' }
      ]
    }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays names', async () => {
  render(<App />);

  // Option 1:
  // Using a jest spy
  // await waitFor(() => expect(simulatePokemon).toHaveBeenCalledTimes(1))
  // let items = screen.getAllByRole('listitem')

  // Option 2:
  // Awaiting the output to change after the API call was made
  let items = await waitFor(() => screen.getAllByRole('listitem'))

  // The actual assertion is the same for both options
  expect(items[0]).toHaveTextContent('foo')
})
