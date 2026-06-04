const {bundle} = require('@remotion/bundler');
const {renderMedia, selectComposition} = require('@remotion/renderer');
const fs = require('node:fs');
const path = require('node:path');

async function main() {
	const slug = process.argv[2] ?? 'neet-photo-resizer';
	const compositionId = process.argv[3] ?? 'ExamLandingVideo';
	const propsPath = process.argv[4] ?? './src/videoProps.json';
	const outputDirArg = process.argv[5] ?? './public/videos';
	const suffix = compositionId === 'ExamLandingVideo' ? '' : `-${compositionId}`;
	const videoProps = require(path.resolve(propsPath));
	const props = videoProps[slug];

	if (!props) {
		throw new Error(`No video props found for slug: ${slug}`);
	}

	const entryPoint = path.resolve('./src/index.ts');
	const outputDir = path.resolve(outputDirArg);
	fs.mkdirSync(outputDir, {recursive: true});

	const bundled = await bundle(entryPoint);
	const composition = await selectComposition({
		id: compositionId,
		inputProps: props,
		serveUrl: bundled,
	});

	await renderMedia({
		codec: 'h264',
		composition,
		inputProps: props,
		outputLocation: path.join(outputDir, `${slug}${suffix}.mp4`),
		serveUrl: bundled,
	});

	console.log(`Done: ${slug}${suffix}.mp4`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});

export {};
