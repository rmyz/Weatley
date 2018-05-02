export class FilterReport {
	id: string;
	description: string;
	date: Date;
	status: string;
	name: string;
	surname: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
