export function isObjectEmpty(obj: Record<string, any>): boolean {
	for (const prop in obj) {
		if (Object.hasOwn(obj, prop)) {
			return false
		}
	}

	return true
}
