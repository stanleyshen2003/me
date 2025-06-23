
function dragonPhoto() {
	const basedir = process.env.PUBLIC_URL || "/me";

	const allphotos = [
		{
			src: `${basedir}/album/dragon/1706450155848.jpg`,
			width: 960,
			height: 1705
		},
		{
			src: `${basedir}/album/dragon/1706450161455.jpg`,
			width: 960,
			height: 1705
		},
		{
			src: `${basedir}/album/dragon/1706450164291.jpg`,
			width: 960,
			height: 1705
		},
		{
			src: `${basedir}/album/dragon/1706525223285.jpg`,
			width: 960,
			height: 1706
		},
		{
			src: `${basedir}/album/dragon/1706607663669.jpg`,
			width: 960,
			height: 1706
		},
		{
			src: `${basedir}/album/dragon/1706623473906.jpg`,
			width: 960,
			height: 1705
		},
		{
			src: `${basedir}/album/dragon/1706691774378.jpg`,
			width: 960,
			height: 1706
		},
		{
			src: `${basedir}/album/dragon/1706710749866.jpg`,
			width: 960,
			height: 1705
		},
		{
			src: `${basedir}/album/dragon/1706805498888.jpg`,
			width: 1108,
			height: 1477
		},
		{
			src: `${basedir}/album/dragon/1706867459332.jpg`,
			width: 960,
			height: 1705
		},
		{
			src: `${basedir}/album/dragon/1706867462644.jpg`,
			width: 960,
			height: 1705
		},
		{
			src: `${basedir}/album/dragon/1706873782666.jpg`,
			width: 960,
			height: 1706
		},
		{
			src: `${basedir}/album/dragon/1706971953863.jpg`,
			width: 960,
			height: 1706
		},
		{
			src: `${basedir}/album/dragon/1707390812632.jpg`,
			width: 1108,
			height: 1477
		},
		{
			src: `${basedir}/album/dragon/1707553301775.jpg`,
			width: 1108,
			height: 1477
		},
		{
			src: `${basedir}/album/dragon/1707553304569.jpg`,
			width: 1108,
			height: 1477
		},
		{
			src: `${basedir}/album/dragon/1707662975358.jpg`,
			width: 1108,
			height: 1477
		},
		{
			src: `${basedir}/album/dragon/20230405_231059.jpg`,
			width: 3024,
			height: 3024
		},
		{
			src: `${basedir}/album/dragon/IMG_20240225_235340_468.jpg`,
			width: 1080,
			height: 1920
		},
		{
			src: `${basedir}/album/dragon/IMG_20240225_235344_051.jpg`,
			width: 563,
			height: 1000
		},
		{
			src: `${basedir}/album/dragon/IMG_20240226_111034_944.jpg`,
			width: 653,
			height: 653
		},
		{
			src: `${basedir}/album/dragon/IMG_20240228_180935_634.jpg`,
			width: 459,
			height: 816
		},
		{
			src: `${basedir}/album/dragon/IMG_20240302_171845_707.jpg`,
			width: 459,
			height: 816
		}
	];
	
	return {
		date: "18 June 2025",
		title: "可愛小奶龍",
		description:
			"這是我的舒壓小夥伴奶龍，他陪我過了 N 個壓力大的夜晚，這是一些他的可愛照片 (歐洲龍)。",
		type: "Others",
		style: "",
		keywords: [
			"Little Dragon",
			"Stanley",
			"Stanley Shen",
		],
		photos: allphotos,
	};
}

export default dragonPhoto;
