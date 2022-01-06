import Cart from '../service/Cart';
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('card with Movies', () => {
  const cart = new Cart();
  const id = 10;
  let name = "Просто кино";
  const price  = 100;
  const year = '1999';
  const country = 'USA';
  const genre = 'horor';
  const duration = '1:55';
  const movie = new Movie(id, name, price, year, country, genre, duration);
  name = 'newMovie';
  const newMovie = new Movie(id, name, price, year, country, genre, duration);
  cart.add(movie);
  cart.add(newMovie);
  expect(cart.items.length).toBe(2);
  expect(cart.items).toEqual([movie, newMovie]);
});

test('getAllPrice(), getAllPriceWithDiscont(discount), delete(id)', () => {
  const cart = new Cart();
  let id = 10;
  let name = "Просто кино";
  const price  = 128;
  const year = '1999';
  const country = 'USA';
  const genre = 'horor';
  const duration = '1:55';
  const movie = new Movie(id, name, price, year, country, genre, duration);
  name = 'newMovie';
  id = 89;
  const newMovie = new Movie(id, name, price, year, country, genre, duration);
  cart.add(movie);
  cart.add(newMovie);
  const discount = 5;
  const expected = 256;
  expect(cart.getAllPrice()).toBe(expected);
  expect(cart.getAllPriceWithDiscont(discount)).toBe(expected * 0.95);
  expect(cart.delete(id)).toBe(true);
  expect(cart.delete(id)).toBe(false);
});

