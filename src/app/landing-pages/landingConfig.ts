export { PREMIUM_LANDING_MAP, PREMIUM_LANDING_PAGES, PREMIUM_LANDING_SLUGS, getPremiumLanding, type PremiumEntry } from '../premiumLandingMap'

// landingConfig.ts
// One config drives every landing page on khagatara.com
// tool: 'compressor' | 'remaker' | 'resizer'
// preset: passed as prop to the tool component

export type LandingConfig = {
  slug: string
  title: string
  h1: string
  description: string
  tool: 'compressor' | 'remaker' | 'resizer'
  targetKb?: number       // pre-select target KB in compressor/remaker
  mode?: string           // pre-select mode in remaker: increase_kb | ai_upscale | screenshot
  resolution?: string     // pre-select output resolution in remaker: hd | 2k | 4k | 8k
  examName?: string       // used in FAQ generation
  category: string
  faqs: { q: string; a: string }[]
}

// ─── Helper to build exam photo pages ────────────────────────────────────────
function examPhotoResizer(slug: string, exam: string, photoKb = 100, sigKb = 50): LandingConfig {
  return {
    slug,
    title: `${exam} Photo Resizer Online Free — Resize to ${photoKb}KB`,
    h1: `${exam} Photo Resizer`,
    description: `Resize and compress your photo for ${exam} application online. Reduce photo to ${photoKb}KB and signature to ${sigKb}KB instantly in your browser.`,
    tool: 'compressor',
    targetKb: photoKb,
    examName: exam,
    category: 'exam',
    faqs: [
      { q: `What is the photo size for ${exam}?`, a: `Most ${exam} applications require a photo of ${photoKb}KB or less in JPG format. Check the official notification for exact dimensions.` },
      { q: `How do I resize my photo for ${exam}?`, a: `Upload your photo, select the ${photoKb}KB target, and click Compress. Download the result and upload it to your ${exam} application.` },
      { q: `What is the signature size for ${exam}?`, a: `${exam} typically requires a signature image of ${sigKb}KB or less. Use the ${sigKb}KB target option.` },
      { q: `Can I resize PNG photos for ${exam}?`, a: `Yes. Upload your PNG photo and compress it to ${photoKb}KB. For best results, use JPG format as most ${exam} portals prefer JPG.` },
      { q: `Is this tool free for ${exam} photo resizing?`, a: `Yes. This tool is completely free. Your photo is processed in your browser and never uploaded to a server.` },
    ],
  }
}

function examPhotoEnhancer(slug: string, exam: string): LandingConfig {
  return {
    slug,
    title: `${exam} Photo Enhancer Online Free — Improve Photo Quality`,
    h1: `${exam} Photo Enhancer`,
    description: `Enhance and improve photo quality for ${exam} application online. Fix blur, improve resolution, and download a clear photo for your ${exam} form.`,
    tool: 'remaker',
    mode: 'ai_upscale',
    examName: exam,
    category: 'exam',
    faqs: [
      { q: `How do I enhance my photo for ${exam}?`, a: `Upload your photo, choose AI-style Upscale, and click Remake Image. The tool will improve clarity and resolution for your ${exam} application.` },
      { q: `My ${exam} photo is blurry. Can I fix it?`, a: `Yes. Upload the blurry photo and use the AI Upscale mode. The tool will sharpen the image and improve its quality.` },
      { q: `What photo quality does ${exam} require?`, a: `${exam} requires a clear, recent passport-style photo. The face should be clearly visible with no blur or pixelation.` },
      { q: `Is photo enhancement free for ${exam}?`, a: `Yes. One free enhancement is available. Your photo is processed in your browser.` },
    ],
  }
}

function examSignatureResizer(slug: string, exam: string, sigKb = 50): LandingConfig {
  return {
    slug,
    title: `${exam} Signature Resizer Online Free — Resize to ${sigKb}KB`,
    h1: `${exam} Signature Resizer`,
    description: `Resize your signature image for ${exam} application to ${sigKb}KB online free. No upload required — processed in your browser.`,
    tool: 'compressor',
    targetKb: sigKb,
    examName: exam,
    category: 'exam',
    faqs: [
      { q: `What is the signature size for ${exam}?`, a: `${exam} typically requires a signature image under ${sigKb}KB in JPG format. Check the official notification for exact requirements.` },
      { q: `How do I resize my signature for ${exam}?`, a: `Upload your signature image, select the ${sigKb}KB target, and click Compress. Download and upload to your ${exam} form.` },
      { q: `Can I use PNG for my ${exam} signature?`, a: `Most portals prefer JPG. Upload your PNG signature and the tool will compress it. For best compatibility, use JPG.` },
    ],
  }
}

function examPhotoBooth(slug: string, exam: string): LandingConfig {
  return {
    slug,
    title: `${exam} Photo Booth Online Free — Resize, Enhance & Download`,
    h1: `${exam} Photo Booth`,
    description: `Complete photo preparation for ${exam} — resize, compress, enhance, and download your application photo and signature in one place.`,
    tool: 'remaker',
    mode: 'increase_kb',
    examName: exam,
    category: 'exam',
    faqs: [
      { q: `What does the ${exam} photo booth do?`, a: `It lets you resize, compress, and enhance your ${exam} application photo and signature to meet official requirements.` },
      { q: `Is this the official ${exam} photo tool?`, a: `No. This is an independent free tool to help you prepare your photo. Always verify requirements on the official ${exam} website.` },
      { q: `How do I use this for my ${exam} application?`, a: `Upload your photo, choose your target size, compress or enhance, and download the result. Then upload to the official ${exam} portal.` },
    ],
  }
}

// ─── All landing pages ────────────────────────────────────────────────────────
export const LANDING_PAGES: LandingConfig[] = [

  // ── Compress KB targets ───────────────────────────────────────────────────
  {
    slug: 'compress-image-to-20kb',
    title: 'Compress Image to 20KB Online Free',
    h1: 'Compress Image to 20KB',
    description: 'Compress any image to 20KB online free. Reduce JPG, PNG and WebP to 20KB in your browser instantly.',
    tool: 'compressor', targetKb: 20, category: 'compress',
    faqs: [
      { q: 'How do I compress an image to 20KB?', a: 'Upload your image, select the 20KB target, and click Compress Image. Download the result.' },
      { q: 'Can I compress JPG to 20KB?', a: 'Yes. Upload your JPG, choose 20KB target, and compress.' },
      { q: 'Why do some forms require 20KB photos?', a: 'Government and exam portals set strict file size limits to keep servers fast. 20KB is common for signature images.' },
      { q: 'Will quality suffer at 20KB?', a: 'Some quality loss is expected at very small sizes. For best results, start with a clear, well-lit photo.' },
    ],
  },
  {
    slug: 'compress-image-to-50kb',
    title: 'Compress Image to 50KB Online Free',
    h1: 'Compress Image to 50KB',
    description: 'Compress JPG, PNG and WebP images to 50KB online free. Perfect for exam forms, government portals, and email attachments.',
    tool: 'compressor', targetKb: 50, category: 'compress',
    faqs: [
      { q: 'How do I compress an image to 50KB?', a: 'Upload your image, choose the 50KB target, and click Compress Image.' },
      { q: 'Which exams require 50KB photo?', a: 'Many government and competitive exam forms require photos between 20KB and 50KB.' },
      { q: 'Can I compress PNG to 50KB?', a: 'Yes. Upload your PNG and select the 50KB target.' },
      { q: 'Does this work on mobile?', a: 'Yes. The tool works on any browser including mobile Chrome and Safari.' },
    ],
  },
  {
    slug: 'compress-image-to-100kb',
    title: 'Compress Image to 100KB Online Free',
    h1: 'Compress Image to 100KB',
    description: 'Compress JPG, PNG and WebP to 100KB online free. Reduce image size for NEET, UPSC, SSC, bank forms and more.',
    tool: 'compressor', targetKb: 100, category: 'compress',
    faqs: [
      { q: 'How do I compress an image to 100KB?', a: 'Upload your image, select the 100KB target, and click Compress Image. Download the result.' },
      { q: 'Which exams require 100KB photos?', a: 'NEET, JEE, UPSC, SSC, IBPS, and most government exam portals require photos under 100KB.' },
      { q: 'Can I compress PNG to 100KB?', a: 'Yes. PNG files are supported alongside JPG and WebP.' },
      { q: 'Is my photo safe?', a: 'Yes. All processing happens in your browser. Your image is never uploaded to a server.' },
      { q: 'What if my photo is still above 100KB after compression?', a: 'Try cropping the image first to reduce dimensions, then compress again.' },
    ],
  },
  {
    slug: 'compress-image-to-200kb',
    title: 'Compress Image to 200KB Online Free',
    h1: 'Compress Image to 200KB',
    description: 'Compress images to 200KB online free. Ideal for passport photos, job applications, and online forms requiring under 200KB.',
    tool: 'compressor', targetKb: 200, category: 'compress',
    faqs: [
      { q: 'How do I compress an image to 200KB?', a: 'Upload your image, select the 200KB target, and click Compress Image.' },
      { q: 'Is 200KB good for passport photos?', a: 'Yes. Most passport photo upload portals accept files under 200KB in JPG format.' },
      { q: 'Can I compress WebP to 200KB?', a: 'Yes. Upload your WebP image and select the 200KB target.' },
    ],
  },
  {
    slug: 'compress-image-to-500kb',
    title: 'Compress Image to 500KB Online Free',
    h1: 'Compress Image to 500KB',
    description: 'Compress JPG, PNG and WebP images to 500KB online free. Reduce image size for websites, email, and upload limits.',
    tool: 'compressor', targetKb: 500, category: 'compress',
    faqs: [
      { q: 'How do I compress an image to 500KB?', a: 'Upload your image, choose the 500KB target, and click Compress Image.' },
      { q: 'Is 500KB good for website images?', a: 'For most websites, 500KB is on the larger side. Use Balanced compression for good quality at a smaller size.' },
      { q: 'Can I compress RAW photos to 500KB?', a: 'RAW files are not supported. Convert to JPG first, then compress.' },
    ],
  },
  {
    slug: 'compress-image-to-1mb',
    title: 'Compress Image to 1MB Online Free',
    h1: 'Compress Image to 1MB',
    description: 'Compress large images to 1MB online free. Reduce file size for email attachments, cloud uploads, and sharing.',
    tool: 'compressor', targetKb: 1024, category: 'compress',
    faqs: [
      { q: 'How do I compress an image to 1MB?', a: 'Upload your image, select the 1MB target, and click Compress Image.' },
      { q: 'When would I need to compress to exactly 1MB?', a: 'Some email systems, CMS platforms, and document portals have a 1MB file size limit.' },
    ],
  },
  {
    slug: 'compress-image-to-2mb',
    title: 'Compress Image to 2MB Online Free',
    h1: 'Compress Image to 2MB',
    description: 'Compress images to 2MB online free. Reduce large photos for upload limits while keeping good visual quality.',
    tool: 'compressor', targetKb: 2048, category: 'compress',
    faqs: [
      { q: 'How do I compress an image to 2MB?', a: 'Upload your image, select the 2MB target, and click Compress Image.' },
      { q: 'Is 2MB acceptable for most uploads?', a: 'Yes. Most platforms accept images under 2MB. Use Low Compression for the best quality at this size.' },
    ],
  },
  {
    slug: 'compress-jpg-online',
    title: 'Compress JPG Online Free — Reduce JPG File Size',
    h1: 'Compress JPG Online',
    description: 'Compress JPG images online free. Reduce JPG file size for websites, email, forms, and sharing without losing quality.',
    tool: 'compressor', targetKb: 100, category: 'compress',
    faqs: [
      { q: 'How do I compress a JPG online?', a: 'Upload your JPG, choose a quality preset or target size, and click Compress Image.' },
      { q: 'Does compressing JPG reduce quality?', a: 'Some quality reduction happens with aggressive settings. Use Balanced for a good size-to-quality ratio.' },
      { q: 'Is JPG compression free?', a: 'Yes. This tool is completely free for JPG compression.' },
    ],
  },
  {
    slug: 'compress-png-online',
    title: 'Compress PNG Online Free — Reduce PNG File Size',
    h1: 'Compress PNG Online',
    description: 'Compress PNG images online free. Reduce PNG file size for websites, email, and upload portals in your browser.',
    tool: 'compressor', targetKb: 100, category: 'compress',
    faqs: [
      { q: 'How do I compress a PNG online?', a: 'Upload your PNG, choose a target size or quality preset, and click Compress Image.' },
      { q: 'Why are PNG files large?', a: 'PNG uses lossless compression. Photos and detailed images create large PNG files. JPG or WebP usually compresses better for photos.' },
      { q: 'Will PNG transparency be preserved?', a: 'The tool outputs JPG format which does not support transparency. For transparent images, use a dedicated PNG optimizer.' },
    ],
  },
  {
    slug: 'compress-image-for-email',
    title: 'Compress Image for Email Online Free',
    h1: 'Compress Image for Email',
    description: 'Compress images for email attachments online free. Reduce photo size so emails send faster and avoid attachment size limits.',
    tool: 'compressor', targetKb: 500, category: 'compress',
    faqs: [
      { q: 'What is a good image size for email?', a: 'For email attachments, aim for under 500KB per image. Use 200KB for faster sending.' },
      { q: 'How do I compress images before sending by email?', a: 'Upload your image, select 200KB or 500KB target, compress, and download. Then attach to your email.' },
      { q: 'Does Gmail have an image size limit?', a: 'Gmail allows attachments up to 25MB total. Compressing images keeps emails faster for recipients.' },
    ],
  },
  {
    slug: 'compress-image-for-whatsapp',
    title: 'Compress Image for WhatsApp Online Free',
    h1: 'Compress Image for WhatsApp',
    description: 'Compress images for WhatsApp online free. Reduce photo size so images send faster on WhatsApp without quality loss.',
    tool: 'compressor', targetKb: 200, category: 'compress',
    faqs: [
      { q: 'Does WhatsApp compress images automatically?', a: 'Yes, but you can pre-compress to control quality. WhatsApp compression can reduce quality significantly.' },
      { q: 'What size image is best for WhatsApp?', a: 'Under 200KB sends quickly and looks good on most phones.' },
      { q: 'How do I send original quality on WhatsApp?', a: 'Use the Document option in WhatsApp to send without automatic compression.' },
    ],
  },

  // ── Photo KB targets ──────────────────────────────────────────────────────
  { slug: 'photo-to-20kb',  title: 'Reduce Photo to 20KB Online Free',  h1: 'Photo to 20KB',  description: 'Reduce any photo to 20KB online free. Perfect for government forms, exam portals, and signature uploads.', tool: 'compressor', targetKb: 20,  category: 'compress', faqs: [{ q: 'How do I reduce a photo to 20KB?', a: 'Upload your photo, choose the 20KB target, and click Compress Image.' }, { q: 'Is 20KB enough for a signature image?', a: 'Yes. Most exam portals accept signature images between 10KB and 50KB.' }] },
  { slug: 'photo-to-50kb',  title: 'Reduce Photo to 50KB Online Free',  h1: 'Photo to 50KB',  description: 'Reduce any photo to 50KB online free. Ideal for exam forms, ID uploads, and government portals.', tool: 'compressor', targetKb: 50,  category: 'compress', faqs: [{ q: 'How do I reduce a photo to 50KB?', a: 'Upload your photo, select the 50KB target, and compress.' }, { q: 'Which portals require 50KB photos?', a: 'SSC, IBPS, RRB, and many state PSC portals require photos under 50KB.' }] },
  { slug: 'photo-to-100kb', title: 'Reduce Photo to 100KB Online Free', h1: 'Photo to 100KB', description: 'Reduce any photo to 100KB online free. Used for NEET, UPSC, SSC, bank exams, and most government portals.', tool: 'compressor', targetKb: 100, category: 'compress', faqs: [{ q: 'How do I reduce a photo to 100KB?', a: 'Upload your photo, choose 100KB target, and click Compress Image.' }, { q: 'Which exams need photos under 100KB?', a: 'NEET, JEE, UPSC, SSC, IBPS, SBI, RRB, and most state PSC exams.' }] },
  { slug: 'photo-to-200kb', title: 'Reduce Photo to 200KB Online Free', h1: 'Photo to 200KB', description: 'Reduce any photo to 200KB online free. Suitable for passport uploads, job applications, and online forms.', tool: 'compressor', targetKb: 200, category: 'compress', faqs: [{ q: 'How do I reduce a photo to 200KB?', a: 'Upload your photo, choose the 200KB target, and compress.' }, { q: 'Is 200KB accepted for passport photos?', a: 'Yes. Most passport portals accept JPG photos under 200KB.' }] },
  { slug: 'photo-to-500kb', title: 'Reduce Photo to 500KB Online Free', h1: 'Photo to 500KB', description: 'Reduce any photo to 500KB online free. Good for websites, social media, and professional uploads.', tool: 'compressor', targetKb: 500, category: 'compress', faqs: [{ q: 'How do I reduce a photo to 500KB?', a: 'Upload your photo, select the 500KB target, and click Compress Image.' }] },

  // ── Signature KB targets ──────────────────────────────────────────────────
  { slug: 'signature-to-20kb',  title: 'Resize Signature to 20KB Online Free',  h1: 'Signature to 20KB',  description: 'Resize signature image to 20KB online free for exam forms, government portals, and job applications.', tool: 'compressor', targetKb: 20,  category: 'compress', faqs: [{ q: 'How do I resize my signature to 20KB?', a: 'Upload your signature image, choose the 20KB target, and compress.' }, { q: 'What format should my signature be in?', a: 'JPG is the most widely accepted format for signature uploads.' }] },
  { slug: 'signature-to-50kb',  title: 'Resize Signature to 50KB Online Free',  h1: 'Signature to 50KB',  description: 'Resize signature image to 50KB online free. Perfect for NEET, UPSC, SSC, and banking exam applications.', tool: 'compressor', targetKb: 50,  category: 'compress', faqs: [{ q: 'How do I resize my signature to 50KB?', a: 'Upload your signature image and select the 50KB target.' }, { q: 'Which exams need 50KB signature?', a: 'NEET, JEE, CUET, SSC, IBPS, and many state PSC portals require signatures under 50KB.' }] },
  { slug: 'signature-to-100kb', title: 'Resize Signature to 100KB Online Free', h1: 'Signature to 100KB', description: 'Resize signature image to 100KB online free for application forms and government portals.', tool: 'compressor', targetKb: 100, category: 'compress', faqs: [{ q: 'How do I resize my signature to 100KB?', a: 'Upload your signature image and choose the 100KB target.' }] },

  // ── AI Upscale / Enhance ──────────────────────────────────────────────────
  { slug: 'ai-photo-enhancer',             title: 'AI Photo Enhancer Online Free — Improve Photo Quality',          h1: 'AI Photo Enhancer',             description: 'Enhance photo quality online free using AI. Fix blur, increase resolution, and sharpen images in your browser.',                                       tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'How does AI photo enhancement work?', a: 'AI upscaling uses Real-ESRGAN to analyse pixel patterns and add realistic detail, sharpening the image.' }, { q: 'Is AI photo enhancement free?', a: 'Yes. One free enhancement is available per session.' }] },
  { slug: 'ai-image-upscaler',             title: 'AI Image Upscaler Online Free — Upscale Images with AI',         h1: 'AI Image Upscaler',             description: 'Upscale images online free with AI. Increase image resolution from low quality to HD, 2K, or 4K using Real-ESRGAN.',                                tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'What is AI image upscaling?', a: 'AI upscaling uses deep learning to intelligently increase image resolution, adding realistic detail rather than just stretching pixels.' }, { q: 'How much can I upscale an image?', a: 'The tool supports 2x and 4x upscaling using Real-ESRGAN.' }] },
  { slug: 'upscale-image-to-hd',           title: 'Upscale Image to HD Online Free',                                 h1: 'Upscale Image to HD',           description: 'Upscale any image to HD resolution online free using AI. Improve clarity, sharpness, and detail in one click.',                                    tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'How do I upscale an image to HD?', a: 'Upload your image, choose AI-style Upscale, and click Remake Image. The AI will enhance it to HD quality.' }] },
  { slug: 'upscale-image-to-2k',           title: 'Upscale Image to 2K Online Free',                                 h1: 'Upscale Image to 2K',           description: 'Upscale images to 2K resolution online free using AI upscaling. Improve photo quality for printing, sharing, and professional use.', tool: 'remaker', mode: 'ai_upscale', resolution: '2k', category: 'enhance', faqs: [{ q: 'Can I upscale any image to 2K?', a: 'Yes. Upload your image and the AI will enhance it towards 2K resolution depending on the original size.' }] },
  { slug: 'upscale-image-to-4k',           title: 'Upscale Image to 4K Online Free',                                 h1: 'Upscale Image to 4K',           description: 'Upscale images to 4K resolution online free. Use AI to enhance low-resolution photos to near 4K quality.',                                        tool: 'remaker', mode: 'ai_upscale', resolution: '4k', category: 'enhance', faqs: [{ q: 'Can I upscale a photo to 4K for free?', a: 'Yes. Upload your photo and select AI-style Upscale. The tool uses Real-ESRGAN to improve resolution up to 4x.' }] },
  { slug: 'upscale-image-to-8k',           title: 'Upscale Image to 8K Online Free',                                 h1: 'Upscale Image to 8K',           description: 'Upscale images towards 8K quality online free. AI-powered enhancement for the sharpest possible output.',                                          tool: 'remaker', mode: 'ai_upscale', resolution: '8k', category: 'enhance', faqs: [{ q: 'Can I really get 8K quality from a small photo?', a: 'The tool upscales as much as possible using AI. True 8K depends on the original image quality and detail.' }] },
  { slug: 'low-quality-to-hd-photo',       title: 'Convert Low Quality Photo to HD Online Free',                    h1: 'Low Quality to HD Photo',       description: 'Convert low quality photos to HD online free using AI upscaling. Improve blurry, pixelated, or small images.',                                    tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'Can I convert a low quality photo to HD?', a: 'Yes. Upload the low quality photo and use AI Upscale mode to improve resolution and sharpness.' }] },
  { slug: 'sharpen-blurry-image',          title: 'Sharpen Blurry Image Online Free — Fix Blurry Photos',           h1: 'Sharpen Blurry Image',          description: 'Sharpen blurry images online free. Fix out-of-focus, motion-blurred, or pixelated photos using AI enhancement.',                                  tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'Can I fix a blurry photo online?', a: 'Yes. Upload your blurry photo and use AI Upscale to sharpen and recover detail.' }] },
  { slug: 'remove-photo-blur',             title: 'Remove Photo Blur Online Free',                                   h1: 'Remove Photo Blur',             description: 'Remove blur from photos online free. AI-powered deblurring improves sharpness and recovers lost detail.',                                          tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'How do I remove blur from a photo?', a: 'Upload your photo and select AI-style Upscale. The AI will sharpen the image and recover detail.' }] },
  { slug: 'restore-old-photo',             title: 'Restore Old Photo Online Free — AI Photo Restoration',           h1: 'Restore Old Photo',             description: 'Restore old and damaged photos online free using AI. Improve faded, scratched, or low-quality old photos.',                                        tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'Can I restore old photos online for free?', a: 'Yes. Upload your old photo and use AI Upscale to improve quality and sharpness.' }] },
  { slug: 'screenshot-enhancer',           title: 'Screenshot Enhancer Online Free — Sharpen & Upscale Screenshots', h1: 'Screenshot Enhancer',          description: 'Enhance screenshots online free using AI. Sharpen text, improve clarity, and upscale low-resolution screenshots.',                                tool: 'remaker', mode: 'screenshot',    category: 'enhance', faqs: [{ q: 'How do I enhance a screenshot?', a: 'Upload your screenshot, choose Screenshot Enhancer mode, and click Remake Image.' }, { q: 'Why do screenshots look blurry?', a: 'Screenshots taken on low-resolution screens or zoomed-in UI can appear pixelated. AI enhancement sharpens text and edges.' }] },
  { slug: 'document-photo-enhancer',       title: 'Document Photo Enhancer Online Free',                             h1: 'Document Photo Enhancer',       description: 'Enhance document photos online free. Improve clarity of scanned documents, ID cards, and certificates.',                                          tool: 'remaker', mode: 'screenshot',    category: 'enhance', faqs: [{ q: 'Can I enhance a scanned document photo?', a: 'Yes. Upload the scanned image and use Screenshot Enhancer mode for sharp text and edges.' }] },
  { slug: 'increase-photo-resolution',     title: 'Increase Photo Resolution Online Free',                           h1: 'Increase Photo Resolution',     description: 'Increase photo resolution online free using AI. Make small images larger with improved sharpness and detail.',                                    tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'How do I increase photo resolution?', a: 'Upload your photo and select AI-style Upscale. The tool uses Real-ESRGAN to increase resolution up to 4x.' }] },
  { slug: 'convert-low-quality-photo-to-hd', title: 'Convert Low Quality Photo to HD Online',                       h1: 'Convert Low Quality to HD',     description: 'Convert low quality photos to HD resolution online free. AI upscaling recovers detail from blurry or pixelated images.', tool: 'remaker', mode: 'ai_upscale', category: 'enhance', faqs: [{ q: 'How do I convert a low resolution photo to HD?', a: 'Upload the low resolution photo and click Remake Image in AI Upscale mode.' }] },
  { slug: 'whatsapp-image-enhancer',       title: 'WhatsApp Image Enhancer Online Free',                             h1: 'WhatsApp Image Enhancer',       description: 'Enhance WhatsApp images online free. Restore quality lost from WhatsApp compression using AI upscaling.',                                          tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'Why do WhatsApp photos look blurry?', a: 'WhatsApp compresses images automatically. Use AI Upscale to recover sharpness.' }] },
  { slug: 'telegram-image-enhancer',       title: 'Telegram Image Enhancer Online Free',                             h1: 'Telegram Image Enhancer',       description: 'Enhance Telegram images online free using AI. Improve photo quality and resolution for better sharing.',                                            tool: 'remaker', mode: 'ai_upscale',   category: 'enhance', faqs: [{ q: 'Does Telegram compress images?', a: 'Yes. Telegram compresses photos sent as images. Use AI Upscale to restore quality.' }] },
  { slug: 'instagram-photo-enhancer',      title: 'Instagram Photo Enhancer Online Free',                            h1: 'Instagram Photo Enhancer',      description: 'Enhance photos for Instagram online free. Improve sharpness, resolution, and quality before posting.',                                              tool: 'remaker', mode: 'ai_upscale',   category: 'social', faqs: [{ q: 'How do I enhance a photo for Instagram?', a: 'Upload your photo, use AI Upscale, and download the enhanced version before posting to Instagram.' }] },
  { slug: 'facebook-photo-enhancer',       title: 'Facebook Photo Enhancer Online Free',                             h1: 'Facebook Photo Enhancer',       description: 'Enhance photos for Facebook online free. Improve quality before uploading to Facebook profile, cover, or posts.',                                  tool: 'remaker', mode: 'ai_upscale',   category: 'social', faqs: [{ q: 'Why do Facebook photos look blurry?', a: 'Facebook compresses uploaded images. Enhancing before upload gives better results.' }] },

  // ── Passport / ID ─────────────────────────────────────────────────────────
  { slug: 'passport-photo-maker',      title: 'Passport Photo Maker Online Free',           h1: 'Passport Photo Maker',      description: 'Make and resize passport photos online free. Compress to required size for visa, ID, and travel document applications.',              tool: 'compressor', targetKb: 100, category: 'passport', faqs: [{ q: 'What size should a passport photo be?', a: 'Passport photos are usually 35x45mm or 2x2 inches. File size is typically under 200KB in JPG.' }, { q: 'Can I make a passport photo online for free?', a: 'Yes. Upload your photo and compress it to the required size.' }] },
  { slug: 'passport-photo-compressor', title: 'Passport Photo Compressor Online Free',      h1: 'Passport Photo Compressor', description: 'Compress passport photos to required size online free. Reduce to 50KB, 100KB or 200KB for visa and ID applications.',             tool: 'compressor', targetKb: 100, category: 'passport', faqs: [{ q: 'How do I compress a passport photo?', a: 'Upload your passport photo, choose the target KB, and compress.' }] },
  { slug: 'passport-photo-enhancer',   title: 'Passport Photo Enhancer Online Free',        h1: 'Passport Photo Enhancer',   description: 'Enhance passport photos online free using AI. Improve clarity and quality for visa, immigration, and ID applications.',             tool: 'remaker',    mode: 'ai_upscale', category: 'passport', faqs: [{ q: 'Can I enhance my passport photo online?', a: 'Yes. Upload your passport photo and use AI Upscale to improve sharpness and quality.' }] },
  { slug: 'passport-photo-resizer',    title: 'Passport Photo Resizer Online Free',         h1: 'Passport Photo Resizer',    description: 'Resize passport photos online free. Compress to the exact KB required for visa, travel, and ID document uploads.',                 tool: 'compressor', targetKb: 100, category: 'passport', faqs: [{ q: 'How do I resize a passport photo for online application?', a: 'Upload your photo, select the required KB target, and compress.' }] },
  { slug: 'id-card-photo-enhancer',    title: 'ID Card Photo Enhancer Online Free',         h1: 'ID Card Photo Enhancer',    description: 'Enhance ID card photos online free. Improve photo quality for Aadhaar, PAN, voter ID, and student ID applications.',              tool: 'remaker',    mode: 'ai_upscale', category: 'passport', faqs: [{ q: 'Can I enhance an ID card photo?', a: 'Yes. Upload your ID photo and use AI Upscale to sharpen and improve quality.' }] },
  { slug: 'id-card-photo-resizer',     title: 'ID Card Photo Resizer Online Free',          h1: 'ID Card Photo Resizer',     description: 'Resize ID card photos online free. Compress for Aadhaar, PAN card, voter ID, and other government ID applications.',            tool: 'compressor', targetKb: 50,  category: 'passport', faqs: [{ q: 'What size photo is needed for ID cards?', a: 'Most Indian ID card applications require photos between 20KB and 100KB in JPG format.' }] },

  // ── Social Media ──────────────────────────────────────────────────────────
  { slug: 'instagram-photo-resizer',  title: 'Instagram Photo Resizer Online Free',        h1: 'Instagram Photo Resizer',  description: 'Resize photos for Instagram online free. Compress and optimise images for Instagram posts, reels, and profile.',      tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What is the best image size for Instagram?', a: 'Instagram recommends 1080x1080px for posts. Keep file size under 1MB for fastest upload.' }] },
  { slug: 'instagram-story-resizer',  title: 'Instagram Story Resizer Online Free',        h1: 'Instagram Story Resizer',  description: 'Resize images for Instagram Stories online free. Optimise photos to 1080x1920px for Stories and Reels.',               tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size is an Instagram Story?', a: 'Instagram Stories are 1080x1920px (9:16 aspect ratio). Keep file size under 1MB.' }] },
  { slug: 'instagram-post-resizer',   title: 'Instagram Post Image Resizer Online Free',   h1: 'Instagram Post Resizer',   description: 'Resize images for Instagram posts online free. Compress to the right size for square, portrait, and landscape posts.',  tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size image should I use for Instagram posts?', a: 'Square: 1080x1080. Portrait: 1080x1350. Landscape: 1080x566. Keep file under 1MB.' }] },
  { slug: 'facebook-photo-resizer',   title: 'Facebook Photo Resizer Online Free',         h1: 'Facebook Photo Resizer',   description: 'Resize and compress photos for Facebook online free. Optimise profile photos, cover images, and post photos.',          tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What is the best photo size for Facebook?', a: 'Profile photo: 170x170px. Cover: 820x312px. Posts: 1200x630px. Keep file under 1MB.' }] },
  { slug: 'facebook-cover-resizer',   title: 'Facebook Cover Photo Resizer Online Free',   h1: 'Facebook Cover Resizer',   description: 'Resize Facebook cover photos online free. Compress to 820x312px for the best display on desktop and mobile.',           tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size is a Facebook cover photo?', a: 'Facebook cover photos display at 820x312px on desktop and 640x360px on mobile.' }] },
  { slug: 'youtube-thumbnail-resizer',title: 'YouTube Thumbnail Resizer Online Free',      h1: 'YouTube Thumbnail Resizer',description: 'Resize YouTube thumbnails online free. Compress thumbnail images to 1280x720px for the best display on YouTube.',       tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size is a YouTube thumbnail?', a: 'YouTube thumbnails should be 1280x720px in JPG, PNG, or WebP under 2MB.' }] },
  { slug: 'youtube-banner-resizer',   title: 'YouTube Banner Resizer Online Free',         h1: 'YouTube Banner Resizer',   description: 'Resize YouTube channel banners online free. Compress to 2560x1440px for the best display across all devices.',          tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size is a YouTube banner?', a: 'YouTube channel art should be 2560x1440px. The safe area is 1546x423px.' }] },
  { slug: 'twitter-image-resizer',    title: 'Twitter Image Resizer Online Free',          h1: 'Twitter Image Resizer',    description: 'Resize images for Twitter online free. Compress photos for tweets, profile pictures, and cover images.',              tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size images work best on Twitter?', a: 'Tweet images: 1200x675px. Profile: 400x400px. Header: 1500x500px. Max 5MB per image.' }] },
  { slug: 'x-image-resizer',          title: 'X (Twitter) Image Resizer Online Free',      h1: 'X Image Resizer',          description: 'Resize images for X (formerly Twitter) online free. Optimise photos for posts, profiles, and covers.',                 tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What image sizes does X (Twitter) use?', a: 'Same as Twitter: 1200x675px for posts, 400x400px for profile, 1500x500px for header.' }] },
  { slug: 'linkedin-photo-resizer',   title: 'LinkedIn Photo Resizer Online Free',         h1: 'LinkedIn Photo Resizer',   description: 'Resize LinkedIn profile photos online free. Compress to the right size for a professional LinkedIn presence.',         tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size photo does LinkedIn use?', a: 'LinkedIn profile photos: 400x400px minimum, up to 7680x4320px. Keep file under 8MB.' }] },
  { slug: 'linkedin-banner-resizer',  title: 'LinkedIn Banner Resizer Online Free',        h1: 'LinkedIn Banner Resizer',  description: 'Resize LinkedIn cover/banner photos online free. Optimise to 1584x396px for the best professional display.',           tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size is a LinkedIn banner?', a: 'LinkedIn cover photos display at 1584x396px. Keep file under 8MB in JPG or PNG.' }] },
  { slug: 'pinterest-image-resizer',  title: 'Pinterest Image Resizer Online Free',        h1: 'Pinterest Image Resizer',  description: 'Resize and compress Pinterest images online free. Optimise pins for maximum engagement on Pinterest.',                 tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What is the best image size for Pinterest?', a: 'Pinterest recommends 1000x1500px (2:3 ratio) for pins. Keep file under 20MB.' }] },
  { slug: 'discord-image-resizer',    title: 'Discord Image Resizer Online Free',          h1: 'Discord Image Resizer',    description: 'Resize images for Discord online free. Compress photos for Discord profile pictures, server icons, and banners.',     tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What size images does Discord use?', a: 'Discord avatar: 128x128px minimum. Server icon: 512x512px. Max file size 8MB.' }] },
  { slug: 'reddit-image-resizer',     title: 'Reddit Image Resizer Online Free',           h1: 'Reddit Image Resizer',     description: 'Resize images for Reddit online free. Compress photos for Reddit posts, avatars, and community banners.',              tool: 'compressor', targetKb: 500, category: 'social', faqs: [{ q: 'What image sizes does Reddit use?', a: 'Reddit profile: 256x256px. Community icon: 256x256px. Banner: 1920x384px.' }] },

  // ── Photo Booth ───────────────────────────────────────────────────────────
  { slug: 'online-photo-booth',      title: 'Online Photo Booth Free — Resize, Compress & Enhance',     h1: 'Online Photo Booth',      description: 'Free online photo booth. Resize, compress, and enhance photos for exams, passports, and government forms.',          tool: 'remaker', mode: 'ai_upscale', category: 'booth', faqs: [{ q: 'What is an online photo booth?', a: 'An online photo booth lets you prepare, resize, and enhance photos for ID, passport, and exam applications.' }] },
  { slug: 'ai-photo-booth',          title: 'AI Photo Booth Online Free',                                h1: 'AI Photo Booth',          description: 'AI-powered online photo booth. Enhance, upscale, and prepare photos for passports, exams, and applications.',         tool: 'remaker', mode: 'ai_upscale', category: 'booth', faqs: [{ q: 'What does an AI photo booth do?', a: 'It uses AI to improve photo quality, sharpness, and resolution for professional and official use.' }] },
  { slug: 'passport-photo-booth',    title: 'Passport Photo Booth Online Free',                          h1: 'Passport Photo Booth',    description: 'Prepare passport photos online free. Enhance, resize, and compress passport photos for visa and ID applications.',    tool: 'compressor', targetKb: 100, category: 'booth', faqs: [{ q: 'How do I prepare a passport photo online?', a: 'Upload your photo, compress to the required size, and download for your passport or visa application.' }] },
  { slug: 'exam-photo-booth',        title: 'Exam Photo Booth Online Free — Prepare Photos for Exams',  h1: 'Exam Photo Booth',        description: 'Prepare photos for exam applications online free. Resize, compress, and enhance photos for NEET, UPSC, SSC, and more.', tool: 'compressor', targetKb: 100, category: 'booth', faqs: [{ q: 'How do I prepare a photo for exam applications?', a: 'Upload your photo, choose the target KB required by the exam, compress, and download.' }] },
  { slug: 'application-photo-booth', title: 'Application Photo Booth Online Free',                       h1: 'Application Photo Booth', description: 'Prepare application photos online free. Resize and compress photos for job applications, government forms, and portals.',tool: 'compressor', targetKb: 100, category: 'booth', faqs: [{ q: 'What photo size do job applications need?', a: 'Most job application portals require photos under 100KB to 200KB in JPG format.' }] },

  // ── NEET ──────────────────────────────────────────────────────────────────
  examPhotoResizer('neet-photo-resizer',    'NEET', 100, 50),
  examPhotoEnhancer('neet-photo-enhancer',  'NEET'),
  examSignatureResizer('neet-signature-resizer', 'NEET', 50),
  { ...examPhotoBooth('neet-photo-booth', 'NEET'), slug: 'neet-photo-booth' },
  { slug: 'neet-photo-to-100kb', title: 'NEET Photo to 100KB Online Free', h1: 'NEET Photo to 100KB', description: 'Compress NEET application photo to 100KB online free. Resize and compress JPG photo for NEET registration form.', tool: 'compressor', targetKb: 100, examName: 'NEET', category: 'exam', faqs: [{ q: 'What is the photo size for NEET?', a: 'NEET requires a JPG photo between 10KB and 100KB for online registration.' }, { q: 'How do I compress my photo to 100KB for NEET?', a: 'Upload your photo, select 100KB target, compress, and upload to the NEET portal.' }] },

  // ── JEE ───────────────────────────────────────────────────────────────────
  examPhotoResizer('jee-photo-resizer',   'JEE Main', 100, 50),
  examPhotoEnhancer('jee-photo-enhancer', 'JEE Main'),
  examSignatureResizer('jee-signature-resizer', 'JEE Main', 50),
  { slug: 'jee-photo-to-100kb', title: 'JEE Photo to 100KB Online Free', h1: 'JEE Photo to 100KB', description: 'Compress JEE Main application photo to 100KB online free for NTA registration.', tool: 'compressor', targetKb: 100, examName: 'JEE Main', category: 'exam', faqs: [{ q: 'What is the photo size for JEE Main?', a: 'JEE Main requires a JPG photo between 10KB and 100KB.' }] },

  // ── CUET ──────────────────────────────────────────────────────────────────
  examPhotoResizer('cuet-photo-resizer',   'CUET', 100, 50),
  examPhotoEnhancer('cuet-photo-enhancer', 'CUET'),
  examSignatureResizer('cuet-signature-resizer', 'CUET', 50),
  { slug: 'cuet-photo-to-100kb', title: 'CUET Photo to 100KB Online Free', h1: 'CUET Photo to 100KB', description: 'Compress CUET application photo to 100KB online free for NTA registration.', tool: 'compressor', targetKb: 100, examName: 'CUET', category: 'exam', faqs: [{ q: 'What is the photo size for CUET?', a: 'CUET requires a JPG photo between 10KB and 200KB.' }] },

  // ── UGC NET ───────────────────────────────────────────────────────────────
  examPhotoResizer('ugc-net-photo-resizer',   'UGC NET', 100, 50),
  examPhotoEnhancer('ugc-net-photo-enhancer', 'UGC NET'),
  examSignatureResizer('ugc-net-signature-resizer', 'UGC NET', 50),
  { ...examPhotoBooth('ugc-net-photo-booth', 'UGC NET'), slug: 'ugc-net-photo-booth' },
  { slug: 'ugc-net-photo-to-100kb', title: 'UGC NET Photo to 100KB Online Free', h1: 'UGC NET Photo to 100KB', description: 'Compress UGC NET application photo to 100KB online free. Resize JPG for NTA UGC NET registration.', tool: 'compressor', targetKb: 100, examName: 'UGC NET', category: 'exam', faqs: [{ q: 'What is the photo size for UGC NET?', a: 'UGC NET requires a JPG photo between 10KB and 100KB for online registration.' }] },

  // ── SET ───────────────────────────────────────────────────────────────────
  examPhotoResizer('set-photo-resizer',   'SET Exam', 100, 50),
  examPhotoEnhancer('set-photo-enhancer', 'SET Exam'),
  examSignatureResizer('set-signature-resizer', 'SET Exam', 50),
  { ...examPhotoBooth('set-photo-booth', 'SET Exam'), slug: 'set-photo-booth' },
  { slug: 'set-photo-to-100kb', title: 'SET Exam Photo to 100KB Online Free', h1: 'SET Photo to 100KB', description: 'Compress SET exam application photo to 100KB online free. Resize and compress JPG photo for SET registration.', tool: 'compressor', targetKb: 100, examName: 'SET Exam', category: 'exam', faqs: [{ q: 'What is the photo size for SET exam?', a: 'Most SET exams require a JPG photo under 100KB for online registration.' }] },

  // ── CAT / XAT / MAT / CMAT ───────────────────────────────────────────────
  examPhotoResizer('cat-photo-resizer',  'CAT', 100, 50),
  examPhotoEnhancer('cat-photo-enhancer','CAT'),
  examPhotoResizer('xat-photo-resizer',  'XAT', 100, 50),
  examPhotoResizer('mat-photo-resizer',  'MAT', 100, 50),
  examPhotoResizer('cmat-photo-resizer', 'CMAT',100, 50),

  // ── CLAT / AILET ──────────────────────────────────────────────────────────
  examPhotoResizer('clat-photo-resizer',   'CLAT',  100, 50),
  examPhotoEnhancer('clat-photo-enhancer', 'CLAT'),
  examPhotoResizer('ailet-photo-resizer',  'AILET', 100, 50),
  examPhotoEnhancer('ailet-photo-enhancer','AILET'),

  // ── GATE / CSIR NET ───────────────────────────────────────────────────────
  examPhotoResizer('gate-photo-resizer',     'GATE',     100, 50),
  examPhotoEnhancer('gate-photo-enhancer',   'GATE'),
  examSignatureResizer('gate-signature-resizer', 'GATE', 50),
  examPhotoResizer('csir-net-photo-resizer',     'CSIR NET', 100, 50),
  examPhotoEnhancer('csir-net-photo-enhancer',   'CSIR NET'),

  // ── UPSC ──────────────────────────────────────────────────────────────────
  examPhotoResizer('upsc-photo-resizer',   'UPSC', 100, 50),
  examPhotoEnhancer('upsc-photo-enhancer', 'UPSC'),
  examSignatureResizer('upsc-signature-resizer', 'UPSC', 50),
  { ...examPhotoBooth('upsc-photo-booth', 'UPSC'), slug: 'upsc-photo-booth' },
  { slug: 'upsc-photo-to-100kb', title: 'UPSC Photo to 100KB Online Free', h1: 'UPSC Photo to 100KB', description: 'Compress UPSC application photo to 100KB free. Resize JPG for UPSC CSE, IAS online registration.', tool: 'compressor', targetKb: 100, examName: 'UPSC', category: 'exam', faqs: [{ q: 'What is the UPSC photo size requirement?', a: 'UPSC requires a JPG photo between 20KB and 300KB with white background.' }] },

  // ── SSC ───────────────────────────────────────────────────────────────────
  examPhotoResizer('ssc-cgl-photo-resizer',  'SSC CGL',  100, 50),
  examPhotoResizer('ssc-chsl-photo-resizer', 'SSC CHSL', 100, 50),
  examPhotoResizer('ssc-gd-photo-resizer',   'SSC GD',   100, 50),
  examPhotoResizer('ssc-mts-photo-resizer',  'SSC MTS',  100, 50),
  examPhotoResizer('ssc-cpo-photo-resizer',  'SSC CPO',  100, 50),
  examPhotoEnhancer('ssc-photo-enhancer',    'SSC'),
  examSignatureResizer('ssc-signature-resizer', 'SSC', 50),
  { ...examPhotoBooth('ssc-photo-booth', 'SSC'), slug: 'ssc-photo-booth' },

  // ── Railway / RRB ─────────────────────────────────────────────────────────
  examPhotoResizer('railway-rrb-photo-resizer', 'Railway RRB',  100, 50),
  examPhotoResizer('rrb-ntpc-photo-resizer',    'RRB NTPC',     100, 50),
  examPhotoResizer('rrb-group-d-photo-resizer', 'RRB Group D',  100, 50),
  examPhotoEnhancer('rrb-photo-enhancer',       'RRB'),
  examSignatureResizer('rrb-signature-resizer', 'RRB', 50),

  // ── Banking ───────────────────────────────────────────────────────────────
  examPhotoResizer('ibps-po-photo-resizer',    'IBPS PO',    100, 50),
  examPhotoResizer('ibps-clerk-photo-resizer', 'IBPS Clerk', 100, 50),
  examPhotoResizer('sbi-po-photo-resizer',     'SBI PO',     100, 50),
  examPhotoResizer('sbi-clerk-photo-resizer',  'SBI Clerk',  100, 50),
  examPhotoResizer('rbi-grade-b-photo-resizer','RBI Grade B',100, 50),
  examPhotoResizer('lic-aao-photo-resizer',    'LIC AAO',    100, 50),
  examPhotoEnhancer('bank-exam-photo-enhancer','Bank Exam'),
  examSignatureResizer('bank-exam-signature-resizer','Bank Exam', 50),

  // ── Kerala PSC ────────────────────────────────────────────────────────────
  examPhotoResizer('kerala-psc-photo-resizer',        'Kerala PSC', 100, 50),
  examPhotoEnhancer('kerala-psc-photo-enhancer',      'Kerala PSC'),
  examSignatureResizer('kerala-psc-signature-resizer','Kerala PSC', 50),
  { ...examPhotoBooth('kerala-psc-photo-booth', 'Kerala PSC'), slug: 'kerala-psc-photo-booth' },
  { slug: 'kerala-psc-photo-to-100kb',        title: 'Kerala PSC Photo to 100KB Online Free', h1: 'Kerala PSC Photo to 100KB', description: 'Compress Kerala PSC Thulasi photo to 100KB free. Resize JPG for Kerala PSC online registration.', tool: 'compressor', targetKb: 100, examName: 'Kerala PSC', category: 'exam', faqs: [{ q: 'What is the Kerala PSC photo size?', a: 'Kerala PSC Thulasi profile requires a JPG photo under 100KB.' }, { q: 'How do I upload photo to Kerala PSC Thulasi?', a: 'Compress your photo to under 100KB using this tool, then upload to the Thulasi profile.' }] },
  { slug: 'kerala-psc-thulasi-photo-resizer', title: 'Kerala PSC Thulasi Photo Resizer Free',  h1: 'Kerala PSC Thulasi Photo Resizer', description: 'Resize and compress photos for Kerala PSC Thulasi profile online free. Reduce to required KB instantly.', tool: 'compressor', targetKb: 100, examName: 'Kerala PSC', category: 'exam', faqs: [{ q: 'What photo size does Thulasi accept?', a: 'Kerala PSC Thulasi accepts JPG photos under 100KB. Dimensions should be passport size.' }] },

  // ── Other State PSCs ──────────────────────────────────────────────────────
  examPhotoResizer('tnpsc-photo-resizer', 'TNPSC', 100, 50),
  examPhotoEnhancer('tnpsc-photo-enhancer','TNPSC'),
  examPhotoResizer('kpsc-photo-resizer',  'KPSC',  100, 50),
  examPhotoResizer('mpsc-photo-resizer',  'MPSC',  100, 50),
  examPhotoResizer('appsc-photo-resizer', 'APPSC', 100, 50),
  examPhotoResizer('wbpsc-photo-resizer', 'WBPSC', 100, 50),
  examPhotoResizer('bpsc-photo-resizer',  'BPSC',  100, 50),
  examPhotoResizer('uppsc-photo-resizer', 'UPPSC', 100, 50),
]

export function getLandingPage(slug: string) {
  return LANDING_PAGES.find((page) => page.slug === slug)
}
