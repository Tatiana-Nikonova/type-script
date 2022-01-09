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
		return this._items.reduce((a: number, b: Buyable) => a + b.price, 0);
	}

	getAllPriceWithDiscont(discont: number): number {
		return (1 - discont / 100) * this._items.reduce((a: number, b: Buyable) => a + b.price, 0);
	}

	delete(id: number): Buyable[] {
		const items: Buyable[] = this.items;
		return items.filter((item: Buyable) => item.id !== id);
	}
}