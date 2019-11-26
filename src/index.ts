export function genID() {
	let options: { [index: string]: Function } = {
		'0': () => {
			return ['b', 'n', 'z'][Math.round(Math.random() * 2)]
		},
		'1': () => {
			return ['c', 'p', '0'][Math.round(Math.random() * 2)]
		},
		'2': () => {
			return ['d', 'q', '1'][Math.round(Math.random() * 2)]
		},
		'3': () => {
			return ['f', 'r', '3'][Math.round(Math.random() * 2)]
		},
		'4': () => {
			return ['g', 's', '4'][Math.round(Math.random() * 2)]
		},
		'5': () => {
			return ['h', 't', '5'][Math.round(Math.random() * 2)]
		},
		'6': () => {
			return ['j', 'v', '6'][Math.round(Math.random() * 2)]
		},
		'7': () => {
			return ['k', 'w', '7'][Math.round(Math.random() * 2)]
		},
		'8': () => {
			return ['l', 'x', '8'][Math.round(Math.random() * 2)]
		},
		'9': () => {
			return ['m', 'y', '9'][Math.round(Math.random() * 2)]
		},
	}

	let value = new Date().getTime().toString(10)
	let id = ''

	for (let char of value) {
		Math.round(Math.random()) === 0 ? (id += options[char]().toUpperCase()) : (id += options[char]())
	}

	return id
		.split('')
		.reverse()
		.join('')
}

function main() {
	let passwordArray: string[] = []

	const startDate: number = Number(new Date())
	for (let i = 0; i < 25_000; i++) {
		const password = genID()
		if (passwordArray.indexOf(password) !== -1) {
			console.log('Password Duplicated')
		}
		passwordArray.push(password)
	}
	console.log(`${(Number(new Date()) - startDate) / 1000} seconds`)
}

main()
