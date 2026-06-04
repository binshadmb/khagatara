const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const vm = require('vm');

const brandColor = '#D4A63A';

function loadPremiumLandingPages() {
	const sourcePath = path.resolve(__dirname, '../../src/app/premiumLandingMap.ts');
	const source = fs.readFileSync(sourcePath, 'utf8');
	const output = ts.transpileModule(source, {
		compilerOptions: {
			module: ts.ModuleKind.CommonJS,
			target: ts.ScriptTarget.ES2020,
		},
	}).outputText;

	const sandbox = {
		exports: {},
		module: {exports: {}},
		require,
		console,
		process,
	};

	vm.runInNewContext(output, sandbox, {filename: sourcePath});

	return (
		sandbox.module.exports.PREMIUM_LANDING_PAGES ??
		sandbox.exports.PREMIUM_LANDING_PAGES ??
		[]
	);
}

function themeFor(page) {
	const text = `${page.slug} ${page.h1} ${page.title} ${page.description} ${page.intro?.eyebrow ?? ''}`.toLowerCase();

	if (
		text.includes('passport') ||
		text.includes('document') ||
		text.includes('visa') ||
		text.includes('aadhaar') ||
		text.includes('pan card') ||
		text.includes('driving licence') ||
		text.includes('license') ||
		text.includes('id card')
	) {
		return 'passport';
	}

	if (
		text.includes('instagram') ||
		text.includes('facebook') ||
		text.includes('telegram') ||
		text.includes('whatsapp') ||
		text.includes('youtube') ||
		text.includes('linkedin') ||
		text.includes('social media')
	) {
		return 'social';
	}

	return 'enhance';
}

function hookFor(page) {
	const text = `${page.slug} ${page.h1}`.toLowerCase();

	if (text.includes('old photo') || text.includes('restore')) return 'Old photo still faded?';
	if (text.includes('blur') || text.includes('blurry')) return 'Blurry photo ruining it?';
	if (text.includes('whatsapp')) return 'WhatsApp photo still blurry?';
	if (text.includes('telegram')) return 'Telegram image lost quality?';
	if (text.includes('instagram')) return 'Instagram photo looking soft?';
	if (text.includes('facebook')) return 'Facebook upload looks dull?';
	if (text.includes('passport')) return 'Passport photo not clear enough?';
	if (text.includes('document')) return 'Document photo too unclear?';
	if (text.includes('wedding')) return 'Wedding photo lost its magic?';
	if (text.includes('baby')) return 'Baby photo missing detail?';
	if (text.includes('portrait')) return 'Portrait detail not sharp enough?';
	return 'Important photo still not clear?';
}

function problemsFor(page) {
	const theme = themeFor(page);
	const text = `${page.slug} ${page.h1}`.toLowerCase();

	if (theme === 'social') return ['Blurry upload', 'Lost detail', 'Low quality'];
	if (theme === 'passport') return ['Not clear enough', 'Low resolution', 'Detail lost'];
	if (text.includes('old photo') || text.includes('restore')) return ['Faded print', 'Scratches', 'Lost detail'];
	return ['Blurry photo', 'Low resolution', 'Weak detail'];
}

function solutionFor(page) {
	const text = `${page.slug} ${page.h1}`.toLowerCase();

	if (text.includes('old photo') || text.includes('restore')) return 'Restore it with premium AI';
	if (text.includes('document') || text.includes('passport')) return 'Make it crisp and document ready';
	if (text.includes('wedding') || text.includes('engagement') || text.includes('party') || text.includes('event')) {
		return 'Bring back premium clarity';
	}

	return 'Enhance with premium AI';
}

function resultFor(page) {
	const theme = themeFor(page);

	if (theme === 'social') return 'Ready to post';
	if (theme === 'passport') return 'Ready with clear detail';
	return 'Premium result ready';
}

function labelFor(page) {
	const eyebrow = page.intro?.eyebrow?.trim();
	if (eyebrow) return eyebrow;
	return 'Premium AI Enhancement';
}

function taglineFor(page) {
	const tagline = page.intro?.tagline?.trim();
	if (!tagline) return 'Premium AI enhancement for your most important photos';

	if (tagline.length <= 48) return tagline;
	return 'Premium AI enhancement for your most important photos';
}

function ctaFor(page) {
	const text = `${page.slug} ${page.h1}`.toLowerCase();

	if (text.includes('restore')) return 'Restore Premium Now';
	return 'Start Premium Enhancement';
}

const premiumPages = loadPremiumLandingPages();
const result = {};

for (const page of premiumPages) {
	result[page.slug] = {
		examName: labelFor(page),
		h1: page.h1,
		hook: hookFor(page),
		problems: problemsFor(page),
		solution: solutionFor(page),
		result: resultFor(page),
		theme: themeFor(page),
		tagline: taglineFor(page),
		cta: ctaFor(page),
		brandColor,
	};
}

const outPathArg = process.argv[2] ?? '../src/videoProps-premium.json';
const outPath = path.resolve(__dirname, outPathArg);
fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
console.log(`Written ${Object.keys(result).length} premium entries to ${outPath}`);
