export class Token {
	token: string;
	expiration: Date;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
