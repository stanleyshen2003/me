const baseUrl = import.meta.env.BASE_URL ?? "/";

export const withBase = (path) => {
	if (!path) {
		return baseUrl;
	}

	const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
	return `${baseUrl}${normalizedPath}`;
};

export default withBase;
