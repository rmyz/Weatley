export class Token {
	id: string;
	token: string;
	expiration: Date;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
