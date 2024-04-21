export function toTitleCase(string: string): string {
	const words = string.split('_')
	for (let i = 0; i < words.length; i++) {
		words[i] =
			words[i][0].toUpperCase() + words[i].substring(1).toLocaleLowerCase()
	}

	return words.join(' ')
}
