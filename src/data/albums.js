import dragonPhoto from "./myAlbums/dragon";

const albumEntries = [{ slug: "little-dragon", source: dragonPhoto }];

const myAlbums = albumEntries.map((entry) => () => ({
	...entry.source(),
	slug: entry.slug,
}));

export const getAlbumBySlug = (slug) =>
	myAlbums.find((album) => album().slug === slug);

export default myAlbums;
