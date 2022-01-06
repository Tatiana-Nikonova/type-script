import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getAllPrice(): number {
    return this._items.reduce((a, b) => a + b.price, 0);
  }

  getAllPriceWithDiscont(discont: number): number {
    return (1 - discont / 100) * this._items.reduce((a, b) => a + b.price, 0);
  }

  delete(id: number): boolean {
    const size = this._items.length;
    const index = this._items.findIndex(item => item.id === id);
    if (index < 0) return false;
    this._items.splice(index, 1);
    return size - 1 === this._items.length;
  }
}
