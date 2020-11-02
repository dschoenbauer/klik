export class Bem{
	constructor(prefix){
		this.prefix = prefix;
	}

	get(suffix){
		return {className: `${this.prefix}__${suffix}`};
	}
}