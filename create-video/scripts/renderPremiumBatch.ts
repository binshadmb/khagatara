const {bundle} = require('@remotion/bundler');
const {renderMedia, selectComposition} = require('@remotion/renderer');
const {execFileSync} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

function timestamp() {
	const now = new Date();
	const pad = (value: number) => String(value).padStart(2, '0');

	return [
		now.getFullYear(),
		pad(now.getMonth() + 1),
		pad(now.getDate()),
		'-',
		pad(now.getHours()),
		pad(now.getMinutes()),
		pad(now.getSeconds()),
	].join('');
}

async function main() {
	const compositionId = process.argv[2] ?? 'ExamLandingVideoHook';
	const slugFilter = process.argv[3] ?? '';
	const stamp = timestamp();
	const generatedDir = path.resolve('./generated');
	const propsDir = path.join(generatedDir, 'props');
	const videosDir = path.join(generatedDir, `videos-premium-${stamp}`);
	const propsPath = path.join(propsDir, `videoProps-premium-${stamp}.json`);

	fs.mkdirSync(propsDir, {recursive: true});
	fs.mkdirSync(videosDir, {recursive: true});

	execFileSync(process.execPath, ['./scripts/generatePremiumVideoProps.js', propsPath], {
		stdio: 'inherit',
	});

	const videoProps = require(propsPath);
	const entries = Object.entries(videoProps).filter(([slug]) =>
		!slugFilter || slug === slugFilter,
	) as Array<[string, Record<string, unknown>]>;

	if (entries.length === 0) {
		throw new Error(
			slugFilter
				? `No premium video props found for slug: ${slugFilter}`
				: 'No premium video props were generated.',
		);
	}

	const entryPoint = path.resolve('./src/index.ts');
	const bundled = await bundle(entryPoint);

	console.log(`[PREMIUM] Props file : ${propsPath}`);
	console.log(`[PREMIUM] Output dir : ${videosDir}`);
	console.log(`[PREMIUM] Rendering ${entries.length} premium video(s)...`);

	for (const [slug, props] of entries) {
		console.log(`[PREMIUM] Rendering ${slug}`);

		const composition = await selectComposition({
			id: compositionId,
			inputProps: props,
			serveUrl: bundled,
		});

		await renderMedia({
			codec: 'h264',
			composition,
			inputProps: props,
			outputLocation: path.join(videosDir, `${slug}.mp4`),
			serveUrl: bundled,
		});

		console.log(`[PREMIUM] Done ${slug}.mp4`);
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});

export {};
