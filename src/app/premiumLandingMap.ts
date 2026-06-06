// premiumLandingMap.ts
// Master premium landing map.

export type PremiumEntry = {
  slug: string
  h1: string
  title: string
  description: string
  intro: {
    eyebrow: string
    tagline: string
    copy: string
  }
  howTo: string[]
  beforeAfter: string
  faqs: { q: string; a: string }[]
}

const PREMIUM_LANDING_SOURCE: Record<string, PremiumEntry> = {
// ─────────────────────────────────────────────
  // OLD PHOTO CLUSTER
  // ─────────────────────────────────────────────

  'old-photo-enhancer': {
    slug: 'old-photo-enhancer',
    h1: 'Old Photo Enhancer',
    title: 'Old Photo Enhancer — Restore and Enhance Old Photos Online',
    description: 'Enhance and restore old photos online. Fix blur, recover lost detail, and preserve the moments that matter most.',
    intro: {
      eyebrow: 'AI Photo Restoration',
      tagline: 'That photo survived fifty years in a drawer. Let it survive fifty more.',
      copy: 'Old photos carry more than an image. They carry voices, rooms, and days that will never come back. Upload your photo and let the AI recover every detail time tried to take away.',
    },
    howTo: [
      'Upload your old JPG, PNG or WebP photo.',
      'Select AI Enhancement mode.',
      'Preview the restored result and download.',
    ],
    beforeAfter: 'A faded, cracked old photo becomes a sharp, clear image ready to frame or share.',
    faqs: [
      { q: 'How do I enhance an old photo?', a: 'Upload your old photo and select AI Enhancement. The tool recovers detail, reduces grain, and sharpens the image automatically.' },
      { q: 'Can I restore a photo that is badly damaged?', a: 'Yes. Upload the damaged photo and the AI will restore detail, fix blur, and reduce visible damage.' },
      { q: 'Is the photo sent to a server?', a: 'Your photo is processed securely. It is not stored or shared.' },
    ],
  },

  'restore-old-photo-online': {
    slug: 'restore-old-photo-online',
    h1: 'Restore Old Photo Online',
    title: 'Restore Old Photo Online — AI Photo Restoration',
    description: 'Restore old photos online using AI. Recover faded detail, fix cracks, and bring old memories back to life.',
    intro: {
      eyebrow: 'AI Photo Restoration',
      tagline: 'It faded slowly. Restore it all at once.',
      copy: 'Years of sitting in albums and boxes took their toll. One upload gives the AI everything it needs to bring that photo back — sharper, cleaner, and worthy of the moment it captured.',
    },
    howTo: [
      'Upload your faded or damaged photo.',
      'Select AI Restoration mode.',
      'Preview and download the restored image.',
    ],
    beforeAfter: 'A faded, barely visible old photo restored to sharp, clear detail in one step.',
    faqs: [
      { q: 'How does online photo restoration work?', a: 'The AI analyses the image, recovers lost detail, reduces grain and blur, and outputs a clean restored version.' },
      { q: 'What photo formats are supported?', a: 'JPG, PNG, and WebP are all supported.' },
      { q: 'How long does restoration take?', a: 'Most photos are restored in under a minute.' },
    ],
  },

  'old-photo-to-new-photo': {
    slug: 'old-photo-to-new-photo',
    h1: 'Old Photo to New Photo',
    title: 'Old Photo to New Photo — AI Enhancement Online',
    description: 'Convert old photos to new quality online. AI restores detail, removes damage, and makes old photos look new again.',
    intro: {
      eyebrow: 'AI Photo Enhancement',
      tagline: 'Old moment. New clarity. Same memory.',
      copy: 'The memory never aged. The photo did. Upload your old image and the AI brings it forward — same moment, same faces, same feeling — just finally clear enough to see properly.',
    },
    howTo: [
      'Upload your old photo.',
      'Select AI Enhancement mode.',
      'Download the enhanced new version.',
    ],
    beforeAfter: 'A worn, faded old photo transformed into a vivid, clear, new-quality image.',
    faqs: [
      { q: 'Can AI make an old photo look new?', a: 'Yes. The AI removes grain, repairs damage, sharpens detail, and outputs a clean modern-quality version of the original.' },
      { q: 'Will the photo look natural after enhancement?', a: 'The AI preserves the original look and feel while improving clarity and removing damage.' },
      { q: 'Is this free to use?', a: 'A preview is available. Full resolution download requires a premium credit.' },
    ],
  },

  'make-old-photo-look-new': {
    slug: 'make-old-photo-look-new',
    h1: 'Make Old Photo Look New',
    title: 'Make Old Photo Look New — AI Photo Restoration Online',
    description: 'Make old photos look new with AI. Restore faded colours, recover detail, and give old images the quality they deserve.',
    intro: {
      eyebrow: 'AI Photo Restoration',
      tagline: 'It looked better in your memory. Now it can match.',
      copy: 'Memory keeps every photo sharp. The actual print does not always agree. Upload your old photo and let the AI close that gap — so the image finally looks as good as the moment felt.',
    },
    howTo: [
      'Upload your old photo.',
      'Choose AI Enhancement mode.',
      'Preview and download your restored image.',
    ],
    beforeAfter: 'A dull, aged photo brought back to vivid, new-looking quality without losing its original character.',
    faqs: [
      { q: 'How do I make an old photo look new?', a: 'Upload the photo and select AI Enhancement. The tool sharpens, repairs, and restores the image to a clean modern quality.' },
      { q: 'Does it change the original photo?', a: 'No. The original is never altered. You download a new enhanced version.' },
      { q: 'What resolution will the output be?', a: 'Output resolution depends on the selected tier — from HD up to 8K.' },
    ],
  },

  'repair-old-photo-online': {
    slug: 'repair-old-photo-online',
    h1: 'Repair Old Photo Online',
    title: 'Repair Old Photo Online — Fix Damaged Photos with AI',
    description: 'Repair old and damaged photos online using AI. Fix scratches, cracks, fading, and blur in one step.',
    intro: {
      eyebrow: 'AI Photo Repair',
      tagline: 'Time damaged it. Let us repair it well.',
      copy: 'Scratches, cracks, water stains, and decades of fading — old photos carry a lot of damage. Upload yours and the AI repairs what time did, restoring the image to the way it was meant to be seen.',
    },
    howTo: [
      'Upload your damaged old photo.',
      'Select AI Repair mode.',
      'Preview the repaired photo and download.',
    ],
    beforeAfter: 'A photo full of scratches and fading repaired to a clean, clear, damage-free image.',
    faqs: [
      { q: 'Can AI repair a scratched photo?', a: 'Yes. The AI detects and repairs scratches, cracks, stains, and other physical damage automatically.' },
      { q: 'How badly damaged can the photo be?', a: 'The AI works best on photos where the main subject is still visible. Heavily destroyed photos may have partial restoration.' },
      { q: 'Will repaired areas look natural?', a: 'The AI fills damaged areas using surrounding detail to keep the result looking natural and consistent.' },
    ],
  },

  'old-picture-restoration': {
    slug: 'old-picture-restoration',
    h1: 'Old Picture Restoration',
    title: 'Old Picture Restoration Online — AI Powered',
    description: 'Restore old pictures online with AI. Recover detail, fix damage, and preserve old images for generations.',
    intro: {
      eyebrow: 'AI Picture Restoration',
      tagline: 'That picture held a whole life in it. Give it back its detail.',
      copy: 'Some pictures hold more than a face. They hold a whole era — a home, a relationship, a world that no longer exists. Upload your old picture and the AI restores every detail that belongs to that world.',
    },
    howTo: [
      'Upload your old picture.',
      'Select AI Restoration mode.',
      'Download the restored image.',
    ],
    beforeAfter: 'A cracked, faded old picture restored to a clean, detailed, frame-worthy image.',
    faqs: [
      { q: 'How does old picture restoration work?', a: 'AI analyses the image structure, repairs damage, and reconstructs missing or degraded detail automatically.' },
      { q: 'Can I restore a very old picture from the 1900s?', a: 'Yes. The AI is trained to restore very old photographs including early 20th century prints.' },
      { q: 'What file size should I upload?', a: 'Any file size works. Larger originals generally give better restored results.' },
    ],
  },

  'old-family-photo-restoration': {
    slug: 'old-family-photo-restoration',
    h1: 'Old Family Photo Restoration',
    title: 'Old Family Photo Restoration Online — AI Powered',
    description: 'Restore old family photos online. Recover every face, fix damage, and preserve family memories for generations.',
    intro: {
      eyebrow: 'AI Family Photo Restoration',
      tagline: 'They all showed up that day. Restore every face that did.',
      copy: 'Family photos are the only proof some gatherings ever happened. Upload yours and the AI restores every face in that room — the ones you see every day and the ones you only have in photographs now.',
    },
    howTo: [
      'Upload your old family photo.',
      'Select AI Restoration mode.',
      'Preview every face restored and download.',
    ],
    beforeAfter: 'A faded family photo with barely visible faces restored to a clear image where every person is recognisable.',
    faqs: [
      { q: 'Can AI restore multiple faces in one photo?', a: 'Yes. The AI detects and enhances all faces in a group photo simultaneously.' },
      { q: 'What if some family members are blurry?', a: 'The AI focuses on face detail restoration and sharpens each face independently within the same image.' },
      { q: 'Can I print the restored photo?', a: 'Yes. The enhanced output is suitable for printing and framing.' },
    ],
  },

  'old-portrait-restoration': {
    slug: 'old-portrait-restoration',
    h1: 'Old Portrait Restoration',
    title: 'Old Portrait Restoration Online — AI Powered',
    description: 'Restore old portrait photos online. Recover face detail, fix fading, and preserve portraits with the quality they deserve.',
    intro: {
      eyebrow: 'AI Portrait Restoration',
      tagline: 'That face deserves to be seen clearly. Now it is time.',
      copy: 'A portrait is a moment of trust. Someone sat still, looked into a camera, and let themselves be remembered. Upload that portrait and the AI restores every detail of the face that was worth preserving.',
    },
    howTo: [
      'Upload your old portrait photo.',
      'Select AI Portrait Restoration mode.',
      'Download the restored portrait.',
    ],
    beforeAfter: 'A faded, damaged old portrait restored to a sharp, clear image with full face detail.',
    faqs: [
      { q: 'How does portrait restoration differ from general photo restoration?', a: 'Portrait restoration applies specialised face enhancement algorithms that recover fine facial detail, skin texture, and expression with higher precision.' },
      { q: 'Can I restore a formal painted-style portrait photo?', a: 'Yes. The AI works on all portrait styles including formal, casual, and studio portraits.' },
      { q: 'What output resolution is available?', a: 'Output ranges from HD to 8K depending on the selected tier.' },
    ],
  },

  'old-blurry-photo-clear': {
    slug: 'old-blurry-photo-clear',
    h1: 'Make Old Blurry Photo Clear',
    title: 'Make Old Blurry Photo Clear Online — AI Powered',
    description: 'Clear old blurry photos online with AI. Remove blur, sharpen detail, and recover the moment hidden inside the photo.',
    intro: {
      eyebrow: 'AI Blur Removal',
      tagline: 'The blur was never the story. Clear it and find what was.',
      copy: 'Old cameras, low light, motion — blur found its way into photos for many reasons. Upload your old blurry photo and the AI removes the blur and reveals the image that was always underneath it.',
    },
    howTo: [
      'Upload your old blurry photo.',
      'Select AI Sharpen mode.',
      'Preview the cleared photo and download.',
    ],
    beforeAfter: 'A blurry, unrecognisable old photo cleared to a sharp, detailed image.',
    faqs: [
      { q: 'Can AI clear a very blurry old photo?', a: 'Yes. The AI analyses motion blur, focus blur, and age-related softness and applies targeted sharpening to each.' },
      { q: 'Will clearing the blur reveal the original detail?', a: 'In most cases yes. The AI reconstructs detail from available image data. Severely blurry images may have partial recovery.' },
      { q: 'Does the sharpening look natural?', a: 'The AI uses controlled sharpening to avoid over-processing. Results look clean and natural.' },
    ],
  },

  'make-old-photo-clear': {
    slug: 'make-old-photo-clear',
    h1: 'Make Old Photo Clear',
    title: 'Make Old Photo Clear Online — AI Photo Clarifier',
    description: 'Make old photos clear online with AI. Remove blur, recover sharpness, and see every detail in your old photos again.',
    intro: {
      eyebrow: 'AI Photo Clarifier',
      tagline: 'It was clear in your heart all along. Now make it clear everywhere.',
      copy: 'You always knew what that photo showed. The blur just made it hard to prove to others. Upload it and the AI removes the haze, the softness, and the years — leaving only what was always there.',
    },
    howTo: [
      'Upload your old unclear photo.',
      'Select AI Clarity mode.',
      'Download the clear, sharp version.',
    ],
    beforeAfter: 'A hazy, unclear old photo made sharp and clear with full detail recovered.',
    faqs: [
      { q: 'How do I make an old photo clear?', a: 'Upload the photo and select AI Clarity mode. The tool removes haze, blur, and softness automatically.' },
      { q: 'Can this work on very small old photos?', a: 'Yes. The AI upscales and sharpens simultaneously, so small originals can produce large clear outputs.' },
      { q: 'Is quality guaranteed?', a: 'Preview before downloading so you can see the result before committing.' },
    ],
  },

  'enhance-old-family-photo': {
    slug: 'enhance-old-family-photo',
    h1: 'Enhance Old Family Photo',
    title: 'Enhance Old Family Photo Online — AI Powered',
    description: 'Enhance old family photos online. Recover every face and detail so family memories stay vivid for generations.',
    intro: {
      eyebrow: 'AI Family Photo Enhancement',
      tagline: 'The family gathered. The camera tried. Let us finish the job.',
      copy: 'Family gatherings rarely happen on schedule. When they do, every photo from that day is worth preserving well. Upload your old family photo and let the AI enhance every face, every smile, every person who showed up.',
    },
    howTo: [
      'Upload your old family photo.',
      'Select AI Enhancement mode.',
      'Download the enhanced family photo.',
    ],
    beforeAfter: 'An old faded family photo with unclear faces enhanced to a vivid, sharp image where everyone is visible.',
    faqs: [
      { q: 'Can AI enhance a large group family photo?', a: 'Yes. The AI processes all faces and areas of the image simultaneously regardless of group size.' },
      { q: 'What if the family photo is very old?', a: 'The AI is built for old photo restoration and performs well on photographs from decades past.' },
      { q: 'Can I enhance and then print?', a: 'Yes. The output is print-ready at the selected resolution.' },
    ],
  },

  'restore-faded-photo': {
    slug: 'restore-faded-photo',
    h1: 'Restore Faded Photo',
    title: 'Restore Faded Photo Online — AI Photo Restoration',
    description: 'Restore faded photos online with AI. Recover lost colour, contrast, and detail from photos that time has faded.',
    intro: {
      eyebrow: 'AI Faded Photo Restoration',
      tagline: 'Faded outside. Never faded inside. Restore it the way it deserves.',
      copy: 'Fading happens slowly and then all at once. Colours drain, contrast disappears, faces become pale outlines. Upload your faded photo and the AI brings back the depth, the contrast, and the colour that belonged there.',
    },
    howTo: [
      'Upload your faded photo.',
      'Select AI Restoration mode.',
      'Preview and download the restored image.',
    ],
    beforeAfter: 'A washed-out, pale faded photo restored to rich, vivid colour and clear contrast.',
    faqs: [
      { q: 'Can AI restore the colour in a faded photo?', a: 'Yes. The AI analyses the remaining colour data and restores the original tone and contrast of the image.' },
      { q: 'What causes photo fading?', a: 'Exposure to light, heat, moisture, and age all cause photo fading over time.' },
      { q: 'Will the restored colours look accurate?', a: 'The AI reconstructs colour based on the original image data. Results are natural and consistent.' },
    ],
  },

  'restore-damaged-photo': {
    slug: 'restore-damaged-photo',
    h1: 'Restore Damaged Photo',
    title: 'Restore Damaged Photo Online — AI Photo Repair',
    description: 'Restore damaged photos online. Fix scratches, tears, stains, and fading with AI photo repair technology.',
    intro: {
      eyebrow: 'AI Photo Repair',
      tagline: 'Damaged by time. Not by memory. Restore it well.',
      copy: 'Water, fire, age, careless storage — photos get damaged in many ways. But damage to a photo is never damage to what it holds. Upload yours and let the AI repair the surface so the memory underneath can be seen again.',
    },
    howTo: [
      'Upload your damaged photo.',
      'Select AI Repair mode.',
      'Download the restored, damage-free image.',
    ],
    beforeAfter: 'A heavily damaged photo with tears and stains restored to a clean, clear, damage-free image.',
    faqs: [
      { q: 'What types of damage can AI repair?', a: 'Scratches, cracks, tears, water stains, mould spots, and general physical damage are all handled by the AI repair engine.' },
      { q: 'Can a completely torn photo be restored?', a: 'If enough of the original image remains visible, the AI can reconstruct and restore it significantly.' },
      { q: 'Does the repair affect the rest of the image?', a: 'No. The AI targets only damaged areas and preserves the untouched parts of the original image.' },
    ],
  },

  'ai-old-photo-restoration': {
    slug: 'ai-old-photo-restoration',
    h1: 'AI Old Photo Restoration',
    title: 'AI Old Photo Restoration Online — Powered by CodeFormer',
    description: 'AI-powered old photo restoration online. Using CodeFormer and RealESRGAN to recover detail, repair damage, and restore old photos.',
    intro: {
      eyebrow: 'AI Photo Restoration',
      tagline: 'Fifty years of fading. One upload to bring it back.',
      copy: 'This is not a filter. The AI analyses your photo at a deep level — detecting faces, recovering texture, repairing structure — and outputs a version of your photo that looks the way it should have been preserved all along.',
    },
    howTo: [
      'Upload your old photo.',
      'Select resolution — HD, 4K, or 8K.',
      'Download the AI-restored image.',
    ],
    beforeAfter: 'A severely degraded old photo processed by AI to recover full face detail and image clarity.',
    faqs: [
      { q: 'What AI models power the restoration?', a: 'CodeFormer handles face restoration and RealESRGAN handles overall image upscaling and enhancement.' },
      { q: 'How is this different from basic photo editing?', a: 'AI restoration reconstructs detail that is actually missing in the original — not just sharpening what is there.' },
      { q: 'What resolutions are available?', a: 'HD, 2K, 4K, and 8K output resolutions are available.' },
    ],
  },

  'old-photo-quality-enhancer': {
    slug: 'old-photo-quality-enhancer',
    h1: 'Old Photo Quality Enhancer',
    title: 'Old Photo Quality Enhancer Online — AI Powered',
    description: 'Enhance the quality of old photos online. AI improves sharpness, detail, and clarity of old low-quality images.',
    intro: {
      eyebrow: 'AI Quality Enhancement',
      tagline: 'The quality was never the memory. Now let both match.',
      copy: 'Old photos were limited by the cameras and film of their time. The memories they hold were not. Upload your old photo and the AI closes the gap — giving the image the quality that the moment always deserved.',
    },
    howTo: [
      'Upload your old low-quality photo.',
      'Select AI Quality Enhancement.',
      'Preview and download the high-quality result.',
    ],
    beforeAfter: 'A low-quality, grainy old photo enhanced to a sharp, clean, high-quality image.',
    faqs: [
      { q: 'How much can AI improve old photo quality?', a: 'Significant improvement is possible. The AI recovers texture, sharpness, and detail even from very low quality originals.' },
      { q: 'Can I enhance a very small old photo?', a: 'Yes. The AI upscales and enhances simultaneously, producing large high-quality output from small originals.' },
      { q: 'Is there a file size limit?', a: 'Files up to a reasonable size are accepted. Very large files may be resized before processing.' },
    ],
  },

// ─────────────────────────────────────────────
  // RESOLUTION CLUSTER
  // ─────────────────────────────────────────────

  'old-photo-hd-converter': {
    slug: 'old-photo-hd-converter',
    h1: 'Old Photo HD Converter',
    title: 'Old Photo HD Converter Online — AI Powered',
    description: 'Convert old photos to HD quality online. AI upscales and enhances old photos to high definition resolution.',
    intro: {
      eyebrow: 'AI HD Conversion',
      tagline: 'It survived this long in low quality. Time to give it what it deserves.',
      copy: 'HD is not about making photos look digital. It is about seeing clearly what was always there. Upload your old photo and the AI converts it to HD — every face, every background, every detail brought into proper focus.',
    },
    howTo: ['Upload your old photo.', 'Select HD output resolution.', 'Download the HD converted image.'],
    beforeAfter: 'A small, soft old photo converted to a sharp, full HD image with clear detail throughout.',
    faqs: [
      { q: 'What is the output resolution for HD conversion?', a: 'HD output is 1920px on the long edge. Higher resolutions up to 8K are also available.' },
      { q: 'Will the HD version look natural?', a: 'Yes. The AI enhances without over-sharpening. Results look natural and film-like.' },
      { q: 'Can any old photo be converted to HD?', a: 'Most old photos benefit significantly. Very severely damaged originals may have limited results.' },
    ],
  },

  'old-photo-to-4k': {
    slug: 'old-photo-to-4k',
    h1: 'Old Photo to 4K',
    title: 'Old Photo to 4K Online — AI Upscaling',
    description: 'Convert old photos to 4K resolution online. AI upscales old photographs to cinema-quality 4K output.',
    intro: {
      eyebrow: 'AI 4K Upscaling',
      tagline: 'That memory was 4K all along. The photo just never showed it.',
      copy: 'Every detail that camera captured is still in your photo — buried under decades of compression, fading, and low resolution. Upload it and the AI reconstructs the full 4K version of what was actually there that day.',
    },
    howTo: ['Upload your old photo.', 'Select 4K output resolution.', 'Download the 4K enhanced image.'],
    beforeAfter: 'A small, blurry old photo upscaled to a sharp, vivid 4K image with recovered detail.',
    faqs: [
      { q: 'Can any old photo be upscaled to 4K?', a: 'Yes. The AI generates realistic 4K detail based on the original image content.' },
      { q: 'How does 4K upscaling work?', a: 'RealESRGAN reconstructs high-frequency detail at 4K resolution using deep learning trained on millions of images.' },
      { q: 'Is 4K output suitable for large prints?', a: 'Yes. 4K output prints well up to very large sizes.' },
    ],
  },

  'old-photo-to-8k': {
    slug: 'old-photo-to-8k',
    h1: 'Old Photo to 8K',
    title: 'Old Photo to 8K Online — AI Ultra Upscaling',
    description: 'Convert old photos to 8K resolution online. AI ultra-upscaling brings old photographs to stunning 8K quality.',
    intro: {
      eyebrow: 'AI 8K Ultra Upscaling',
      tagline: 'Every detail was there that day. Let us find them all again.',
      copy: 'At 8K every texture, every strand of hair, every wrinkle in a shirt becomes visible. Upload your old photo and the AI reconstructs the full 8K version — a level of detail the original camera could never have produced.',
    },
    howTo: ['Upload your old photo.', 'Select 8K output resolution.', 'Download the 8K ultra-enhanced image.'],
    beforeAfter: 'A small old photo reconstructed at 8K resolution with extraordinary detail and clarity.',
    faqs: [
      { q: 'What is the output size for 8K?', a: '8K output is 7680px on the long edge — suitable for cinema displays and very large wall prints.' },
      { q: 'Does 8K upscaling look realistic?', a: 'The AI generates realistic texture and detail that stays true to the original image content.' },
      { q: 'How long does 8K processing take?', a: '8K processing runs on GPU and typically completes in under two minutes.' },
    ],
  },

  'restore-vintage-photo': {
    slug: 'restore-vintage-photo',
    h1: 'Restore Vintage Photo',
    title: 'Restore Vintage Photo Online — AI Powered',
    description: 'Restore vintage photos online. Recover the warmth, detail, and character of vintage photographs with AI.',
    intro: {
      eyebrow: 'AI Vintage Photo Restoration',
      tagline: 'Vintage is the feeling. Clarity is the respect it earns.',
      copy: 'Vintage photos have a soul that modern cameras cannot recreate. That soul deserves to be seen clearly. Upload your vintage photo and the AI restores its detail without taking away the warmth and character that makes it irreplaceable.',
    },
    howTo: ['Upload your vintage photo.', 'Select AI Restoration mode.', 'Download the restored vintage image.'],
    beforeAfter: 'A faded vintage photo restored to full detail while preserving its original warm, authentic character.',
    faqs: [
      { q: 'Will restoring a vintage photo remove its vintage look?', a: 'No. The AI enhances clarity and repairs damage while preserving the original tone and character of the image.' },
      { q: 'Can I restore a sepia vintage photo?', a: 'Yes. The AI works on sepia, black and white, and colour vintage photographs.' },
      { q: 'What era of vintage photos does this support?', a: 'From early 20th century prints through to 1990s photographs — all are supported.' },
    ],
  },

  'enhance-vintage-photo': {
    slug: 'enhance-vintage-photo',
    h1: 'Enhance Vintage Photo',
    title: 'Enhance Vintage Photo Online — AI Powered',
    description: 'Enhance vintage photos online. Sharpen detail, restore character, and give vintage photographs the quality they earned.',
    intro: {
      eyebrow: 'AI Vintage Enhancement',
      tagline: 'It aged with grace. Now let it shine with it too.',
      copy: 'A great vintage photo has a quality that no modern filter can replicate. Upload yours and the AI enhances what time softened — not to make it look new, but to make it look as good as it always should have.',
    },
    howTo: ['Upload your vintage photo.', 'Select AI Enhancement mode.', 'Preview and download the enhanced image.'],
    beforeAfter: 'A soft, faded vintage photo enhanced to clear, vivid detail with its original character fully intact.',
    faqs: [
      { q: 'How does vintage photo enhancement differ from restoration?', a: 'Enhancement improves quality without major repair work. Restoration focuses on fixing physical damage. Both are available.' },
      { q: 'Can I enhance a black and white vintage photo?', a: 'Yes. Black and white vintage photos are enhanced for sharpness, contrast, and grain reduction.' },
      { q: 'Will the vintage feel be preserved?', a: 'Yes. The AI detects vintage characteristics and enhances within that aesthetic.' },
    ],
  },

  'photo-to-hd': {
    slug: 'photo-to-hd',
    h1: 'Photo to HD',
    title: 'Photo to HD Online — AI HD Upscaling',
    description: 'Convert any photo to HD quality online. AI upscales and enhances photos to sharp, clear high definition.',
    intro: {
      eyebrow: 'AI HD Upscaling',
      tagline: 'The moment was sharp. Now let the photo say the same.',
      copy: 'HD is not a luxury for special photos. Every photo that holds a real moment deserves to be seen in full clarity. Upload yours and the AI delivers a sharp, clean HD version in seconds.',
    },
    howTo: ['Upload your photo.', 'Select HD output.', 'Download the HD enhanced image.'],
    beforeAfter: 'A standard resolution photo converted to a sharp, clear HD image with full detail.',
    faqs: [
      { q: 'What counts as HD resolution?', a: 'HD is 1920px on the long edge. The AI outputs at this resolution or higher depending on the selected tier.' },
      { q: 'Can I convert a phone photo to HD?', a: 'Yes. Phone photos are enhanced and upscaled to HD quality automatically.' },
      { q: 'How long does HD conversion take?', a: 'Most photos process in under 60 seconds.' },
    ],
  },

  'photo-to-4k': {
    slug: 'photo-to-4k',
    h1: 'Photo to 4K',
    title: 'Photo to 4K Online — AI 4K Upscaling',
    description: 'Convert any photo to 4K online. AI upscaling brings your photos to stunning 4K resolution with natural detail.',
    intro: {
      eyebrow: 'AI 4K Upscaling',
      tagline: 'It was the best day. The photo should say so. Time has come.',
      copy: 'Some photos deserve more than a small screen view. They deserve to be seen at full size, full detail, full clarity. Upload your photo and the AI produces a 4K version worthy of the moment it captured.',
    },
    howTo: ['Upload your photo.', 'Select 4K output resolution.', 'Download the 4K enhanced image.'],
    beforeAfter: 'A standard photo upscaled to 4K with rich detail and sharp clarity throughout.',
    faqs: [
      { q: 'Can I upscale a low resolution photo to 4K?', a: 'Yes. The AI generates realistic 4K detail even from low resolution source images.' },
      { q: 'Is 4K output suitable for TV display?', a: 'Yes. 4K output displays perfectly on 4K TVs and monitors.' },
      { q: 'Does upscaling introduce artefacts?', a: 'The AI uses natural detail generation to avoid common upscaling artefacts.' },
    ],
  },

  'photo-to-8k': {
    slug: 'photo-to-8k',
    h1: 'Photo to 8K',
    title: 'Photo to 8K Online — AI Ultra Upscaling',
    description: 'Convert any photo to 8K resolution online. AI ultra-upscaling delivers extraordinary detail at 8K quality.',
    intro: {
      eyebrow: 'AI 8K Upscaling',
      tagline: 'Every smile. Every crease. Every light. Preserve them all.',
      copy: 'At 8K nothing is hidden. Every texture, every detail, every nuance of the original moment becomes visible. Upload your photo and the AI delivers the full 8K version — as close to being there as a photo can get.',
    },
    howTo: ['Upload your photo.', 'Select 8K output resolution.', 'Download the 8K enhanced image.'],
    beforeAfter: 'A standard photo transformed to 8K with extraordinary sharpness and detail throughout.',
    faqs: [
      { q: 'What screen do I need to view 8K?', a: 'An 8K monitor shows the full resolution. On lower resolution screens the image still appears sharper than the original.' },
      { q: 'Is 8K output suitable for billboard printing?', a: 'Yes. 8K output is suitable for very large format printing including posters and billboards.' },
      { q: 'How does 8K differ from 4K output?', a: '8K has four times the pixel count of 4K, delivering significantly more detail at large sizes.' },
    ],
  },

  'image-to-hd': {
    slug: 'image-to-hd',
    h1: 'Image to HD',
    title: 'Image to HD Online — AI HD Converter',
    description: 'Convert images to HD quality online. AI enhances and upscales any image to sharp, clear high definition.',
    intro: {
      eyebrow: 'AI HD Converter',
      tagline: 'Good image. Better memory. Best clarity. Do it well.',
      copy: 'HD makes the difference between an image you glance at and one you stop for. Upload any image and the AI delivers the HD version — clear, sharp, and ready for any screen or print.',
    },
    howTo: ['Upload your image.', 'Select HD conversion.', 'Download the HD quality image.'],
    beforeAfter: 'A soft, low-resolution image converted to a crisp, clear HD output.',
    faqs: [
      { q: 'What image formats can be converted to HD?', a: 'JPG, PNG, and WebP are all supported.' },
      { q: 'Does HD conversion work on illustrations and graphics?', a: 'Yes. The AI works on photographs, illustrations, and graphic images.' },
      { q: 'Can I convert a screenshot to HD?', a: 'Yes. Screenshots are upscaled and enhanced to HD quality.' },
    ],
  },

  'image-to-4k': {
    slug: 'image-to-4k',
    h1: 'Image to 4K',
    title: 'Image to 4K Online — AI 4K Converter',
    description: 'Convert images to 4K resolution online. AI upscaling delivers sharp, detailed 4K output from any image.',
    intro: {
      eyebrow: 'AI 4K Converter',
      tagline: 'The detail was always there. Just waiting to be seen.',
      copy: 'Every image contains more detail than its original resolution shows. Upload yours and the AI unlocks the 4K version — recovering texture, sharpness, and depth that compression and resolution limits hid.',
    },
    howTo: ['Upload your image.', 'Select 4K conversion.', 'Download the 4K image.'],
    beforeAfter: 'A compressed, low-resolution image converted to a sharp, vivid 4K output.',
    faqs: [
      { q: 'Can any image be converted to 4K?', a: 'Yes. The AI generates realistic 4K detail for any uploaded image.' },
      { q: 'How does image-to-4K differ from simple upscaling?', a: 'AI upscaling reconstructs detail rather than just stretching pixels, producing a natural and sharp result.' },
      { q: 'What is the output file format?', a: 'Output is delivered as a high-quality PNG.' },
    ],
  },

  'image-to-8k': {
    slug: 'image-to-8k',
    h1: 'Image to 8K',
    title: 'Image to 8K Online — AI Ultra Resolution Converter',
    description: 'Convert images to 8K resolution online. AI ultra-upscaling delivers extraordinary 8K detail from any image.',
    intro: {
      eyebrow: 'AI 8K Converter',
      tagline: 'Some moments deserve every pixel they can get.',
      copy: 'Not every image needs 8K. But the ones that do — the portraits, the landscapes, the moments that matter — deserve the full treatment. Upload yours and the AI delivers 8K that shows every detail clearly.',
    },
    howTo: ['Upload your image.', 'Select 8K conversion.', 'Download the 8K ultra-resolution image.'],
    beforeAfter: 'An ordinary image upscaled to 8K with stunning sharpness and natural texture.',
    faqs: [
      { q: 'Is 8K conversion suitable for all image types?', a: 'Yes. Portraits, landscapes, events, and product photos all benefit from 8K conversion.' },
      { q: 'How large is the 8K output file?', a: 'An 8K PNG is typically 10–30MB depending on image content.' },
      { q: 'Can I zoom into an 8K image without losing quality?', a: 'Yes. At 8K you can crop and zoom significantly before quality loss is visible.' },
    ],
  },

  'high-resolution-photo-enhancer': {
    slug: 'high-resolution-photo-enhancer',
    h1: 'High Resolution Photo Enhancer',
    title: 'High Resolution Photo Enhancer Online — AI Powered',
    description: 'Enhance photos to high resolution online. AI delivers sharp, detailed high-resolution output from any photo.',
    intro: {
      eyebrow: 'AI High Resolution Enhancement',
      tagline: 'High resolution is not vanity. It is respect for the moment.',
      copy: 'A moment worth photographing is a moment worth seeing clearly at full resolution. Upload your photo and the AI enhances it to the highest resolution available — every detail visible, every face sharp, every texture real.',
    },
    howTo: ['Upload your photo.', 'Select target resolution — HD, 4K, or 8K.', 'Download the high-resolution enhanced image.'],
    beforeAfter: 'A low-resolution photo enhanced to a high-resolution image with clear, sharp detail throughout.',
    faqs: [
      { q: 'What resolution options are available?', a: 'HD (1920px), 2K (2048px), 4K (4096px), and 8K (7680px) outputs are all available.' },
      { q: 'Can I enhance a photo taken on an old phone?', a: 'Yes. Old phone photos benefit significantly from high-resolution enhancement.' },
      { q: 'Does the enhancement preserve original colours?', a: 'Yes. Colour accuracy is maintained while sharpness and resolution are improved.' },
    ],
  },

  'high-resolution-portrait-enhancer': {
    slug: 'high-resolution-portrait-enhancer',
    h1: 'High Resolution Portrait Enhancer',
    title: 'High Resolution Portrait Enhancer Online — AI Powered',
    description: 'Enhance portrait photos to high resolution online. AI face enhancement delivers sharp, detailed portrait output.',
    intro: {
      eyebrow: 'AI Portrait Resolution Enhancement',
      tagline: 'That face at full resolution. That is the goal.',
      copy: 'A portrait at high resolution shows what a portrait is actually for — the eyes, the expression, the detail of a real human face. Upload your portrait and the AI enhances it to the resolution that face deserves.',
    },
    howTo: ['Upload your portrait photo.', 'Select high-resolution output.', 'Download the enhanced portrait.'],
    beforeAfter: 'A soft, low-resolution portrait enhanced to a sharp, high-resolution image with full face detail.',
    faqs: [
      { q: 'Does the AI specifically enhance faces in portraits?', a: 'Yes. CodeFormer face restoration runs on portrait images to maximise face detail quality.' },
      { q: 'What resolution is recommended for portrait printing?', a: '4K or 8K output is recommended for large portrait prints.' },
      { q: 'Can I enhance a portrait for a professional portfolio?', a: 'Yes. The output quality is suitable for professional portfolio use.' },
    ],
  },

  // ─────────────────────────────────────────────
  // FACE CLUSTER
  // ─────────────────────────────────────────────

  'face-photo-enhancer': {
    slug: 'face-photo-enhancer',
    h1: 'Face Photo Enhancer',
    title: 'Face Photo Enhancer Online — AI Face Enhancement',
    description: 'Enhance face photos online with AI. Sharpen facial details, improve clarity, and make face photos look their best.',
    intro: {
      eyebrow: 'AI Face Enhancement',
      tagline: 'That expression lasted a second. Let it last all time.',
      copy: 'The best expressions happen fast and never repeat. Upload your face photo and the AI enhances every detail — the eyes, the skin, the expression — so the moment is preserved with the clarity it deserves.',
    },
    howTo: ['Upload your face photo.', 'Select AI Face Enhancement mode.', 'Download the enhanced photo.'],
    beforeAfter: 'A blurry, low-quality face photo enhanced to a sharp, clear image with full facial detail.',
    faqs: [
      { q: 'How does AI enhance a face photo?', a: 'CodeFormer analyses the face structure and enhances detail, texture, and clarity while preserving the natural expression.' },
      { q: 'Does enhancement work on all skin tones?', a: 'Yes. The AI is trained on diverse face data and works accurately on all skin tones.' },
      { q: 'Can I enhance a face photo for professional use?', a: 'Yes. The output quality is suitable for professional and commercial use.' },
    ],
  },

  'ai-face-enhancer': {
    slug: 'ai-face-enhancer',
    h1: 'AI Face Enhancer',
    title: 'AI Face Enhancer Online — Powered by CodeFormer',
    description: 'AI face enhancer online powered by CodeFormer. Restore and enhance facial detail with state-of-the-art face AI.',
    intro: {
      eyebrow: 'AI Face Restoration',
      tagline: 'The face was perfect. The photo almost got it. Let us finish.',
      copy: 'CodeFormer is trained specifically on human faces. It knows where the detail should be and how it should look. Upload your photo and the AI finishes what the camera started — delivering the face in full, accurate detail.',
    },
    howTo: ['Upload your photo with a face.', 'Select AI Face Enhancement.', 'Download the CodeFormer-enhanced image.'],
    beforeAfter: 'A degraded face photo processed by CodeFormer to recover sharp, natural facial detail.',
    faqs: [
      { q: 'What is CodeFormer?', a: 'CodeFormer is a state-of-the-art AI face restoration model developed by researchers at Nanyang Technological University.' },
      { q: 'Does AI face enhancement look natural?', a: 'CodeFormer is specifically designed for natural, realistic face restoration without the over-smoothed look of older tools.' },
      { q: 'Can it enhance faces in group photos?', a: 'Yes. CodeFormer detects and enhances all faces in a single image.' },
    ],
  },

  'face-quality-enhancer': {
    slug: 'face-quality-enhancer',
    h1: 'Face Quality Enhancer',
    title: 'Face Quality Enhancer Online — AI Powered',
    description: 'Enhance face photo quality online. AI improves sharpness, detail, and clarity of face photos instantly.',
    intro: {
      eyebrow: 'AI Face Quality Enhancement',
      tagline: 'Every face has a moment where it glows. Preserve that moment.',
      copy: 'Quality matters most in face photos. A slightly blurry portrait, a grainy low-light shot, a compressed social photo — all of them hold a real moment that deserves better. Upload yours and the AI gives it the quality it earned.',
    },
    howTo: ['Upload your face photo.', 'Select AI Quality Enhancement.', 'Download the high-quality face photo.'],
    beforeAfter: 'A grainy, low-quality face photo enhanced to a sharp, clear, high-quality portrait.',
    faqs: [
      { q: 'Can AI improve the quality of a face taken in low light?', a: 'Yes. The AI reduces noise and recovers detail from low-light face photos.' },
      { q: 'Will skin look natural after enhancement?', a: 'Yes. The AI preserves natural skin texture and avoids the over-smoothed plastic look.' },
      { q: 'What is the maximum output resolution?', a: 'Up to 8K output is available depending on the selected tier.' },
    ],
  },

  'make-face-photo-clear': {
    slug: 'make-face-photo-clear',
    h1: 'Make Face Photo Clear',
    title: 'Make Face Photo Clear Online — AI Face Clarity',
    description: 'Make face photos clear online with AI. Remove blur and recover sharp facial detail from any face photo.',
    intro: {
      eyebrow: 'AI Face Clarity',
      tagline: 'Blurry photo. Crystal clear memory. Now make them match.',
      copy: 'You remember the face perfectly. The photo does not quite show it. Upload your face photo and the AI removes the blur, sharpens the detail, and delivers a clear version that matches what you remember.',
    },
    howTo: ['Upload your blurry face photo.', 'Select AI Clarity mode.', 'Download the clear face photo.'],
    beforeAfter: 'A blurry, unclear face photo made sharp and clear with full facial detail recovered.',
    faqs: [
      { q: 'How clear can a very blurry face become?', a: 'Significant improvement is possible in most cases. The AI reconstructs facial structure from available data.' },
      { q: 'Does it work on partially blurry faces?', a: 'Yes. The AI applies selective sharpening to blurry areas while leaving clear areas unchanged.' },
      { q: 'Can I use the clear photo for ID documents?', a: 'The enhanced photo may be suitable depending on specific document requirements. Always verify with the issuing authority.' },
    ],
  },

  'blurry-face-photo-enhancer': {
    slug: 'blurry-face-photo-enhancer',
    h1: 'Blurry Face Photo Enhancer',
    title: 'Blurry Face Photo Enhancer Online — AI Powered',
    description: 'Enhance blurry face photos online with AI. Fix blur and recover sharp facial detail from blurry portraits.',
    intro: {
      eyebrow: 'AI Blur Fix',
      tagline: 'The camera blinked. The face did not. Let us restore them both.',
      copy: 'Motion blur, focus blur, camera shake — all of them are the camera\'s fault, not the face\'s. Upload your blurry face photo and the AI corrects what the camera got wrong, delivering a sharp, clear portrait.',
    },
    howTo: ['Upload your blurry face photo.', 'Select AI Blur Fix mode.', 'Download the sharp, clear face photo.'],
    beforeAfter: 'A motion-blurred face photo corrected to a sharp, clear portrait with full detail.',
    faqs: [
      { q: 'What types of blur can the AI fix in face photos?', a: 'Motion blur, focus blur, camera shake blur, and age-related softness are all handled.' },
      { q: 'Can extreme blur be fixed?', a: 'Moderate to severe blur can be significantly improved. Extreme blur may have partial recovery.' },
      { q: 'Does fixing blur affect skin tone?', a: 'No. The AI targets blur correction only and preserves natural skin tone and colour.' },
    ],
  },

  'enhance-face-details': {
    slug: 'enhance-face-details',
    h1: 'Enhance Face Details',
    title: 'Enhance Face Details Online — AI Face Detail Recovery',
    description: 'Enhance facial details in photos online. AI recovers fine detail in eyes, skin, hair, and facial features.',
    intro: {
      eyebrow: 'AI Face Detail Enhancement',
      tagline: 'The details made that face unforgettable. Bring them back.',
      copy: 'Eyes with depth. Skin with texture. Hair with individual strands. These details are what make a face photograph more than just an image. Upload yours and the AI recovers every one of them.',
    },
    howTo: ['Upload your face photo.', 'Select AI Detail Enhancement.', 'Download the detail-enhanced portrait.'],
    beforeAfter: 'A flat, low-detail face photo enhanced to show rich facial detail in eyes, skin, and hair.',
    faqs: [
      { q: 'What facial details does the AI enhance?', a: 'Eyes, eyelashes, skin texture, hair strands, lips, and fine facial features are all enhanced.' },
      { q: 'Will the details look natural or over-processed?', a: 'The AI is calibrated for natural enhancement. Details are recovered, not invented.' },
      { q: 'Can face detail enhancement be used for retouching?', a: 'Yes. Detail enhancement is suitable as a base for further retouching work.' },
    ],
  },

  'sharpen-face-photo': {
    slug: 'sharpen-face-photo',
    h1: 'Sharpen Face Photo',
    title: 'Sharpen Face Photo Online — AI Face Sharpening',
    description: 'Sharpen face photos online with AI. Make soft, blurry face photos sharp and clear with AI face sharpening.',
    intro: {
      eyebrow: 'AI Face Sharpening',
      tagline: 'Sharp eyes. Sharp smile. Sharp memory. Now a sharp photo.',
      copy: 'A sharp face photo says something that a blurry one cannot. Upload yours and the AI applies targeted face sharpening — not the harsh kind that creates artefacts, but the precise kind that reveals what was always there.',
    },
    howTo: ['Upload your soft or blurry face photo.', 'Select AI Sharpen mode.', 'Download the sharpened face photo.'],
    beforeAfter: 'A soft, unsharp face photo sharpened to a crisp, clear portrait with precise facial detail.',
    faqs: [
      { q: 'Does AI sharpening look natural on faces?', a: 'Yes. The AI uses face-specific sharpening that avoids halos and artefacts common with basic sharpening filters.' },
      { q: 'Can over-sharpening be avoided?', a: 'The AI is calibrated to avoid over-sharpening. Results are natural and controlled.' },
      { q: 'Is sharpening suitable for printing?', a: 'Yes. AI-sharpened face photos are suitable for printing at standard and large sizes.' },
    ],
  },

  'face-photo-to-hd': {
    slug: 'face-photo-to-hd',
    h1: 'Face Photo to HD',
    title: 'Face Photo to HD Online — AI Face HD Conversion',
    description: 'Convert face photos to HD quality online. AI face enhancement delivers sharp, clear HD face photos.',
    intro: {
      eyebrow: 'AI Face HD Conversion',
      tagline: 'That face at full clarity. That is what it always deserved.',
      copy: 'HD face photos show the face the way it actually looks — not compressed, not pixelated, not softened. Upload your face photo and the AI converts it to a sharp, clear HD version worth keeping.',
    },
    howTo: ['Upload your face photo.', 'Select HD output.', 'Download the HD face photo.'],
    beforeAfter: 'A compressed, low-quality face photo converted to a sharp, detailed HD portrait.',
    faqs: [
      { q: 'What is HD resolution for a face photo?', a: 'HD is 1920px on the long edge. The face is enhanced at full HD resolution with maximum facial detail.' },
      { q: 'Does HD conversion work on phone selfies?', a: 'Yes. Phone selfies are enhanced and converted to HD quality.' },
      { q: 'Can I use the HD face photo for professional headshots?', a: 'Yes. HD output is suitable for professional use.' },
    ],
  },

  'face-photo-to-4k': {
    slug: 'face-photo-to-4k',
    h1: 'Face Photo to 4K',
    title: 'Face Photo to 4K Online — AI 4K Face Enhancement',
    description: 'Convert face photos to 4K online. AI delivers stunning 4K face photos with extraordinary facial detail.',
    intro: {
      eyebrow: 'AI 4K Face Enhancement',
      tagline: 'Every line. Every light. Every expression. Preserve them all.',
      copy: 'At 4K a face photograph becomes something extraordinary. Every texture, every expression line, every detail of the eyes becomes fully visible. Upload your face photo and the AI delivers the 4K version it deserves.',
    },
    howTo: ['Upload your face photo.', 'Select 4K output.', 'Download the 4K face photo.'],
    beforeAfter: 'A standard face photo upscaled to 4K with extraordinary facial detail and clarity.',
    faqs: [
      { q: 'Is 4K suitable for large portrait prints?', a: 'Yes. 4K face photos print beautifully at large sizes.' },
      { q: 'Does the AI maintain natural skin in 4K?', a: 'Yes. Natural skin texture is preserved and enhanced at 4K.' },
      { q: 'Can I convert a group face photo to 4K?', a: 'Yes. All faces in a group photo are enhanced when converting to 4K.' },
    ],
  },

  'face-photo-to-8k': {
    slug: 'face-photo-to-8k',
    h1: 'Face Photo to 8K',
    title: 'Face Photo to 8K Online — AI Ultra Face Enhancement',
    description: 'Convert face photos to 8K online. AI ultra-enhancement delivers the finest facial detail at 8K resolution.',
    intro: {
      eyebrow: 'AI 8K Face Enhancement',
      tagline: 'Some faces earn every pixel. Give them what they deserve.',
      copy: 'At 8K a face photograph shows what no lower resolution can — the finest texture, the subtlest expression, the full depth of a real human face. Upload yours and the AI delivers all of it.',
    },
    howTo: ['Upload your face photo.', 'Select 8K output.', 'Download the 8K ultra-enhanced face photo.'],
    beforeAfter: 'A face photo converted to 8K with stunning resolution showing extraordinary facial detail.',
    faqs: [
      { q: 'What is the best use for an 8K face photo?', a: 'Large wall portraits, exhibition prints, and high-end commercial use benefit most from 8K face photos.' },
      { q: 'Does 8K enhancement look realistic?', a: 'Yes. The AI generates realistic facial texture at 8K that looks natural and accurate.' },
      { q: 'How long does 8K face processing take?', a: 'Typically under two minutes on the GPU backend.' },
    ],
  },

  // ─────────────────────────────────────────────
  // PORTRAIT CLUSTER
  // ─────────────────────────────────────────────

  'portrait-enhancer': {
    slug: 'portrait-enhancer',
    h1: 'Portrait Enhancer',
    title: 'Portrait Enhancer Online — AI Portrait Enhancement',
    description: 'Enhance portrait photos online with AI. Sharpen, restore, and elevate the quality of any portrait photograph.',
    intro: {
      eyebrow: 'AI Portrait Enhancement',
      tagline: 'A great portrait is not taken. It is preserved well.',
      copy: 'The camera captures a portrait in a fraction of a second. Preserving it at the quality it deserves takes something more. Upload yours and the AI enhances every detail of the face, the light, and the moment.',
    },
    howTo: ['Upload your portrait photo.', 'Select AI Portrait Enhancement.', 'Download the enhanced portrait.'],
    beforeAfter: 'A flat, low-quality portrait enhanced to a sharp, detailed, professional-grade image.',
    faqs: [
      { q: 'What types of portrait photos can be enhanced?', a: 'All portrait types — casual, formal, studio, outdoor, and candid — are supported.' },
      { q: 'Does enhancement work on older portraits?', a: 'Yes. Old portrait photos benefit significantly from AI enhancement and restoration.' },
      { q: 'Can I enhance a portrait for a professional portfolio?', a: 'Yes. The output is suitable for professional portfolio use.' },
    ],
  },

  'ai-portrait-enhancer': {
    slug: 'ai-portrait-enhancer',
    h1: 'AI Portrait Enhancer',
    title: 'AI Portrait Enhancer Online — Powered by CodeFormer',
    description: 'AI portrait enhancer powered by CodeFormer and RealESRGAN. Professional portrait enhancement online.',
    intro: {
      eyebrow: 'AI Portrait Enhancement',
      tagline: 'The portrait captured the moment. Let us capture every detail in it.',
      copy: 'Two AI models work together here — CodeFormer restores the face with precision, RealESRGAN brings the entire portrait to high resolution. The result is a portrait that captures not just the face but the full detail of the moment.',
    },
    howTo: ['Upload your portrait photo.', 'Select resolution — HD to 8K.', 'Download the AI-enhanced portrait.'],
    beforeAfter: 'A portrait processed by dual AI models to deliver sharp face detail and high-resolution output.',
    faqs: [
      { q: 'How does AI portrait enhancement work?', a: 'CodeFormer enhances facial detail first, then RealESRGAN upscales the full image to the selected resolution.' },
      { q: 'Is this suitable for commercial portrait use?', a: 'Yes. The output quality meets commercial photography standards.' },
      { q: 'Can I enhance multiple portraits at once?', a: 'Currently one portrait is processed per upload.' },
    ],
  },

  'portrait-quality-enhancer': {
    slug: 'portrait-quality-enhancer',
    h1: 'Portrait Quality Enhancer',
    title: 'Portrait Quality Enhancer Online — AI Powered',
    description: 'Enhance portrait photo quality online. AI improves sharpness, detail, and resolution of portrait photographs.',
    intro: {
      eyebrow: 'AI Portrait Quality',
      tagline: 'Quality is not the photo. Quality is the feeling it gives. Enhance both.',
      copy: 'A high-quality portrait does not just look sharper — it feels more real. Upload your portrait and the AI improves the technical quality in a way that makes the emotional quality of the image come through more clearly.',
    },
    howTo: ['Upload your portrait.', 'Select AI Quality Enhancement.', 'Download the high-quality portrait.'],
    beforeAfter: 'A low-quality portrait enhanced to a sharp, detailed, high-quality image.',
    faqs: [
      { q: 'What quality improvements does AI make to portraits?', a: 'Sharpness, detail recovery, grain reduction, face enhancement, and resolution upscaling are all applied.' },
      { q: 'Can I enhance a portrait taken on a basic camera?', a: 'Yes. Basic camera portraits benefit significantly from AI quality enhancement.' },
      { q: 'Does quality enhancement change the mood of the portrait?', a: 'No. The AI preserves the original lighting and mood while improving technical quality.' },
    ],
  },

  'portrait-photo-to-hd': {
    slug: 'portrait-photo-to-hd',
    h1: 'Portrait Photo to HD',
    title: 'Portrait Photo to HD Online — AI HD Portrait',
    description: 'Convert portrait photos to HD quality online. AI face enhancement delivers sharp, clear HD portraits.',
    intro: {
      eyebrow: 'AI HD Portrait',
      tagline: 'HD is not about pixels. It is about seeing them clearly again.',
      copy: 'A portrait in HD stops being a documentation and starts being a presence. Upload your portrait and the AI converts it to a sharp, clear HD version where the face is fully visible and the detail is fully preserved.',
    },
    howTo: ['Upload your portrait photo.', 'Select HD output.', 'Download the HD portrait.'],
    beforeAfter: 'A standard portrait converted to HD with sharp, clear facial detail.',
    faqs: [
      { q: 'Is HD sufficient for portrait printing?', a: 'HD is suitable for prints up to A4 size. For larger prints, 4K or 8K is recommended.' },
      { q: 'Does HD conversion work on old portrait photos?', a: 'Yes. Old portrait photos are restored and converted to HD.' },
      { q: 'Can I convert a passport-style portrait to HD?', a: 'Yes. All portrait formats including document-style are supported.' },
    ],
  },

  'portrait-photo-to-4k': {
    slug: 'portrait-photo-to-4k',
    h1: 'Portrait Photo to 4K',
    title: 'Portrait Photo to 4K Online — AI 4K Portrait',
    description: 'Convert portrait photos to 4K online. AI delivers stunning 4K portraits with exceptional facial detail.',
    intro: {
      eyebrow: 'AI 4K Portrait',
      tagline: 'That portrait was worth a thousand words. Make sure they are all visible.',
      copy: 'At 4K a portrait becomes a statement. Every expression line, every detail of the eyes, every nuance of the face becomes fully visible. Upload your portrait and the AI delivers the 4K version it was always meant to be.',
    },
    howTo: ['Upload your portrait photo.', 'Select 4K output.', 'Download the 4K portrait.'],
    beforeAfter: 'A standard portrait upscaled to 4K with extraordinary facial detail and professional quality.',
    faqs: [
      { q: 'Is 4K suitable for wall portrait printing?', a: 'Yes. 4K portraits print beautifully at large wall sizes.' },
      { q: 'Does 4K conversion preserve natural skin?', a: 'Yes. Natural skin texture is enhanced and preserved at 4K.' },
      { q: 'Can a candid portrait be converted to 4K?', a: 'Yes. All portrait styles including candid are supported.' },
    ],
  },

  'portrait-photo-to-8k': {
    slug: 'portrait-photo-to-8k',
    h1: 'Portrait Photo to 8K',
    title: 'Portrait Photo to 8K Online — AI Ultra Portrait',
    description: 'Convert portrait photos to 8K online. AI ultra-enhancement delivers the finest portrait quality at 8K.',
    intro: {
      eyebrow: 'AI 8K Portrait',
      tagline: 'Some portraits hold a whole story. Tell it in full detail.',
      copy: 'At 8K a portrait holds more information than any eye can absorb in a single glance. Every session of looking at it reveals something new. Upload your portrait and the AI delivers the 8K version that does it full justice.',
    },
    howTo: ['Upload your portrait photo.', 'Select 8K output.', 'Download the 8K ultra portrait.'],
    beforeAfter: 'A portrait upscaled to 8K with extraordinary resolution showing every detail of the face.',
    faqs: [
      { q: 'What is 8K portrait best used for?', a: 'Exhibition prints, large wall portraits, and professional photography portfolios.' },
      { q: 'Does 8K portrait look natural?', a: 'Yes. The AI generates realistic facial texture at 8K.' },
      { q: 'How is 8K delivered?', a: 'As a high-quality PNG download at 7680px on the long edge.' },
    ],
  },

  'professional-portrait-enhancer': {
    slug: 'professional-portrait-enhancer',
    h1: 'Professional Portrait Enhancer',
    title: 'Professional Portrait Enhancer Online — AI Powered',
    description: 'Enhance professional portrait photos online. AI delivers studio-quality portrait enhancement for professional use.',
    intro: {
      eyebrow: 'AI Professional Portrait',
      tagline: 'A professional moment deserves a professional photo. Do it smart.',
      copy: 'Professional portraits represent you in contexts where first impressions matter most. Upload yours and the AI applies professional-grade enhancement — sharp, natural, and polished to the standard your professional image deserves.',
    },
    howTo: ['Upload your professional portrait.', 'Select AI Professional Enhancement.', 'Download the professionally enhanced portrait.'],
    beforeAfter: 'A standard portrait enhanced to professional quality with sharp detail and polished clarity.',
    faqs: [
      { q: 'What makes portrait enhancement professional grade?', a: 'Natural face detail recovery, controlled sharpening, and high-resolution output without artificial over-processing.' },
      { q: 'Is this suitable for LinkedIn and business profiles?', a: 'Yes. The output is suitable for all professional profile contexts.' },
      { q: 'Can I enhance a portrait taken by a professional photographer?', a: 'Yes. Professionally taken portraits are further improved by AI enhancement.' },
    ],
  },

  'studio-portrait-enhancer': {
    slug: 'studio-portrait-enhancer',
    h1: 'Studio Portrait Enhancer',
    title: 'Studio Portrait Enhancer Online — AI Powered',
    description: 'Enhance studio portrait photos online. AI recovers every detail from studio portraits and delivers professional quality output.',
    intro: {
      eyebrow: 'AI Studio Portrait Enhancement',
      tagline: 'Studio lighting caught something special that day. Preserve it all time.',
      copy: 'Studio portraits capture a face at its best — controlled light, careful composition, a moment of deliberate attention. Upload yours and the AI enhances every detail that studio session was designed to produce.',
    },
    howTo: ['Upload your studio portrait.', 'Select AI Enhancement mode.', 'Download the enhanced studio portrait.'],
    beforeAfter: 'A studio portrait enhanced to maximum sharpness and detail with preserved studio lighting.',
    faqs: [
      { q: 'Does AI enhancement preserve studio lighting?', a: 'Yes. The AI enhances detail without altering the original lighting and shadow structure.' },
      { q: 'Can I enhance multiple studio portraits from the same session?', a: 'Yes. Each portrait is processed individually with the same quality standards.' },
      { q: 'Is output suitable for commercial studio use?', a: 'Yes. Output meets commercial photography quality standards.' },
    ],
  },

  'premium-portrait-enhancement': {
    slug: 'premium-portrait-enhancement',
    h1: 'Premium Portrait Enhancement',
    title: 'Premium Portrait Enhancement Online — AI Powered',
    description: 'Premium AI portrait enhancement online. The finest face restoration and upscaling for portraits that matter most.',
    intro: {
      eyebrow: 'Premium AI Portrait',
      tagline: 'Not every portrait gets a second chance. This one does.',
      copy: 'Premium enhancement is for the portraits that cannot be retaken — the ones that captured a real moment, a real person, a real feeling. Upload yours and the AI gives it the premium treatment it deserves.',
    },
    howTo: ['Upload your portrait.', 'Select Premium Enhancement.', 'Download your premium-quality portrait.'],
    beforeAfter: 'A portrait processed through the premium AI pipeline to deliver the finest possible quality output.',
    faqs: [
      { q: 'What makes this premium enhancement?', a: 'Premium combines CodeFormer face restoration with RealESRGAN upscaling on dedicated GPU hardware for maximum quality.' },
      { q: 'What resolutions are available in premium?', a: 'HD, 2K, 4K, and 8K are all available in the premium tier.' },
      { q: 'Is premium enhancement worth it for important portraits?', a: 'For portraits of significant personal or professional importance, premium enhancement delivers results that standard tools cannot match.' },
    ],
  },

  'portrait-restoration-online': {
    slug: 'portrait-restoration-online',
    h1: 'Portrait Restoration Online',
    title: 'Portrait Restoration Online — AI Powered',
    description: 'Restore portrait photos online with AI. Fix damage, recover detail, and preserve portraits for generations.',
    intro: {
      eyebrow: 'AI Portrait Restoration',
      tagline: 'It was a fine portrait once. Now it is time to restore that fineness.',
      copy: 'A portrait that has survived time deserves to be seen properly. Upload your damaged or degraded portrait and the AI restores every detail of the face — repairing what time did while preserving what time could not take.',
    },
    howTo: ['Upload your damaged portrait.', 'Select AI Portrait Restoration.', 'Download the restored portrait.'],
    beforeAfter: 'A damaged, faded old portrait restored to a clear, detailed image with full face recovery.',
    faqs: [
      { q: 'Can AI restore a portrait with physical damage?', a: 'Yes. Scratches, cracks, stains, and fading are all repaired by the AI restoration engine.' },
      { q: 'How old can the portrait be for restoration to work?', a: 'The AI works on portraits from any era including very early photographic prints.' },
      { q: 'Can I restore a portrait for a memorial or tribute?', a: 'Yes. Many users restore portraits of family members who have passed for memorial purposes.' },
    ],
  },

// ─────────────────────────────────────────────
  // SELFIE / BEAUTY CLUSTER
  // ─────────────────────────────────────────────

  'selfie-enhancer': {
    slug: 'selfie-enhancer',
    h1: 'Selfie Enhancer',
    title: 'Selfie Enhancer Online — AI Selfie Enhancement',
    description: 'Enhance selfies online with AI. Sharpen, clarify, and improve selfie quality for any use.',
    intro: { eyebrow: 'AI Selfie Enhancement', tagline: 'You were glowing that day. Make it glow all time.', copy: 'Some selfies catch a moment of real confidence, real joy, real presence. Upload yours and the AI enhances it — sharpening the face, recovering detail, and delivering the selfie that moment deserved.' },
    howTo: ['Upload your selfie.', 'Select AI Enhancement mode.', 'Download the enhanced selfie.'],
    beforeAfter: 'A standard selfie enhanced to sharp, clear, high-quality output with full face detail.',
    faqs: [
      { q: 'Can AI enhance a selfie taken in low light?', a: 'Yes. The AI reduces noise and sharpens detail from low-light selfies.' },
      { q: 'Does selfie enhancement look natural?', a: 'Yes. The AI enhances without over-processing for a natural, authentic result.' },
      { q: 'Can I enhance a selfie for a social media profile?', a: 'Yes. Enhanced selfies are ready for all social media platforms.' },
    ],
  },

  'ai-selfie-enhancer': {
    slug: 'ai-selfie-enhancer',
    h1: 'AI Selfie Enhancer',
    title: 'AI Selfie Enhancer Online — Powered by CodeFormer',
    description: 'AI selfie enhancer online. CodeFormer face restoration delivers sharp, natural selfie enhancement.',
    intro: { eyebrow: 'AI Selfie Enhancement', tagline: 'The AI saw what the camera missed. Let us show you both.', copy: 'Phone cameras capture selfies quickly. AI enhancement recovers what that speed costs — the fine detail of the face, the texture, the expression. Upload your selfie and see what was actually there all along.' },
    howTo: ['Upload your selfie.', 'Select AI Selfie Enhancement.', 'Download the AI-enhanced selfie.'],
    beforeAfter: 'A standard phone selfie enhanced by AI to show sharp, detailed face quality.',
    faqs: [
      { q: 'Does AI selfie enhancement work on front camera photos?', a: 'Yes. Front camera selfies are fully supported and benefit significantly.' },
      { q: 'Will my selfie still look like me after enhancement?', a: 'Yes. The AI enhances your features as they are — not alter them.' },
      { q: 'Can I enhance a selfie with other people in it?', a: 'Yes. All faces in the selfie are enhanced simultaneously.' },
    ],
  },

  'selfie-quality-enhancer': {
    slug: 'selfie-quality-enhancer',
    h1: 'Selfie Quality Enhancer',
    title: 'Selfie Quality Enhancer Online — AI Powered',
    description: 'Improve selfie quality online with AI. Get sharp, clear, high-quality selfies from any phone camera.',
    intro: { eyebrow: 'AI Selfie Quality', tagline: 'That selfie was a good moment. Give it the quality it earned.', copy: 'A good selfie moment should not be limited by the phone that captured it. Upload yours and the AI improves the quality — sharper face, cleaner background, better detail — without changing what made it a good moment.' },
    howTo: ['Upload your selfie.', 'Select AI Quality Enhancement.', 'Download the high-quality selfie.'],
    beforeAfter: 'A grainy, compressed phone selfie enhanced to a sharp, clean, high-quality image.',
    faqs: [
      { q: 'Can AI improve selfie quality from old phones?', a: 'Yes. Old phone cameras produce low-quality selfies that benefit significantly from AI enhancement.' },
      { q: 'Does quality improvement affect the selfie background?', a: 'Yes. Both the face and background are enhanced for consistent overall quality.' },
      { q: 'Is the enhanced selfie ready for printing?', a: 'Yes. AI-enhanced selfies are suitable for printing at standard sizes.' },
    ],
  },

  'make-selfie-clear': {
    slug: 'make-selfie-clear',
    h1: 'Make Selfie Clear',
    title: 'Make Selfie Clear Online — AI Selfie Clarity',
    description: 'Make selfies clear online with AI. Remove blur, sharpen faces, and get crystal clear selfies instantly.',
    intro: { eyebrow: 'AI Selfie Clarity', tagline: 'Clear selfie. Clear confidence. Clear message to the world.', copy: 'A blurry selfie undersells the moment it holds. Upload yours and the AI delivers the clear version — sharp face, no blur, full detail — ready to share exactly as it should be.' },
    howTo: ['Upload your blurry selfie.', 'Select AI Clarity mode.', 'Download the clear selfie.'],
    beforeAfter: 'A blurry, unclear selfie made sharp and clear with full face detail.',
    faqs: [
      { q: 'How do I make a blurry selfie clear?', a: 'Upload the selfie and select AI Clarity mode. The tool removes blur and sharpens the face automatically.' },
      { q: 'Can a very blurry selfie be made clear?', a: 'Significant improvement is possible. Extreme blur may have partial recovery.' },
      { q: 'Does clearing the selfie change my appearance?', a: 'No. The AI sharpens and clarifies without altering your features.' },
    ],
  },

  'selfie-to-hd': {
    slug: 'selfie-to-hd',
    h1: 'Selfie to HD',
    title: 'Selfie to HD Online — AI HD Selfie Converter',
    description: 'Convert selfies to HD quality online. AI face enhancement delivers sharp, clear HD selfies.',
    intro: { eyebrow: 'AI HD Selfie', tagline: 'You looked like that once. You still do. Now prove it clearly.', copy: 'HD selfies show the face properly — not compressed, not pixelated, not softened by the front camera. Upload your selfie and the AI converts it to HD so it looks as good as the moment felt.' },
    howTo: ['Upload your selfie.', 'Select HD output.', 'Download the HD selfie.'],
    beforeAfter: 'A standard phone selfie converted to a sharp, clear HD image.',
    faqs: [
      { q: 'Can I convert a WhatsApp selfie to HD?', a: 'Yes. Compressed WhatsApp selfies are restored and converted to HD.' },
      { q: 'Does HD selfie conversion work on group selfies?', a: 'Yes. All faces in a group selfie are enhanced during HD conversion.' },
      { q: 'Is HD selfie output good for profile photos?', a: 'Yes. HD selfies make excellent profile photos for all platforms.' },
    ],
  },

  'selfie-to-4k': {
    slug: 'selfie-to-4k',
    h1: 'Selfie to 4K',
    title: 'Selfie to 4K Online — AI 4K Selfie Converter',
    description: 'Convert selfies to 4K resolution online. AI delivers stunning 4K selfies with exceptional face detail.',
    intro: { eyebrow: 'AI 4K Selfie', tagline: 'That smile was real. Let the photo be real too.', copy: 'A 4K selfie holds a face the way memory does — every detail visible, every expression clear. Upload yours and the AI delivers the 4K version that shows the real you properly.' },
    howTo: ['Upload your selfie.', 'Select 4K output.', 'Download the 4K selfie.'],
    beforeAfter: 'A standard selfie upscaled to 4K with sharp, detailed face quality.',
    faqs: [
      { q: 'Is 4K selfie suitable for large prints?', a: 'Yes. 4K selfies print beautifully at large sizes.' },
      { q: 'Does 4K conversion look natural on selfies?', a: 'Yes. Natural skin and face detail is preserved and enhanced at 4K.' },
      { q: 'Can I convert a selfie from an old phone to 4K?', a: 'Yes. Old phone selfies benefit significantly from 4K upscaling.' },
    ],
  },

  'selfie-to-8k': {
    slug: 'selfie-to-8k',
    h1: 'Selfie to 8K',
    title: 'Selfie to 8K Online — AI Ultra Selfie Enhancement',
    description: 'Convert selfies to 8K resolution online. AI ultra-enhancement delivers extraordinary 8K selfie quality.',
    intro: { eyebrow: 'AI 8K Selfie', tagline: 'Every detail of that moment. Preserved the way it deserves.', copy: 'At 8K a selfie becomes more than a selfie. It becomes a portrait of real quality — every feature visible, every detail preserved. Upload yours and the AI delivers the 8K version it always had the potential to be.' },
    howTo: ['Upload your selfie.', 'Select 8K output.', 'Download the 8K selfie.'],
    beforeAfter: 'A selfie converted to 8K with extraordinary resolution and facial detail.',
    faqs: [
      { q: 'Is 8K selfie suitable for exhibition or large display?', a: 'Yes. 8K selfies are suitable for large format display and exhibition use.' },
      { q: 'Does 8K selfie enhancement look realistic?', a: 'Yes. The AI generates realistic facial texture at 8K.' },
      { q: 'How large can I print an 8K selfie?', a: 'An 8K selfie can be printed at very large wall sizes without quality loss.' },
    ],
  },

  'beauty-photo-enhancer': {
    slug: 'beauty-photo-enhancer',
    h1: 'Beauty Photo Enhancer',
    title: 'Beauty Photo Enhancer Online — AI Powered',
    description: 'Enhance beauty photos online with AI. Recover detail, improve clarity, and let natural beauty show clearly.',
    intro: { eyebrow: 'AI Beauty Enhancement', tagline: 'Beauty was never the blur. Remove it and find what was always there.', copy: 'Natural beauty does not need filters. It needs clarity. Upload your photo and the AI removes the blur, the grain, and the compression — leaving only the real, natural beauty that was always in the image.' },
    howTo: ['Upload your beauty photo.', 'Select AI Enhancement mode.', 'Download the enhanced beauty photo.'],
    beforeAfter: 'A blurry, compressed beauty photo enhanced to reveal natural detail and clarity.',
    faqs: [
      { q: 'Does beauty enhancement add filters or effects?', a: 'No. The AI enhances clarity and detail without adding artificial filters or effects.' },
      { q: 'Can I use enhanced beauty photos for commercial use?', a: 'Yes. Output is suitable for commercial beauty photography.' },
      { q: 'Does the enhancement preserve natural skin tone?', a: 'Yes. Natural skin tone and texture are preserved throughout the enhancement.' },
    ],
  },

  'skin-detail-enhancer': {
    slug: 'skin-detail-enhancer',
    h1: 'Skin Detail Enhancer',
    title: 'Skin Detail Enhancer Online — AI Powered',
    description: 'Enhance skin detail in photos online. AI recovers natural skin texture, pores, and fine detail in face photos.',
    intro: { eyebrow: 'AI Skin Detail', tagline: 'The details made it beautiful. Bring every one of them back.', copy: 'Natural skin texture — the fine detail, the subtle variation, the real quality of a human face — is what separates a real portrait from a plastic one. Upload your photo and the AI recovers every detail of that texture.' },
    howTo: ['Upload your face or beauty photo.', 'Select AI Skin Detail Enhancement.', 'Download the detail-enhanced photo.'],
    beforeAfter: 'A smooth, detail-less face photo enhanced to show natural skin texture and fine facial detail.',
    faqs: [
      { q: 'Does skin detail enhancement look natural?', a: 'Yes. The AI recovers real skin texture patterns rather than inventing synthetic ones.' },
      { q: 'Can over-smoothed photos get skin detail back?', a: 'Yes. The AI reconstructs natural skin texture even on heavily compressed or smoothed images.' },
      { q: 'Does skin detail enhancement work on all skin types?', a: 'Yes. The AI is trained on diverse skin types and works accurately on all.' },
    ],
  },

  'eyes-hair-skin-enhancer': {
    slug: 'eyes-hair-skin-enhancer',
    h1: 'Eyes Hair Skin Enhancer',
    title: 'Eyes Hair Skin Enhancer Online — AI Powered',
    description: 'Enhance eyes, hair, and skin in photos online. AI recovers fine detail across all key facial and portrait elements.',
    intro: { eyebrow: 'AI Portrait Detail Enhancement', tagline: 'Eyes. Hair. Skin. Three details. One photo. Preserve them all.', copy: 'The three elements that define a portrait — eyes with depth and clarity, hair with individual strands, skin with natural texture. Upload your photo and the AI enhances all three simultaneously for a portrait of complete, real detail.' },
    howTo: ['Upload your portrait or face photo.', 'Select AI Detail Enhancement.', 'Download the fully enhanced photo.'],
    beforeAfter: 'A flat portrait enhanced to show vivid eye detail, natural skin texture, and defined hair.',
    faqs: [
      { q: 'Does the AI enhance eyes, hair, and skin separately?', a: 'The AI processes all elements simultaneously for consistent, natural-looking enhancement throughout.' },
      { q: 'Can this improve hair detail in group photos?', a: 'Yes. All people in the photo receive the same enhancement treatment.' },
      { q: 'Is this suitable for beauty and fashion photography?', a: 'Yes. Output quality meets beauty and fashion photography standards.' },
    ],
  },

  // ─────────────────────────────────────────────
  // PROFILE / SOCIAL MEDIA CLUSTER
  // ─────────────────────────────────────────────

  'profile-photo-enhancer': {
    slug: 'profile-photo-enhancer',
    h1: 'Profile Photo Enhancer',
    title: 'Profile Photo Enhancer Online — AI Powered',
    description: 'Enhance profile photos online with AI. Get a sharp, clear, professional-quality profile photo for any platform.',
    intro: { eyebrow: 'AI Profile Photo Enhancement', tagline: 'People see the photo before they see you. Make it honest.', copy: 'A profile photo is a silent introduction that happens thousands of times. Upload yours and the AI enhances it to the quality that introduction deserves — sharp, clear, and presenting you at your best.' },
    howTo: ['Upload your profile photo.', 'Select AI Enhancement mode.', 'Download the enhanced profile photo.'],
    beforeAfter: 'A standard profile photo enhanced to a sharp, clear, professional-quality image.',
    faqs: [
      { q: 'What profile photo platforms does this work for?', a: 'LinkedIn, Instagram, Facebook, WhatsApp, Twitter, and all other profile photo contexts.' },
      { q: 'What size should my profile photo be?', a: 'Upload the largest version available. The AI will enhance and you can resize for specific platforms.' },
      { q: 'Can I enhance a profile photo taken in poor lighting?', a: 'Yes. Poor lighting photos are enhanced for clarity and detail.' },
    ],
  },

  'profile-picture-enhancer': {
    slug: 'profile-picture-enhancer',
    h1: 'Profile Picture Enhancer',
    title: 'Profile Picture Enhancer Online — AI Powered',
    description: 'Enhance profile pictures online. AI delivers sharp, clear, professional profile pictures for any platform.',
    intro: { eyebrow: 'AI Profile Picture Enhancement', tagline: 'One photo. One chance. Do it well.', copy: 'Your profile picture is the face your online presence shows to the world. It appears in inboxes, search results, and first impressions. Upload yours and the AI makes sure it is doing you full justice.' },
    howTo: ['Upload your profile picture.', 'Select AI Enhancement.', 'Download the enhanced profile picture.'],
    beforeAfter: 'A low-quality profile picture enhanced to a sharp, professional-quality image.',
    faqs: [
      { q: 'How do I get a good profile picture?', a: 'Start with the best photo you have and let the AI enhance it to the highest quality possible.' },
      { q: 'Can a casual photo become a good profile picture?', a: 'Yes. AI enhancement can significantly improve the quality of casual photos for profile use.' },
      { q: 'What is the ideal resolution for a profile picture?', a: 'HD output is ideal for most platforms. The AI delivers HD or higher.' },
    ],
  },

  'linkedin-photo-enhancer': {
    slug: 'linkedin-photo-enhancer',
    h1: 'LinkedIn Photo Enhancer',
    title: 'LinkedIn Photo Enhancer Online — AI Powered',
    description: 'Enhance LinkedIn photos online with AI. Get a sharp, professional LinkedIn profile photo that makes the right impression.',
    intro: { eyebrow: 'AI LinkedIn Photo Enhancement', tagline: 'First impression on LinkedIn lasts. Make yours count all time.', copy: 'A LinkedIn photo is seen by recruiters, clients, and colleagues before a single word is read. Upload yours and the AI enhances it to professional headshot quality — the standard that impression deserves.' },
    howTo: ['Upload your LinkedIn photo.', 'Select AI Professional Enhancement.', 'Download the enhanced LinkedIn photo.'],
    beforeAfter: 'A casual photo enhanced to a sharp, professional LinkedIn headshot quality image.',
    faqs: [
      { q: 'What makes a good LinkedIn photo?', a: 'Clear face, sharp detail, professional framing, and good lighting. AI enhancement covers all of these.' },
      { q: 'Can I enhance a photo not taken in a studio for LinkedIn?', a: 'Yes. Any photo can be enhanced to professional quality for LinkedIn.' },
      { q: 'What resolution does LinkedIn recommend?', a: 'LinkedIn recommends at least 400x400px. AI output exceeds this significantly.' },
    ],
  },

  'instagram-profile-photo-enhancer': {
    slug: 'instagram-profile-photo-enhancer',
    h1: 'Instagram Profile Photo Enhancer',
    title: 'Instagram Profile Photo Enhancer Online — AI Powered',
    description: 'Enhance Instagram profile photos online. Get a sharp, vivid Instagram profile photo with AI enhancement.',
    intro: { eyebrow: 'AI Instagram Profile Enhancement', tagline: 'Your feed is curated. Your profile photo should be too.', copy: 'On Instagram every visual choice matters. Your profile photo sets the tone for everything that follows. Upload yours and the AI enhances it to match the quality of the content behind it.' },
    howTo: ['Upload your Instagram profile photo.', 'Select AI Enhancement.', 'Download the enhanced photo.'],
    beforeAfter: 'A standard photo enhanced to vivid, sharp Instagram profile quality.',
    faqs: [
      { q: 'What size is Instagram profile photo?', a: 'Instagram displays profile photos at 110x110px but stores them larger. Upload the highest resolution available.' },
      { q: 'Does AI enhancement help with Instagram compression?', a: 'Yes. Enhanced photos retain more quality after Instagram\'s compression.' },
      { q: 'Can I enhance a business Instagram profile photo?', a: 'Yes. Both personal and business profile photos are supported.' },
    ],
  },

  'facebook-profile-photo-enhancer': {
    slug: 'facebook-profile-photo-enhancer',
    h1: 'Facebook Profile Photo Enhancer',
    title: 'Facebook Profile Photo Enhancer Online — AI Powered',
    description: 'Enhance Facebook profile photos online. Get a sharp, clear Facebook profile photo with AI enhancement.',
    intro: { eyebrow: 'AI Facebook Profile Enhancement', tagline: 'That profile photo speaks before you do. Let it speak well.', copy: 'Your Facebook profile photo is seen by family, friends, and everyone you connect with. Upload yours and the AI ensures it shows you clearly — sharp, natural, and exactly as you want to be remembered.' },
    howTo: ['Upload your Facebook profile photo.', 'Select AI Enhancement.', 'Download the enhanced photo.'],
    beforeAfter: 'A compressed, low-quality Facebook photo enhanced to a sharp, clear image.',
    faqs: [
      { q: 'Can I enhance a photo that Facebook has already compressed?', a: 'Yes. The AI restores and enhances photos that have been compressed by Facebook.' },
      { q: 'What size does Facebook recommend for profile photos?', a: 'Facebook recommends at least 180x180px. AI output exceeds this significantly.' },
      { q: 'Can I use this for a Facebook business page photo?', a: 'Yes. Both personal and business page profile photos are supported.' },
    ],
  },

  'whatsapp-profile-photo-enhancer': {
    slug: 'whatsapp-profile-photo-enhancer',
    h1: 'WhatsApp Profile Photo Enhancer',
    title: 'WhatsApp Profile Photo Enhancer Online — AI Powered',
    description: 'Enhance WhatsApp profile photos online. Get a sharp, clear WhatsApp display picture with AI enhancement.',
    intro: { eyebrow: 'AI WhatsApp Profile Enhancement', tagline: 'Everyone sees it every day. Make sure it is worth seeing.', copy: 'Your WhatsApp profile photo appears in every chat, every group, every contact list. It is seen more than any other photo you own. Upload yours and the AI enhances it to the quality that level of visibility deserves.' },
    howTo: ['Upload your WhatsApp profile photo.', 'Select AI Enhancement.', 'Download the enhanced photo.'],
    beforeAfter: 'A compressed WhatsApp photo enhanced to a sharp, clear, high-quality profile image.',
    faqs: [
      { q: 'Does WhatsApp compress profile photos?', a: 'Yes. WhatsApp compresses photos significantly. Enhancing before uploading reduces visible quality loss.' },
      { q: 'What resolution works best for WhatsApp profile?', a: 'Upload at least 500x500px. AI enhancement delivers this quality or higher.' },
      { q: 'Can I use this for WhatsApp Business profile?', a: 'Yes. Both personal and business WhatsApp profiles are supported.' },
    ],
  },

  'dating-profile-photo-enhancer': {
    slug: 'dating-profile-photo-enhancer',
    h1: 'Dating Profile Photo Enhancer',
    title: 'Dating Profile Photo Enhancer Online — AI Powered',
    description: 'Enhance dating profile photos online. Get a sharp, natural, attractive dating profile photo with AI.',
    intro: { eyebrow: 'AI Dating Profile Enhancement', tagline: 'That photo is the first hello. Make it a good one.', copy: 'A dating profile photo is a first impression that happens before a single word. Upload yours and the AI enhances it to show you naturally and clearly — the real you, at your best, without artificial filters.' },
    howTo: ['Upload your dating profile photo.', 'Select AI Enhancement.', 'Download the enhanced photo.'],
    beforeAfter: 'A standard photo enhanced to a natural, sharp, attractive dating profile quality image.',
    faqs: [
      { q: 'Will AI enhancement make my dating photo look unnatural?', a: 'No. The AI enhances clarity and detail without adding filters or altering your appearance.' },
      { q: 'What type of photo works best for dating profiles?', a: 'A clear, well-lit face photo. AI enhancement helps any photo come closer to this standard.' },
      { q: 'Can I enhance photos for multiple dating apps?', a: 'Yes. The enhanced photo can be used across all dating platforms.' },
    ],
  },

  'professional-profile-photo-enhancer': {
    slug: 'professional-profile-photo-enhancer',
    h1: 'Professional Profile Photo Enhancer',
    title: 'Professional Profile Photo Enhancer Online — AI Powered',
    description: 'Enhance professional profile photos online. AI delivers headshot-quality profile photos for professional use.',
    intro: { eyebrow: 'AI Professional Profile', tagline: 'Your work is serious. Your profile photo should know that.', copy: 'A professional profile photo communicates competence before a word is read. Upload yours and the AI enhances it to headshot quality — sharp, clean, and presenting you with the professionalism your work deserves.' },
    howTo: ['Upload your professional profile photo.', 'Select AI Professional Enhancement.', 'Download the enhanced professional photo.'],
    beforeAfter: 'A casual photo enhanced to professional headshot quality for profile use.',
    faqs: [
      { q: 'Can AI turn a casual photo into a professional headshot?', a: 'AI enhancement significantly improves quality, sharpness, and clarity — bringing casual photos much closer to professional headshot standards.' },
      { q: 'What professional platforms is this suitable for?', a: 'LinkedIn, company websites, business cards, email signatures, and all professional contexts.' },
      { q: 'Is background removal included?', a: 'Enhancement focuses on face and image quality. Background removal is a separate process.' },
    ],
  },

  // ─────────────────────────────────────────────
  // DOCUMENT / ID CLUSTER
  // ─────────────────────────────────────────────

  'resume-photo-enhancer': {
    slug: 'resume-photo-enhancer',
    h1: 'Resume Photo Enhancer',
    title: 'Resume Photo Enhancer Online — AI Powered',
    description: 'Enhance resume photos online with AI. Get a sharp, professional resume photo that matches the quality of your CV.',
    intro: { eyebrow: 'AI Resume Photo Enhancement', tagline: 'The resume is strong. The photo should match it.', copy: 'A resume represents years of work and achievement. The photo attached to it should represent you at the same level. Upload your resume photo and the AI enhances it to match the quality of everything else on the page.' },
    howTo: ['Upload your resume photo.', 'Select AI Enhancement mode.', 'Download the enhanced resume photo.'],
    beforeAfter: 'A casual or low-quality photo enhanced to a sharp, professional resume-ready image.',
    faqs: [
      { q: 'What size should a resume photo be?', a: 'Typically 35x45mm at 300dpi. AI output is high resolution and can be sized to requirement.' },
      { q: 'Does AI enhancement make a resume photo look professional?', a: 'Yes. Enhancement delivers the sharpness and clarity expected of a professional resume photo.' },
      { q: 'Should a resume photo have a white background?', a: 'Many formats require white background. Enhancement focuses on quality — background change is a separate step.' },
    ],
  },

  'job-application-photo-enhancer': {
    slug: 'job-application-photo-enhancer',
    h1: 'Job Application Photo Enhancer',
    title: 'Job Application Photo Enhancer Online — AI Powered',
    description: 'Enhance job application photos online. Get a clear, professional photo that meets job application requirements.',
    intro: { eyebrow: 'AI Job Application Photo', tagline: 'One rejection for a bad photo is one too many. Do it smart.', copy: 'Job applications are rejected for photo quality issues more often than candidates realise. Upload your application photo and the AI enhances it to the standard that prevents rejection and presents you professionally.' },
    howTo: ['Upload your job application photo.', 'Select AI Enhancement.', 'Download the enhanced application photo.'],
    beforeAfter: 'A low-quality job application photo enhanced to a sharp, professional, submission-ready image.',
    faqs: [
      { q: 'What photo quality do job applications require?', a: 'Most require a clear, sharp face photo at sufficient resolution. AI enhancement meets these requirements.' },
      { q: 'Can I enhance a government job application photo?', a: 'Yes. Government job application photos are supported.' },
      { q: 'What file size should the enhanced photo be?', a: 'The output can be downloaded and resized to meet specific KB requirements.' },
    ],
  },

  'passport-photo-enhancer': {
    slug: 'passport-photo-enhancer',
    h1: 'Passport Photo Enhancer',
    title: 'Passport Photo Enhancer Online — AI Powered',
    description: 'Enhance passport photos online with AI. Get a sharp, clear passport photo that meets official requirements.',
    intro: { eyebrow: 'AI Passport Photo Enhancement', tagline: 'One chance to get it accepted. Do it well.', copy: 'A passport photo rejection delays travel and costs time. Upload your passport photo and the AI enhances it to the clarity and quality that passport authorities expect — sharp face, clear detail, no blur.' },
    howTo: ['Upload your passport photo.', 'Select AI Enhancement.', 'Download the enhanced passport photo.'],
    beforeAfter: 'A blurry, low-quality passport photo enhanced to a sharp, clear, officially acceptable image.',
    faqs: [
      { q: 'What are passport photo requirements?', a: 'Requirements vary by country but typically require a sharp, clear face photo with neutral expression on a white background.' },
      { q: 'Does AI enhancement help with passport photo acceptance?', a: 'Enhanced photos are sharper and clearer, meeting quality requirements for passport submission.' },
      { q: 'What countries passport photo standards does this support?', a: 'The enhancement is suitable for passport photos for all countries.' },
    ],
  },

  'id-photo-enhancer': {
    slug: 'id-photo-enhancer',
    h1: 'ID Photo Enhancer',
    title: 'ID Photo Enhancer Online — AI Powered',
    description: 'Enhance ID photos online with AI. Get a clear, sharp ID photo that meets official identity document requirements.',
    intro: { eyebrow: 'AI ID Photo Enhancement', tagline: 'The ID carries your name. Let the photo carry your clarity.', copy: 'An ID photo appears on documents you carry for years. Upload yours and the AI enhances it to the standard that official documents deserve — clear, sharp, and presenting your identity without ambiguity.' },
    howTo: ['Upload your ID photo.', 'Select AI Enhancement.', 'Download the enhanced ID photo.'],
    beforeAfter: 'A blurry, low-quality ID photo enhanced to a sharp, clear, official-quality image.',
    faqs: [
      { q: 'What ID documents does this work for?', a: 'National ID, Aadhaar, driving licence, student ID, employee ID, and all other identity document photos.' },
      { q: 'Can I enhance an ID photo that was taken years ago?', a: 'Yes. Old ID photos are enhanced to current quality standards.' },
      { q: 'Does enhancement affect facial features for ID verification?', a: 'No. The AI enhances clarity without altering facial features.' },
    ],
  },

  'visa-photo-enhancer': {
    slug: 'visa-photo-enhancer',
    h1: 'Visa Photo Enhancer',
    title: 'Visa Photo Enhancer Online — AI Powered',
    description: 'Enhance visa photos online with AI. Get a sharp, clear visa photo that meets embassy and consulate requirements.',
    intro: { eyebrow: 'AI Visa Photo Enhancement', tagline: 'Visa rejections are costly. A clear photo is not. Do it smart.', copy: 'Visa applications are reviewed against strict photo standards. A blurry or low-quality photo adds rejection risk to an already complex process. Upload yours and the AI delivers the clarity that visa authorities require.' },
    howTo: ['Upload your visa photo.', 'Select AI Enhancement.', 'Download the enhanced visa photo.'],
    beforeAfter: 'A low-quality visa photo enhanced to a sharp, clear, embassy-standard image.',
    faqs: [
      { q: 'What countries visa photo standards does this support?', a: 'US visa, UK visa, Schengen visa, UAE visa, and all other countries visa photo requirements.' },
      { q: 'What are common visa photo quality requirements?', a: 'Sharp focus, clear face, neutral background, correct size, and sufficient resolution.' },
      { q: 'Can I enhance a digital visa photo for online application?', a: 'Yes. Digital visa photo enhancement is fully supported.' },
    ],
  },

  'aadhaar-photo-enhancer': {
    slug: 'aadhaar-photo-enhancer',
    h1: 'Aadhaar Photo Enhancer',
    title: 'Aadhaar Photo Enhancer Online — AI Powered',
    description: 'Enhance Aadhaar card photos online with AI. Get a clear, sharp photo that meets UIDAI requirements.',
    intro: { eyebrow: 'AI Aadhaar Photo Enhancement', tagline: 'Your identity deserves a clear face. Give it one.', copy: 'Your Aadhaar is the foundation of your Indian identity. The photo on it should represent you clearly. Upload your Aadhaar photo and the AI enhances it to the standard that UIDAI expects — sharp, clear, and accurate.' },
    howTo: ['Upload your Aadhaar photo.', 'Select AI Enhancement.', 'Download the enhanced Aadhaar photo.'],
    beforeAfter: 'A blurry Aadhaar photo enhanced to a sharp, clear, UIDAI-standard image.',
    faqs: [
      { q: 'What are UIDAI photo requirements for Aadhaar?', a: 'UIDAI requires a clear face photo with good lighting, neutral expression, and sufficient resolution.' },
      { q: 'Can I enhance a photo for Aadhaar update or correction?', a: 'Yes. Enhanced photos are suitable for Aadhaar update submissions.' },
      { q: 'What file format does Aadhaar require?', a: 'UIDAI typically requires JPG format. The AI output can be saved as JPG.' },
    ],
  },

  'pan-card-photo-enhancer': {
    slug: 'pan-card-photo-enhancer',
    h1: 'PAN Card Photo Enhancer',
    title: 'PAN Card Photo Enhancer Online — AI Powered',
    description: 'Enhance PAN card photos online with AI. Get a clear, sharp photo that meets Income Tax Department requirements.',
    intro: { eyebrow: 'AI PAN Card Photo Enhancement', tagline: 'The document is permanent. The photo should be worthy of that.', copy: 'A PAN card stays with you for life. The photo on it should be clear enough to last that long. Upload your PAN photo and the AI enhances it to the standard that a permanent identity document deserves.' },
    howTo: ['Upload your PAN card photo.', 'Select AI Enhancement.', 'Download the enhanced PAN photo.'],
    beforeAfter: 'A low-quality PAN card photo enhanced to a sharp, clear, Income Tax Department standard image.',
    faqs: [
      { q: 'What are Income Tax Department photo requirements for PAN?', a: 'A clear face photo with white or light background, neutral expression, and sufficient resolution.' },
      { q: 'Can I use this for a new PAN card application?', a: 'Yes. Enhanced photos meet the requirements for new PAN card applications.' },
      { q: 'What file size does the PAN application portal require?', a: 'Typically under 300KB. The AI output can be compressed to meet this requirement.' },
    ],
  },

  'government-id-photo-enhancer': {
    slug: 'government-id-photo-enhancer',
    h1: 'Government ID Photo Enhancer',
    title: 'Government ID Photo Enhancer Online — AI Powered',
    description: 'Enhance government ID photos online with AI. Get a clear, sharp photo that meets government identity document requirements.',
    intro: { eyebrow: 'AI Government ID Photo', tagline: 'Official document. Official clarity. Do it well.', copy: 'Government ID documents carry legal weight. The photos on them carry the same responsibility. Upload yours and the AI enhances it to the official clarity that government documents require.' },
    howTo: ['Upload your government ID photo.', 'Select AI Enhancement.', 'Download the enhanced ID photo.'],
    beforeAfter: 'A low-quality government ID photo enhanced to a clear, sharp, officially acceptable image.',
    faqs: [
      { q: 'What government IDs does this support?', a: 'All Indian government IDs including Aadhaar, PAN, voter ID, driving licence, and ration card.' },
      { q: 'Can I enhance a photo for any government portal submission?', a: 'Yes. Enhanced photos meet the requirements of all major government portal submissions.' },
      { q: 'Is the enhancement suitable for e-KYC processes?', a: 'Yes. AI-enhanced photos are suitable for e-KYC face verification.' },
    ],
  },

  'document-photo-enhancer-premium': {
    slug: 'document-photo-enhancer-premium',
    h1: 'Document Photo Enhancer',
    title: 'Document Photo Enhancer Online — Premium AI Powered',
    description: 'Premium document photo enhancement online. AI delivers the finest quality for official document submissions.',
    intro: { eyebrow: 'Premium AI Document Photo', tagline: 'Documents last decades. The photo in them should too.', copy: 'Official documents carry your identity through time. The photo within them should be clear enough to survive that journey. Upload yours and the AI enhances it to premium quality that official documents deserve.' },
    howTo: ['Upload your document photo.', 'Select Premium AI Enhancement.', 'Download the premium-quality document photo.'],
    beforeAfter: 'A document photo enhanced to premium quality with sharp, clear, officially acceptable detail.',
    faqs: [
      { q: 'What documents does premium photo enhancement support?', a: 'All official documents — passport, visa, ID, PAN, Aadhaar, driving licence, and more.' },
      { q: 'How does premium differ from standard enhancement?', a: 'Premium uses GPU-powered processing for maximum quality output with higher resolution options.' },
      { q: 'Is premium enhancement suitable for biometric documents?', a: 'Yes. Premium output meets biometric photo quality standards.' },
    ],
  },

  'exam-photo-enhancer-premium': {
    slug: 'exam-photo-enhancer-premium',
    h1: 'Exam Photo Enhancer',
    title: 'Exam Photo Enhancer Online — Premium AI Powered',
    description: 'Premium exam photo enhancement online. AI delivers sharp, clear photos that meet exam portal requirements.',
    intro: { eyebrow: 'Premium AI Exam Photo', tagline: 'One blur can cost an exam seat. Do not let it.', copy: 'Exam portals reject photos for quality issues every year — costing candidates their application. Upload your exam photo and the AI enhances it to the clarity and quality that exam portals require.' },
    howTo: ['Upload your exam photo.', 'Select Premium AI Enhancement.', 'Download the exam-ready photo.'],
    beforeAfter: 'A low-quality exam photo enhanced to a sharp, clear, portal-accepted image.',
    faqs: [
      { q: 'What exams does this photo enhancement support?', a: 'NEET, JEE, UPSC, SSC, IBPS, SBI, RRB, state PSC, and all other exam portal photos.' },
      { q: 'What KB size do exam portals require?', a: 'Most exam portals require photos between 10KB and 200KB. Enhanced photos can be compressed to requirement.' },
      { q: 'Will the enhanced photo pass portal validation?', a: 'Enhanced photos meet the clarity and quality requirements of all major exam portals.' },
    ],
  },

  'application-photo-enhancer': {
    slug: 'application-photo-enhancer',
    h1: 'Application Photo Enhancer',
    title: 'Application Photo Enhancer Online — AI Powered',
    description: 'Enhance application photos online with AI. Get a clear, professional photo ready for any official application.',
    intro: { eyebrow: 'AI Application Photo Enhancement', tagline: 'The application is ready. Now let the photo be ready too.', copy: 'Applications are prepared carefully. The photo attached to them should be too. Upload your application photo and the AI enhances it to the standard your application deserves — clear, sharp, and professionally presented.' },
    howTo: ['Upload your application photo.', 'Select AI Enhancement.', 'Download the enhanced application photo.'],
    beforeAfter: 'A standard application photo enhanced to a sharp, clear, professional-quality submission image.',
    faqs: [
      { q: 'What applications does this photo enhancement support?', a: 'Job applications, university applications, government applications, exam applications, and all official submissions.' },
      { q: 'Can I enhance a photo for an online application portal?', a: 'Yes. Enhanced photos are ready for all online portal uploads.' },
      { q: 'What photo format should I upload?', a: 'JPG, PNG, and WebP are all supported.' },
    ],
  },

  'certificate-photo-enhancer': {
    slug: 'certificate-photo-enhancer',
    h1: 'Certificate Photo Enhancer',
    title: 'Certificate Photo Enhancer Online — AI Powered',
    description: 'Enhance certificate photos online with AI. Get a clear, sharp photo for certificates, marksheets, and official records.',
    intro: { eyebrow: 'AI Certificate Photo Enhancement', tagline: 'A certificate is a proud moment. Preserve it the way it deserves.', copy: 'A certificate documents an achievement. The photo on it represents the person who earned it. Upload yours and the AI enhances it to the quality that achievement deserves — clear, sharp, and worthy of the record.' },
    howTo: ['Upload your certificate photo.', 'Select AI Enhancement.', 'Download the enhanced certificate photo.'],
    beforeAfter: 'A blurry certificate photo enhanced to a sharp, clear, record-worthy image.',
    faqs: [
      { q: 'What certificates does this photo enhancement support?', a: 'School certificates, college marksheets, professional certificates, and all official academic and professional records.' },
      { q: 'Can I enhance a scanned certificate photo?', a: 'Yes. Scanned photos from certificates are fully supported.' },
      { q: 'Is enhanced certificate photo suitable for official use?', a: 'Yes. Enhanced photos meet the quality standards for official certificate use.' },
    ],
  },

  // ─────────────────────────────────────────────
  // PROBLEM FIX CLUSTER
  // ─────────────────────────────────────────────

  'ai-photo-enhancer-premium': {
    slug: 'ai-photo-enhancer-premium',
    h1: 'AI Photo Enhancer',
    title: 'AI Photo Enhancer Online — Premium Powered',
    description: 'Premium AI photo enhancer online. The finest photo enhancement powered by CodeFormer and RealESRGAN.',
    intro: { eyebrow: 'Premium AI Photo Enhancement', tagline: 'The AI found what the camera left behind. See it now.', copy: 'Most photo tools sharpen what is already there. This AI finds what the camera missed — reconstructing detail, recovering texture, and delivering an image that shows the moment more fully than the original capture did.' },
    howTo: ['Upload your photo.', 'Select Premium AI Enhancement.', 'Download the premium-quality enhanced photo.'],
    beforeAfter: 'A standard photo processed by premium AI to reveal full detail and clarity.',
    faqs: [
      { q: 'What makes this AI photo enhancer premium?', a: 'GPU-powered CodeFormer and RealESRGAN processing with output up to 8K resolution.' },
      { q: 'What types of photos benefit most from premium enhancement?', a: 'Portraits, old photos, event photos, and any image where face or fine detail matters most.' },
      { q: 'How does premium AI enhancement compare to standard tools?', a: 'Premium AI reconstructs missing detail rather than just sharpening existing pixels — a fundamentally different level of enhancement.' },
    ],
  },

  'premium-photo-enhancer': {
    slug: 'premium-photo-enhancer',
    h1: 'Premium Photo Enhancer',
    title: 'Premium Photo Enhancer Online — AI Powered',
    description: 'Premium photo enhancement online. AI delivers the finest photo quality for photos that deserve the best.',
    intro: { eyebrow: 'Premium AI Enhancement', tagline: 'Premium is not the price. Premium is the detail you get back.', copy: 'Some photos deserve more than a basic sharpen. The ones that hold real moments, real faces, real memories — they deserve the premium treatment. Upload yours and the AI delivers detail that standard tools simply cannot produce.' },
    howTo: ['Upload your photo.', 'Select Premium Enhancement.', 'Download your premium-quality photo.'],
    beforeAfter: 'A photo processed through the premium AI pipeline for maximum detail and quality.',
    faqs: [
      { q: 'What is included in premium photo enhancement?', a: 'Face restoration with CodeFormer, image upscaling with RealESRGAN, and GPU processing for maximum quality.' },
      { q: 'Is premium enhancement suitable for commercial use?', a: 'Yes. Premium output meets commercial photography quality standards.' },
      { q: 'What resolutions are available in premium?', a: 'HD, 2K, 4K, and 8K are all available.' },
    ],
  },

  'professional-photo-enhancer': {
    slug: 'professional-photo-enhancer',
    h1: 'Professional Photo Enhancer',
    title: 'Professional Photo Enhancer Online — AI Powered',
    description: 'Professional photo enhancement online. AI delivers the sharpness, detail, and quality that professional photos demand.',
    intro: { eyebrow: 'AI Professional Photo Enhancement', tagline: 'Professional clarity for a moment that earned it.', copy: 'Professional photos are used in contexts where quality reflects directly on reputation. Upload yours and the AI enhances it to the professional standard — sharp, detailed, and polished without over-processing.' },
    howTo: ['Upload your professional photo.', 'Select AI Professional Enhancement.', 'Download the professionally enhanced photo.'],
    beforeAfter: 'A standard photo enhanced to professional quality with precise sharpness and detail.',
    faqs: [
      { q: 'What qualifies as professional photo enhancement?', a: 'Natural face recovery, controlled sharpening, high resolution output, and no visible processing artefacts.' },
      { q: 'Can this replace professional photo retouching?', a: 'For many use cases yes. For high-end commercial retouching, AI enhancement provides an excellent starting point.' },
      { q: 'Is output suitable for print publication?', a: 'Yes. Professional AI enhancement output meets print publication quality requirements.' },
    ],
  },

  'photo-quality-enhancer': {
    slug: 'photo-quality-enhancer',
    h1: 'Photo Quality Enhancer',
    title: 'Photo Quality Enhancer Online — AI Powered',
    description: 'Enhance photo quality online with AI. Improve sharpness, detail, and resolution of any photo instantly.',
    intro: { eyebrow: 'AI Photo Quality Enhancement', tagline: 'Quality was always there. Just waiting to be uncovered.', copy: 'Every photo contains more quality than it shows. Compression, low resolution, and basic cameras hide what was captured. Upload yours and the AI uncovers the full quality that was always in the image.' },
    howTo: ['Upload your photo.', 'Select AI Quality Enhancement.', 'Download the high-quality photo.'],
    beforeAfter: 'A low-quality photo enhanced to high quality with sharp, clear detail throughout.',
    faqs: [
      { q: 'How much can AI improve photo quality?', a: 'Significant improvement is typical. Old, compressed, or low-resolution photos benefit the most.' },
      { q: 'Does quality enhancement work on all photo types?', a: 'Yes. Portraits, landscapes, events, and all other photo types are supported.' },
      { q: 'Is the quality improvement permanent?', a: 'Yes. The enhanced photo is a new file with permanently improved quality.' },
    ],
  },

  'image-quality-enhancer': {
    slug: 'image-quality-enhancer',
    h1: 'Image Quality Enhancer',
    title: 'Image Quality Enhancer Online — AI Powered',
    description: 'Enhance image quality online with AI. Improve sharpness, detail, and clarity of any image instantly.',
    intro: { eyebrow: 'AI Image Quality Enhancement', tagline: 'The image was good. The quality was not. Restore the balance.', copy: 'A good image with poor quality is a frustrating thing — the moment is right but the detail is not. Upload your image and the AI restores the quality, delivering the sharp, clear version the image always should have been.' },
    howTo: ['Upload your image.', 'Select AI Quality Enhancement.', 'Download the high-quality image.'],
    beforeAfter: 'A poor-quality image enhanced to sharp, clear, high-quality output.',
    faqs: [
      { q: 'What image formats are supported?', a: 'JPG, PNG, and WebP are all supported.' },
      { q: 'Can AI enhance image quality for printing?', a: 'Yes. Quality-enhanced images are suitable for printing at standard and large sizes.' },
      { q: 'Does image quality enhancement work on graphics and illustrations?', a: 'Yes. The AI works on photographs, graphics, and illustrations.' },
    ],
  },

  'make-photo-clear': {
    slug: 'make-photo-clear',
    h1: 'Make Photo Clear',
    title: 'Make Photo Clear Online — AI Photo Clarifier',
    description: 'Make photos clear online with AI. Remove blur, sharpen detail, and get crystal clear photos instantly.',
    intro: { eyebrow: 'AI Photo Clarity', tagline: 'Make it clear. Make it real. Make it last.', copy: 'A clear photo is a kept memory. An unclear one is a lost one. Upload yours and the AI removes the blur, the haze, and the compression artefacts — delivering a clear photo that can be seen, shared, and preserved properly.' },
    howTo: ['Upload your unclear photo.', 'Select AI Clarity mode.', 'Download the clear photo.'],
    beforeAfter: 'A blurry, unclear photo made sharp and crystal clear with full detail.',
    faqs: [
      { q: 'How do I make a blurry photo clear?', a: 'Upload the photo and select AI Clarity. The tool removes blur and sharpens detail automatically.' },
      { q: 'Can I make a very blurry photo clear?', a: 'Significant improvement is possible. The AI reconstructs detail from available image data.' },
      { q: 'Does making a photo clear change its colours?', a: 'No. The AI targets clarity only and preserves original colours accurately.' },
    ],
  },

  'make-picture-clear': {
    slug: 'make-picture-clear',
    h1: 'Make Picture Clear',
    title: 'Make Picture Clear Online — AI Picture Clarifier',
    description: 'Make pictures clear online with AI. Sharpen, clarify, and enhance any blurry or unclear picture.',
    intro: { eyebrow: 'AI Picture Clarity', tagline: 'The picture was always clear in your mind. Now make it clear everywhere.', copy: 'You know exactly what that picture shows. Everyone else sees blur. Upload it and the AI makes the picture clear for everyone — sharp, detailed, and showing exactly what you always knew was there.' },
    howTo: ['Upload your unclear picture.', 'Select AI Clarity mode.', 'Download the clear picture.'],
    beforeAfter: 'A blurry, unclear picture clarified to a sharp, detailed, fully visible image.',
    faqs: [
      { q: 'Does making a picture clear work on old scanned pictures?', a: 'Yes. Scanned pictures are clarified and enhanced effectively.' },
      { q: 'Can I make a picture clear for printing?', a: 'Yes. Clarified pictures are suitable for printing.' },
      { q: 'How long does it take to make a picture clear?', a: 'Most pictures are processed in under a minute.' },
    ],
  },

  'clear-photo-online': {
    slug: 'clear-photo-online',
    h1: 'Clear Photo Online',
    title: 'Clear Photo Online — AI Photo Clarity Tool',
    description: 'Clear photos online with AI. Get sharp, clear, detailed photos from blurry or low-quality originals.',
    intro: { eyebrow: 'AI Online Photo Clarity', tagline: 'Clear photo. Clear memory. Clear proof it happened.', copy: 'A blurry photo is almost worse than no photo — the memory is there but you cannot see it properly. Upload yours and the AI clears it, delivering the sharp, clear version that proves the moment exactly as it happened.' },
    howTo: ['Upload your blurry photo.', 'Select AI Clear mode.', 'Download the clear photo.'],
    beforeAfter: 'A blurry, hazy photo cleared to a sharp, detailed, fully visible image.',
    faqs: [
      { q: 'Can I clear a photo online for free?', a: 'A preview is available. Full resolution download requires a premium credit.' },
      { q: 'Does online photo clearing work on mobile?', a: 'Yes. The tool works on all devices including mobile browsers.' },
      { q: 'What causes photo blur?', a: 'Camera movement, out-of-focus capture, distance, and compression all cause blur. The AI addresses all types.' },
    ],
  },

  'clear-blurry-photo': {
    slug: 'clear-blurry-photo',
    h1: 'Clear Blurry Photo',
    title: 'Clear Blurry Photo Online — AI Blur Removal',
    description: 'Clear blurry photos online with AI. Remove blur and recover sharp detail from any blurry photo.',
    intro: { eyebrow: 'AI Blur Removal', tagline: 'The blur was never the story. Clear it and find what was.', copy: 'Blur hides the image that was actually captured. Upload your blurry photo and the AI removes the blur layer by layer — revealing the sharp, clear image that was always underneath.' },
    howTo: ['Upload your blurry photo.', 'Select AI Blur Removal.', 'Download the clear, sharp photo.'],
    beforeAfter: 'A heavily blurry photo with blur fully removed to reveal a clear, sharp image.',
    faqs: [
      { q: 'What types of blur can AI remove from photos?', a: 'Motion blur, focus blur, camera shake blur, and general softness are all handled.' },
      { q: 'Can AI clear a photo blurred by movement?', a: 'Yes. Motion blur is one of the most common types and is handled effectively by the AI.' },
      { q: 'Does blur removal affect photo colours?', a: 'No. Only the blur is removed. Colours and composition are preserved.' },
    ],
  },

  'sharpen-photo-online': {
    slug: 'sharpen-photo-online',
    h1: 'Sharpen Photo Online',
    title: 'Sharpen Photo Online — AI Photo Sharpening',
    description: 'Sharpen photos online with AI. Get crisp, sharp, detailed photos from soft or blurry originals.',
    intro: { eyebrow: 'AI Photo Sharpening', tagline: 'Sharp photo. Sharp memory. Sharp truth.', copy: 'Sharpness is what separates a photo you stop to look at from one you scroll past. Upload yours and the AI applies precise, natural sharpening — not the artificial kind that creates halos, but the kind that reveals real detail.' },
    howTo: ['Upload your soft or blurry photo.', 'Select AI Sharpen mode.', 'Download the sharpened photo.'],
    beforeAfter: 'A soft, unsharp photo sharpened to crisp, clear detail throughout.',
    faqs: [
      { q: 'Is AI photo sharpening different from standard sharpening filters?', a: 'Yes. AI sharpening reconstructs detail based on image content rather than applying a blanket filter.' },
      { q: 'Does AI sharpening create halos or artefacts?', a: 'No. The AI is calibrated to avoid common sharpening artefacts.' },
      { q: 'Can I sharpen a photo for professional printing?', a: 'Yes. AI-sharpened photos are suitable for professional printing.' },
    ],
  },

  'unblur-photo-online': {
    slug: 'unblur-photo-online',
    h1: 'Unblur Photo Online',
    title: 'Unblur Photo Online — AI Blur Removal Tool',
    description: 'Unblur photos online with AI. Remove blur and restore sharp, clear detail from any blurry photo.',
    intro: { eyebrow: 'AI Unblur Tool', tagline: 'Unblur the photo. The emotion was never blurred to begin with.', copy: 'The feeling in the photo was never blurry. The image just failed to show it. Upload your blurry photo and the AI unblurs it — restoring the sharp, clear image so the feeling and the photo finally match.' },
    howTo: ['Upload your blurry photo.', 'Select AI Unblur mode.', 'Download the unblurred photo.'],
    beforeAfter: 'A blurry photo unblurred by AI to reveal a sharp, clear, detailed image.',
    faqs: [
      { q: 'How does AI unblur a photo?', a: 'The AI analyses the blur pattern and reconstructs the sharp detail that the blur obscured.' },
      { q: 'Can any blurry photo be unblurred?', a: 'Most blurry photos are significantly improved. Extreme blur may have partial recovery.' },
      { q: 'Does unblurring change the photo composition?', a: 'No. Only the sharpness is improved. Composition and framing are preserved.' },
    ],
  },

  'blurred-photo-enhancer': {
    slug: 'blurred-photo-enhancer',
    h1: 'Blurred Photo Enhancer',
    title: 'Blurred Photo Enhancer Online — AI Powered',
    description: 'Enhance blurred photos online with AI. Remove blur, recover detail, and restore sharp clarity to any blurred image.',
    intro: { eyebrow: 'AI Blurred Photo Enhancement', tagline: 'Blurred outside. Perfect inside. Let us match them both.', copy: 'The perfect moment is in that blurred photo. The face, the smile, the occasion — all of it is there, just hidden by blur. Upload it and the AI enhances it, revealing everything that belongs to that moment.' },
    howTo: ['Upload your blurred photo.', 'Select AI Enhancement mode.', 'Download the sharp, clear enhanced photo.'],
    beforeAfter: 'A blurred photo enhanced to remove all blur and reveal sharp, clear detail.',
    faqs: [
      { q: 'Can AI enhance a photo blurred by motion?', a: 'Yes. Motion-blurred photos are significantly improved by AI enhancement.' },
      { q: 'Does AI enhancement work on partially blurred photos?', a: 'Yes. The AI targets the blurred areas while leaving sharp areas unchanged.' },
      { q: 'Can blurred face photos be enhanced?', a: 'Yes. Blurred face photos receive specialised face enhancement treatment.' },
    ],
  },

  'low-quality-photo-enhancer': {
    slug: 'low-quality-photo-enhancer',
    h1: 'Low Quality Photo Enhancer',
    title: 'Low Quality Photo Enhancer Online — AI Powered',
    description: 'Enhance low quality photos online with AI. Transform poor quality photos into sharp, clear, high-quality images.',
    intro: { eyebrow: 'AI Low Quality Photo Enhancement', tagline: 'Low quality photo. High quality moment. Restore the balance.', copy: 'The moment was high quality. The camera, the connection, or the compression was not. Upload your low quality photo and the AI restores the balance — delivering a high quality image worthy of the moment it holds.' },
    howTo: ['Upload your low quality photo.', 'Select AI Enhancement.', 'Download the high-quality enhanced photo.'],
    beforeAfter: 'A low quality, grainy photo enhanced to sharp, clear, high-quality output.',
    faqs: [
      { q: 'How low quality can a photo be for AI enhancement to work?', a: 'The AI works effectively even on very low quality photos as long as the main subject is visible.' },
      { q: 'Can AI enhance a 240p or very small photo?', a: 'Yes. Very small photos are upscaled and enhanced simultaneously.' },
      { q: 'Does low quality photo enhancement look natural?', a: 'Yes. The AI generates realistic detail that matches the original content.' },
    ],
  },

  'low-resolution-photo-enhancer': {
    slug: 'low-resolution-photo-enhancer',
    h1: 'Low Resolution Photo Enhancer',
    title: 'Low Resolution Photo Enhancer Online — AI Powered',
    description: 'Enhance low resolution photos online with AI. Upscale and improve clarity of low-res photos to high resolution.',
    intro: { eyebrow: 'AI Low Resolution Enhancement', tagline: 'Low resolution was never the truth of that day. Find the truth.', copy: 'A low resolution photo is a compressed version of a real moment. Upload yours and the AI finds the full truth in it — upscaling to high resolution and recovering the detail that low resolution hid.' },
    howTo: ['Upload your low resolution photo.', 'Select AI Resolution Enhancement.', 'Download the high-resolution photo.'],
    beforeAfter: 'A tiny, low-resolution photo enhanced and upscaled to a sharp, high-resolution image.',
    faqs: [
      { q: 'What is the minimum resolution I can upload?', a: 'Any resolution is accepted. Very small images are upscaled significantly.' },
      { q: 'How much can AI upscale a low resolution photo?', a: 'Up to 8x upscaling is possible with the RealESRGAN pipeline.' },
      { q: 'Does the upscaled photo look natural?', a: 'Yes. AI upscaling reconstructs realistic detail rather than stretching pixels.' },
    ],
  },

  'pixelated-photo-enhancer': {
    slug: 'pixelated-photo-enhancer',
    h1: 'Pixelated Photo Enhancer',
    title: 'Pixelated Photo Enhancer Online — AI Powered',
    description: 'Enhance pixelated photos online with AI. Remove pixelation and restore sharp, smooth, clear detail.',
    intro: { eyebrow: 'AI Pixelation Removal', tagline: 'Pixelated by time. Restored by choice. Do it smart.', copy: 'Pixelation is what happens when an image is stretched beyond what it was given. Upload your pixelated photo and the AI removes the blocks, reconstructs the detail, and delivers a smooth, sharp, natural-looking image.' },
    howTo: ['Upload your pixelated photo.', 'Select AI Enhancement.', 'Download the smooth, clear enhanced photo.'],
    beforeAfter: 'A heavily pixelated photo enhanced by AI to remove all visible pixels and restore smooth detail.',
    faqs: [
      { q: 'Can AI completely remove pixelation?', a: 'Yes. The AI reconstructs smooth, natural detail from pixelated images.' },
      { q: 'Does removing pixelation look natural?', a: 'Yes. The AI generates realistic texture and detail that matches the original image content.' },
      { q: 'Can AI enhance a face photo that is pixelated?', a: 'Yes. Pixelated face photos are enhanced with specialised face restoration processing.' },
    ],
  },

  'grainy-photo-enhancer': {
    slug: 'grainy-photo-enhancer',
    h1: 'Grainy Photo Enhancer',
    title: 'Grainy Photo Enhancer Online — AI Powered',
    description: 'Enhance grainy photos online with AI. Remove grain, reduce noise, and restore clear detail from grainy images.',
    intro: { eyebrow: 'AI Grain Removal', tagline: 'Grain hid the detail. Let us find every one of them.', copy: 'Grain covers photos the way fog covers a landscape — the detail is there, just hidden. Upload your grainy photo and the AI removes the grain layer carefully, revealing the clean, sharp detail that was underneath all along.' },
    howTo: ['Upload your grainy photo.', 'Select AI Grain Removal.', 'Download the smooth, clear enhanced photo.'],
    beforeAfter: 'A heavily grainy photo enhanced by AI grain removal to reveal smooth, clean, clear detail.',
    faqs: [
      { q: 'What causes grain in photos?', a: 'High ISO settings, low light shooting, film grain in old photos, and image compression all cause grain.' },
      { q: 'Does grain removal affect sharpness?', a: 'The AI removes grain while preserving and even enhancing underlying sharpness.' },
      { q: 'Can grain be removed from old film photos?', a: 'Yes. Film grain from old photographs is one of the most common use cases.' },
    ],
  },

  'noisy-photo-enhancer': {
    slug: 'noisy-photo-enhancer',
    h1: 'Noisy Photo Enhancer',
    title: 'Noisy Photo Enhancer Online — AI Noise Reduction',
    description: 'Enhance noisy photos online with AI. Remove digital noise and restore clean, clear detail from noisy images.',
    intro: { eyebrow: 'AI Noise Reduction', tagline: 'The noise was never the memory. Remove it and see clearly.', copy: 'Digital noise is visual static — random patterns that cover the real image underneath. Upload your noisy photo and the AI applies intelligent noise reduction, removing the static and revealing the clean image that was always there.' },
    howTo: ['Upload your noisy photo.', 'Select AI Noise Reduction.', 'Download the clean, clear enhanced photo.'],
    beforeAfter: 'A digitally noisy photo with noise removed to reveal a clean, sharp, clear image.',
    faqs: [
      { q: 'What is digital noise in photos?', a: 'Digital noise is random pixel variation caused by high ISO, low light, or sensor heat during capture.' },
      { q: 'Does AI noise reduction affect image detail?', a: 'The AI removes noise while preserving and recovering underlying detail.' },
      { q: 'Can noise be removed from night photos?', a: 'Yes. Night photography noise reduction is one of the most significant improvements AI delivers.' },
    ],
  },

  // ─────────────────────────────────────────────
  // PLATFORM / CREATOR CLUSTER
  // ─────────────────────────────────────────────

  'mobile-photo-enhancer': {
    slug: 'mobile-photo-enhancer',
    h1: 'Mobile Photo Enhancer',
    title: 'Mobile Photo Enhancer Online — AI Powered',
    description: 'Enhance mobile phone photos online with AI. Get professional quality from any phone camera photo.',
    intro: { eyebrow: 'AI Mobile Photo Enhancement', tagline: 'Mobile captured it. Now let us give it what mobile could not.', copy: 'Mobile cameras capture moments fast. What they cannot always give those moments is the quality they deserve. Upload your phone photo and the AI delivers the professional enhancement that phone cameras have not yet caught up to.' },
    howTo: ['Upload your mobile phone photo.', 'Select AI Enhancement.', 'Download the professionally enhanced photo.'],
    beforeAfter: 'A standard mobile phone photo enhanced to professional quality with sharp detail.',
    faqs: [
      { q: 'Can AI make a phone photo look professional?', a: 'Yes. AI enhancement brings phone photos significantly closer to professional camera quality.' },
      { q: 'Does enhancement work on photos from all phone brands?', a: 'Yes. Photos from all phone cameras are supported.' },
      { q: 'Can I enhance a photo taken on an older phone?', a: 'Yes. Older phone cameras produce lower quality photos that benefit most from AI enhancement.' },
    ],
  },

  'phone-photo-enhancer': {
    slug: 'phone-photo-enhancer',
    h1: 'Phone Photo Enhancer',
    title: 'Phone Photo Enhancer Online — AI Powered',
    description: 'Enhance phone photos online with AI. Transform phone camera photos into sharp, high-quality images.',
    intro: { eyebrow: 'AI Phone Photo Enhancement', tagline: 'The phone got the moment. Let us get the quality too.', copy: 'Your phone was there for the moment. The quality it gave that moment is another story. Upload your phone photo and the AI gives the quality that the moment — not just the phone — deserves.' },
    howTo: ['Upload your phone photo.', 'Select AI Enhancement.', 'Download the enhanced phone photo.'],
    beforeAfter: 'A phone photo enhanced to sharp, clear, high-quality output.',
    faqs: [
      { q: 'What phone photo problems does AI fix?', a: 'Blur, noise, low resolution, poor lighting, compression, and colour inaccuracy are all improved.' },
      { q: 'Can I enhance a photo from a budget phone?', a: 'Yes. Budget phone photos benefit most from AI enhancement.' },
      { q: 'Does AI enhancement work on portrait mode phone photos?', a: 'Yes. Portrait mode photos are enhanced for maximum face quality.' },
    ],
  },

  'camera-photo-enhancer': {
    slug: 'camera-photo-enhancer',
    h1: 'Camera Photo Enhancer',
    title: 'Camera Photo Enhancer Online — AI Powered',
    description: 'Enhance camera photos online with AI. Improve the quality and detail of photos from any camera.',
    intro: { eyebrow: 'AI Camera Photo Enhancement', tagline: 'The camera did its job. Now let us finish it well.', copy: 'Cameras capture moments. AI finishes the job — recovering the detail the sensor missed, sharpening what the lens softened, and delivering the image that the moment actually looked like.' },
    howTo: ['Upload your camera photo.', 'Select AI Enhancement.', 'Download the enhanced camera photo.'],
    beforeAfter: 'A standard camera photo enhanced to sharp, detailed, professional-quality output.',
    faqs: [
      { q: 'Does AI enhancement work on DSLR photos?', a: 'Yes. DSLR photos are enhanced for maximum sharpness and detail recovery.' },
      { q: 'Can AI improve photos from a compact camera?', a: 'Yes. Compact camera photos benefit significantly from AI enhancement.' },
      { q: 'Does enhancement work on RAW camera files?', a: 'JPG, PNG, and WebP are supported. Convert RAW to JPG before uploading.' },
    ],
  },

  'gallery-photo-enhancer': {
    slug: 'gallery-photo-enhancer',
    h1: 'Gallery Photo Enhancer',
    title: 'Gallery Photo Enhancer Online — AI Powered',
    description: 'Enhance gallery photos online with AI. Give every photo in your gallery the quality it deserves.',
    intro: { eyebrow: 'AI Gallery Photo Enhancement', tagline: 'Sitting in the gallery unnoticed. Time to give it the clarity it earned.', copy: 'Your gallery holds thousands of moments. Some of them deserve more than sitting in a folder, unseen and undervalued. Upload the ones that matter and the AI gives them the quality to be seen properly.' },
    howTo: ['Upload your gallery photo.', 'Select AI Enhancement.', 'Download the enhanced photo.'],
    beforeAfter: 'A gallery photo enhanced to sharp, clear, high-quality output ready to share or print.',
    faqs: [
      { q: 'Can I enhance old gallery photos from years ago?', a: 'Yes. Old gallery photos are restored and enhanced effectively.' },
      { q: 'Is there a limit to how many gallery photos I can enhance?', a: 'Each photo is processed individually. Multiple credits allow multiple enhancements.' },
      { q: 'Can I enhance a gallery photo for sharing on social media?', a: 'Yes. Enhanced photos are ready for all social media platforms.' },
    ],
  },

  'whatsapp-photo-enhancer-premium': {
    slug: 'whatsapp-photo-enhancer-premium',
    h1: 'WhatsApp Photo Enhancer',
    title: 'WhatsApp Photo Enhancer Online — Premium AI Powered',
    description: 'Premium WhatsApp photo enhancement online. Restore and enhance photos compressed by WhatsApp.',
    intro: { eyebrow: 'Premium AI WhatsApp Enhancement', tagline: 'Compressed by sending. Restored by choice. Do it smart.', copy: 'WhatsApp compresses photos dramatically when sending. The original quality is lost every time. Upload your WhatsApp photo and the AI restores what compression took away — sharp, clear, and at the quality it had before it was sent.' },
    howTo: ['Upload your WhatsApp photo.', 'Select Premium AI Enhancement.', 'Download the restored, enhanced photo.'],
    beforeAfter: 'A heavily compressed WhatsApp photo restored by AI to sharp, clear, original quality.',
    faqs: [
      { q: 'How much does WhatsApp compress photos?', a: 'WhatsApp compresses photos by up to 80%, significantly reducing quality. AI restoration recovers most of that quality.' },
      { q: 'Can I restore a WhatsApp video screenshot?', a: 'Yes. Video screenshots and compressed images are supported.' },
      { q: 'Does WhatsApp photo restoration work on forwarded photos?', a: 'Yes. Forwarded photos are often further compressed — AI restoration helps recover quality.' },
    ],
  },

  'telegram-photo-enhancer-premium': {
    slug: 'telegram-photo-enhancer-premium',
    h1: 'Telegram Photo Enhancer',
    title: 'Telegram Photo Enhancer Online — Premium AI Powered',
    description: 'Premium Telegram photo enhancement online. Restore and enhance photos compressed by Telegram.',
    intro: { eyebrow: 'Premium AI Telegram Enhancement', tagline: 'Telegram compressed it. We restore it. Simple.', copy: 'Telegram compresses photos to save bandwidth. Upload your Telegram photo and the AI restores the quality — clean, sharp, and at the level it deserved before the compression took hold.' },
    howTo: ['Upload your Telegram photo.', 'Select Premium AI Enhancement.', 'Download the restored photo.'],
    beforeAfter: 'A Telegram-compressed photo restored by AI to sharp, clear quality.',
    faqs: [
      { q: 'Does Telegram compress photos?', a: 'Yes. Telegram compresses photos when sent normally. Use "Send as File" to avoid compression, or restore after.' },
      { q: 'Can I restore a photo from a Telegram group?', a: 'Yes. Group photos and direct message photos are both supported.' },
      { q: 'How does AI restore Telegram-compressed photos?', a: 'The AI reconstructs the high-frequency detail that compression removed, restoring sharpness and clarity.' },
    ],
  },

  'instagram-photo-enhancer-premium': {
    slug: 'instagram-photo-enhancer-premium',
    h1: 'Instagram Photo Enhancer',
    title: 'Instagram Photo Enhancer Online — Premium AI Powered',
    description: 'Premium Instagram photo enhancement online. Restore and enhance photos compressed by Instagram.',
    intro: { eyebrow: 'Premium AI Instagram Enhancement', tagline: 'Instagram saw it. The world should see it clearly too.', copy: 'Instagram compresses every photo you post. What your followers see is a compressed version of what you captured. Upload your Instagram photo and the AI restores it to the quality the original moment had.' },
    howTo: ['Upload your Instagram photo.', 'Select Premium AI Enhancement.', 'Download the restored, enhanced photo.'],
    beforeAfter: 'An Instagram-compressed photo restored by AI to sharp, vivid, original quality.',
    faqs: [
      { q: 'Does Instagram compress photos when posted?', a: 'Yes. Instagram applies significant compression, especially to stories and feed posts.' },
      { q: 'Can I enhance an Instagram photo for reprinting?', a: 'Yes. AI-enhanced Instagram photos are suitable for reprinting.' },
      { q: 'Can I enhance screenshots from Instagram?', a: 'Yes. Screenshots and downloaded Instagram photos are both supported.' },
    ],
  },

  'facebook-photo-enhancer-premium': {
    slug: 'facebook-photo-enhancer-premium',
    h1: 'Facebook Photo Enhancer',
    title: 'Facebook Photo Enhancer Online — Premium AI Powered',
    description: 'Premium Facebook photo enhancement online. Restore and enhance photos compressed by Facebook.',
    intro: { eyebrow: 'Premium AI Facebook Enhancement', tagline: 'Posted once. Preserved all time. That is the goal.', copy: 'Facebook photos age with their compression. Upload yours and the AI restores the quality it had before Facebook touched it — preserving the moment at its best for all time.' },
    howTo: ['Upload your Facebook photo.', 'Select Premium AI Enhancement.', 'Download the restored photo.'],
    beforeAfter: 'A Facebook-compressed photo restored by AI to its original sharp, clear quality.',
    faqs: [
      { q: 'How much does Facebook compress photos?', a: 'Facebook applies heavy compression, often reducing quality by 60-80%.' },
      { q: 'Can I restore old Facebook photos from years ago?', a: 'Yes. Old Facebook photos that have been heavily compressed are restored effectively.' },
      { q: 'Can I enhance a Facebook memory photo?', a: 'Yes. Facebook memory photos are a common use case for restoration.' },
    ],
  },

  'social-media-photo-enhancer': {
    slug: 'social-media-photo-enhancer',
    h1: 'Social Media Photo Enhancer',
    title: 'Social Media Photo Enhancer Online — AI Powered',
    description: 'Enhance social media photos online with AI. Get sharp, vivid, high-quality photos for all social media platforms.',
    intro: { eyebrow: 'AI Social Media Enhancement', tagline: 'Social media moves fast. Your photo should stand still and shine.', copy: 'Social media compresses and scrolls past everything. Upload your photo and the AI gives it the quality to stop the scroll — sharp, vivid, and clear enough to be seen properly even after compression.' },
    howTo: ['Upload your social media photo.', 'Select AI Enhancement.', 'Download the enhanced social media photo.'],
    beforeAfter: 'A social media photo enhanced to sharp, vivid, platform-ready quality.',
    faqs: [
      { q: 'Which social media platforms does this support?', a: 'Instagram, Facebook, Twitter, LinkedIn, TikTok, WhatsApp, Telegram, and all other platforms.' },
      { q: 'Does enhancing before posting help with compression?', a: 'Yes. Higher quality originals retain more quality after social media compression.' },
      { q: 'Can I enhance a photo for multiple platforms at once?', a: 'Enhance once and use the output on all platforms.' },
    ],
  },

  'dp-photo-enhancer': {
    slug: 'dp-photo-enhancer',
    h1: 'DP Photo Enhancer',
    title: 'DP Photo Enhancer Online — AI Display Picture Enhancement',
    description: 'Enhance DP photos online with AI. Get a sharp, clear display picture for WhatsApp, Instagram, and all platforms.',
    intro: { eyebrow: 'AI DP Enhancement', tagline: 'The DP is the first face people see. Make it worthy of that.', copy: 'Your DP is your digital face. It appears in every notification, every chat, every contact list entry. Upload yours and the AI enhances it to the quality that level of visibility deserves.' },
    howTo: ['Upload your DP photo.', 'Select AI Enhancement.', 'Download the enhanced DP.'],
    beforeAfter: 'A standard DP photo enhanced to sharp, clear, high-quality display picture quality.',
    faqs: [
      { q: 'What platforms does DP enhancement support?', a: 'WhatsApp, Instagram, Facebook, Telegram, and all other display picture contexts.' },
      { q: 'What size should a DP photo be?', a: 'Larger is better. AI enhancement delivers the highest quality regardless of original size.' },
      { q: 'Can I enhance a DP photo for a business account?', a: 'Yes. Both personal and business DP photos are supported.' },
    ],
  },

  'display-picture-enhancer': {
    slug: 'display-picture-enhancer',
    h1: 'Display Picture Enhancer',
    title: 'Display Picture Enhancer Online — AI Powered',
    description: 'Enhance display pictures online with AI. Get a sharp, vivid display picture for any platform.',
    intro: { eyebrow: 'AI Display Picture Enhancement', tagline: 'Display it with the clarity it always deserved.', copy: 'A display picture is a small image with a large job. It represents you everywhere your presence is felt online. Upload yours and the AI ensures it does that job clearly — sharp, vivid, and properly representing the person behind it.' },
    howTo: ['Upload your display picture.', 'Select AI Enhancement.', 'Download the enhanced display picture.'],
    beforeAfter: 'A low-quality display picture enhanced to sharp, vivid, platform-ready quality.',
    faqs: [
      { q: 'How do I get a better display picture?', a: 'Upload your current display picture and the AI enhances it to the best possible quality.' },
      { q: 'Does display picture enhancement work on cropped photos?', a: 'Yes. Cropped photos are enhanced effectively.' },
      { q: 'Can I use the enhanced display picture on all platforms?', a: 'Yes. One enhanced image can be used as display picture on all platforms.' },
    ],
  },

  'thumbnail-photo-enhancer': {
    slug: 'thumbnail-photo-enhancer',
    h1: 'Thumbnail Photo Enhancer',
    title: 'Thumbnail Photo Enhancer Online — AI Powered',
    description: 'Enhance thumbnail photos online with AI. Get sharp, vivid, click-worthy thumbnails for any platform.',
    intro: { eyebrow: 'AI Thumbnail Enhancement', tagline: 'The thumbnail is the first click. Make it earn that click.', copy: 'A thumbnail has one job — to earn a click. Upload yours and the AI makes it sharp, vivid, and clear enough to stop someone scrolling and make them want to see more.' },
    howTo: ['Upload your thumbnail photo.', 'Select AI Enhancement.', 'Download the enhanced thumbnail.'],
    beforeAfter: 'A soft, low-quality thumbnail enhanced to a sharp, vivid, click-worthy image.',
    faqs: [
      { q: 'What makes a good thumbnail?', a: 'Sharp, vivid, high-contrast images with clear subjects perform best as thumbnails.' },
      { q: 'Can AI enhancement improve click-through rate on thumbnails?', a: 'Sharper, more vivid thumbnails are shown to improve viewer engagement and clicks.' },
      { q: 'What resolution should a thumbnail be?', a: 'YouTube recommends 1280x720px minimum. AI enhancement delivers this quality or higher.' },
    ],
  },

  'youtube-thumbnail-enhancer': {
    slug: 'youtube-thumbnail-enhancer',
    h1: 'YouTube Thumbnail Enhancer',
    title: 'YouTube Thumbnail Enhancer Online — AI Powered',
    description: 'Enhance YouTube thumbnails online with AI. Get sharp, vivid, high-click YouTube thumbnails.',
    intro: { eyebrow: 'AI YouTube Thumbnail Enhancement', tagline: 'Your content is strong. Your thumbnail should open that door well.', copy: 'A YouTube thumbnail is the cover of everything you created. Upload yours and the AI sharpens, vivifies, and enhances it — so it opens the door to your content the way your content deserves.' },
    howTo: ['Upload your YouTube thumbnail.', 'Select AI Enhancement.', 'Download the enhanced YouTube thumbnail.'],
    beforeAfter: 'A standard YouTube thumbnail enhanced to sharp, vivid, high-click quality.',
    faqs: [
      { q: 'What size does YouTube recommend for thumbnails?', a: 'YouTube recommends 1280x720px at 16:9 aspect ratio. AI output matches this standard.' },
      { q: 'Does thumbnail enhancement help with YouTube CTR?', a: 'Sharper, more vivid thumbnails are shown to improve click-through rates.' },
      { q: 'Can I enhance a thumbnail with text or graphics on it?', a: 'Yes. The AI enhances the full thumbnail including any text or graphic elements.' },
    ],
  },

  'creator-photo-enhancer': {
    slug: 'creator-photo-enhancer',
    h1: 'Creator Photo Enhancer',
    title: 'Creator Photo Enhancer Online — AI Powered',
    description: 'Enhance creator photos online with AI. Get professional quality photos for content creators and influencers.',
    intro: { eyebrow: 'AI Creator Photo Enhancement', tagline: 'Your work is good. Let your photo say the same all time.', copy: 'Content creators are judged by visual quality first. Your photo — profile, thumbnail, behind-the-scenes — represents your brand before a single piece of content is watched. Upload yours and the AI makes sure it says what your work deserves.' },
    howTo: ['Upload your creator photo.', 'Select AI Enhancement.', 'Download the enhanced creator photo.'],
    beforeAfter: 'A creator photo enhanced to professional quality for all content and platform use.',
    faqs: [
      { q: 'What types of creator photos does this enhance?', a: 'Profile photos, thumbnails, behind-the-scenes photos, and all other creator content photos.' },
      { q: 'Can AI enhancement help with personal branding?', a: 'Yes. Consistent high-quality photos are foundational to strong personal branding.' },
      { q: 'Is output suitable for brand partnership use?', a: 'Yes. AI-enhanced photos meet commercial quality standards for brand partnership content.' },
    ],
  },

  'influencer-photo-enhancer': {
    slug: 'influencer-photo-enhancer',
    h1: 'Influencer Photo Enhancer',
    title: 'Influencer Photo Enhancer Online — AI Powered',
    description: 'Enhance influencer photos online with AI. Get sharp, professional photos that match your content quality.',
    intro: { eyebrow: 'AI Influencer Photo Enhancement', tagline: 'Influence starts with clarity. Start there.', copy: 'Influence is built on trust, and trust is built on quality. A sharp, clear, professional photo communicates the same standards as the content behind it. Upload yours and the AI delivers the quality your audience expects.' },
    howTo: ['Upload your influencer photo.', 'Select AI Enhancement.', 'Download the enhanced photo.'],
    beforeAfter: 'An influencer photo enhanced to sharp, professional, brand-ready quality.',
    faqs: [
      { q: 'Can AI enhancement help influencers without a professional photographer?', a: 'Yes. AI enhancement significantly closes the quality gap between phone photos and professional photography.' },
      { q: 'Is enhanced output suitable for brand collab submissions?', a: 'Yes. AI-enhanced photos meet the quality requirements of brand collaborations.' },
      { q: 'Can I enhance photos from a sponsored shoot?', a: 'Yes. All photo types are supported.' },
    ],
  },

  // ─────────────────────────────────────────────
  // PRINT / PROFESSIONAL CLUSTER
  // ─────────────────────────────────────────────

  'model-photo-enhancer': {
    slug: 'model-photo-enhancer',
    h1: 'Model Photo Enhancer',
    title: 'Model Photo Enhancer Online — AI Powered',
    description: 'Enhance model photos online with AI. Get professional quality model photos with sharp detail and natural beauty.',
    intro: { eyebrow: 'AI Model Photo Enhancement', tagline: 'The model was ready. The photo should be too.', copy: 'Model photography is defined by detail — skin texture, expression, the quality of light on a face. Upload your model photo and the AI enhances every element to the standard that modelling work demands.' },
    howTo: ['Upload your model photo.', 'Select AI Enhancement.', 'Download the enhanced model photo.'],
    beforeAfter: 'A model photo enhanced to sharp, detailed, professional quality with natural skin and expression.',
    faqs: [
      { q: 'Does AI model photo enhancement preserve natural skin?', a: 'Yes. Natural skin texture is preserved and enhanced without artificial smoothing.' },
      { q: 'Is output suitable for modelling portfolios?', a: 'Yes. AI-enhanced model photos meet portfolio quality standards.' },
      { q: 'Can I enhance full body model photos?', a: 'Yes. The AI enhances the full image including face, clothing, and background.' },
    ],
  },

  'actor-photo-enhancer': {
    slug: 'actor-photo-enhancer',
    h1: 'Actor Photo Enhancer',
    title: 'Actor Photo Enhancer Online — AI Powered',
    description: 'Enhance actor photos online with AI. Get sharp, professional headshot quality for actor portfolios and submissions.',
    intro: { eyebrow: 'AI Actor Photo Enhancement', tagline: 'One photo opens one door. Make sure it opens it well.', copy: 'An actor\'s headshot is an audition before the audition. Upload yours and the AI enhances it to the standard that casting directors expect — sharp, expressive, professional, and fully representative of your presence.' },
    howTo: ['Upload your actor photo.', 'Select AI Enhancement.', 'Download the enhanced actor photo.'],
    beforeAfter: 'An actor photo enhanced to sharp, professional headshot quality with full expression detail.',
    faqs: [
      { q: 'What makes a good actor headshot?', a: 'Sharp focus on the face, natural expression, professional quality, and authentic personality — AI enhancement covers all the technical requirements.' },
      { q: 'Can AI enhance a headshot taken by a photographer?', a: 'Yes. Even professionally taken photos benefit from AI enhancement.' },
      { q: 'Is output suitable for casting agency submissions?', a: 'Yes. AI-enhanced actor photos meet casting agency submission quality standards.' },
    ],
  },

  'portfolio-photo-enhancer': {
    slug: 'portfolio-photo-enhancer',
    h1: 'Portfolio Photo Enhancer',
    title: 'Portfolio Photo Enhancer Online — AI Powered',
    description: 'Enhance portfolio photos online with AI. Get professional quality images for any creative or professional portfolio.',
    intro: { eyebrow: 'AI Portfolio Photo Enhancement', tagline: 'The portfolio is the proof. Every photo in it should be worthy.', copy: 'A portfolio represents your best work. Every photo in it should be at its best. Upload your portfolio photos and the AI enhances each one to the quality standard that the work behind it deserves.' },
    howTo: ['Upload your portfolio photo.', 'Select AI Enhancement.', 'Download the enhanced portfolio photo.'],
    beforeAfter: 'A portfolio photo enhanced to professional quality ready for client or agency presentation.',
    faqs: [
      { q: 'What types of portfolio does this work for?', a: 'Photography, modelling, acting, design, art, and all other professional portfolio types.' },
      { q: 'Can I enhance photos for a digital portfolio?', a: 'Yes. Enhanced photos are ready for digital portfolio platforms.' },
      { q: 'Is output suitable for print portfolio books?', a: 'Yes. AI enhancement output is suitable for high-quality print portfolios.' },
    ],
  },

  'photography-enhancer': {
    slug: 'photography-enhancer',
    h1: 'Photography Enhancer',
    title: 'Photography Enhancer Online — AI Powered',
    description: 'Enhance photography online with AI. Get the finest quality from your photography with professional AI enhancement.',
    intro: { eyebrow: 'AI Photography Enhancement', tagline: 'Good photography deserves fine enhancement. Do it smart.', copy: 'Photography is the art of capturing light and moment. AI enhancement is the art of making sure that capture is seen at its finest. Upload your photography and the AI delivers the quality that every frame you created deserves.' },
    howTo: ['Upload your photograph.', 'Select AI Enhancement mode.', 'Download the professionally enhanced photograph.'],
    beforeAfter: 'A photograph enhanced by AI to professional quality with maximum sharpness and detail.',
    faqs: [
      { q: 'Is AI enhancement suitable for fine art photography?', a: 'Yes. Fine art photography benefits from the precise, natural enhancement the AI delivers.' },
      { q: 'Can I enhance photography for exhibition or gallery use?', a: 'Yes. AI enhancement output meets exhibition and gallery quality standards.' },
      { q: 'Does AI enhancement respect the photographer\'s artistic vision?', a: 'Yes. The AI enhances technical quality without altering the artistic composition and intention.' },
    ],
  },

  'studio-quality-photo': {
    slug: 'studio-quality-photo',
    h1: 'Studio Quality Photo',
    title: 'Studio Quality Photo Online — AI Powered',
    description: 'Get studio quality photos online with AI. Transform any photo to professional studio quality output.',
    intro: { eyebrow: 'AI Studio Quality', tagline: 'Studio quality is not a place. It is a decision. Make it now.', copy: 'A studio produces controlled light, sharp focus, and professional quality. AI delivers the same results without the studio. Upload your photo and the AI processes it to the standard that a professional studio session would produce.' },
    howTo: ['Upload your photo.', 'Select AI Studio Quality Enhancement.', 'Download the studio-quality photo.'],
    beforeAfter: 'A standard photo processed by AI to achieve professional studio quality output.',
    faqs: [
      { q: 'Can AI really deliver studio quality?', a: 'For many use cases yes. AI enhancement delivers sharpness, detail, and clarity that compares well to studio photography.' },
      { q: 'What photos benefit most from studio quality enhancement?', a: 'Portrait, headshot, product, and fashion photos benefit most from studio quality processing.' },
      { q: 'Is studio quality output suitable for commercial use?', a: 'Yes. Studio quality AI output meets commercial photography standards.' },
    ],
  },

  'photo-studio-online': {
    slug: 'photo-studio-online',
    h1: 'Photo Studio Online',
    title: 'Photo Studio Online — AI Powered Enhancement',
    description: 'Online photo studio powered by AI. Get professional photo enhancement, upscaling, and restoration online.',
    intro: { eyebrow: 'AI Online Photo Studio', tagline: 'The studio is online. The quality is real. Do it well.', copy: 'A physical studio requires equipment, space, and time. An AI photo studio requires only an upload. The quality it delivers — sharp, detailed, professionally processed — is the real thing.' },
    howTo: ['Upload your photo.', 'Select the enhancement type.', 'Download the studio-quality result.'],
    beforeAfter: 'A standard photo processed through the AI online studio to deliver professional quality output.',
    faqs: [
      { q: 'What can the online photo studio do?', a: 'Face restoration, image upscaling, blur removal, grain reduction, and resolution enhancement — all in one place.' },
      { q: 'Is the online photo studio suitable for professional use?', a: 'Yes. Output quality meets professional photography standards.' },
      { q: 'How is an AI photo studio different from a filter app?', a: 'AI studio reconstructs real detail and improves actual quality. Filters only change the visual style.' },
    ],
  },

  'ai-photo-studio': {
    slug: 'ai-photo-studio',
    h1: 'AI Photo Studio',
    title: 'AI Photo Studio Online — Professional Enhancement',
    description: 'AI photo studio online. Professional photo enhancement, face restoration, and upscaling powered by AI.',
    intro: { eyebrow: 'AI Photo Studio', tagline: 'AI powered. Human feeling. Studio results.', copy: 'The AI photo studio combines the precision of machine processing with an understanding of human faces, expressions, and moments. Upload your photo and receive a result that is technically excellent and emotionally true.' },
    howTo: ['Upload your photo.', 'Select enhancement mode.', 'Download your AI studio result.'],
    beforeAfter: 'A photo processed by AI studio technology to deliver sharp, detailed, professional results.',
    faqs: [
      { q: 'What AI models power the photo studio?', a: 'CodeFormer for face restoration and RealESRGAN for image upscaling and enhancement.' },
      { q: 'Is the AI photo studio suitable for portraits?', a: 'Yes. Portrait processing is one of the AI studio\'s core specialisations.' },
      { q: 'Can the AI photo studio handle group photos?', a: 'Yes. All faces in group photos are enhanced simultaneously.' },
    ],
  },

  'online-photo-studio': {
    slug: 'online-photo-studio',
    h1: 'Online Photo Studio',
    title: 'Online Photo Studio — AI Powered Enhancement',
    description: 'Online photo studio powered by AI. Get professional photo enhancement without leaving your browser.',
    intro: { eyebrow: 'AI Online Studio', tagline: 'No studio needed. Just the result it gives. Do it smart.', copy: 'The only thing a studio provides that you actually need is the quality of the result. Upload your photo and the AI delivers that quality directly — no booking, no travel, no equipment required.' },
    howTo: ['Upload your photo.', 'Select the enhancement type.', 'Download the professional result.'],
    beforeAfter: 'A standard photo enhanced by the online AI studio to professional quality output.',
    faqs: [
      { q: 'Does the online photo studio work on mobile?', a: 'Yes. The online studio works on all devices including mobile browsers.' },
      { q: 'Is there a free trial for the online photo studio?', a: 'A preview is available before committing to a full resolution download.' },
      { q: 'What output formats does the online studio deliver?', a: 'High-quality PNG output at the selected resolution.' },
    ],
  },

  'premium-ai-photo-studio': {
    slug: 'premium-ai-photo-studio',
    h1: 'Premium AI Photo Studio',
    title: 'Premium AI Photo Studio Online — Professional Quality',
    description: 'Premium AI photo studio online. The finest photo enhancement for photos that demand the best quality.',
    intro: { eyebrow: 'Premium AI Photo Studio', tagline: 'Premium studio. Premium result. Preserved all time.', copy: 'Premium processing means GPU-powered AI, maximum resolution output, and the finest quality available. Upload your photo and the premium AI studio delivers results that no standard tool can match.' },
    howTo: ['Upload your photo.', 'Select Premium Studio Enhancement.', 'Download your premium studio result.'],
    beforeAfter: 'A photo processed through the premium AI studio pipeline for the finest possible quality output.',
    faqs: [
      { q: 'What makes the premium AI studio different?', a: 'Dedicated GPU processing, CodeFormer + RealESRGAN pipeline, and resolution options up to 8K.' },
      { q: 'Is premium AI studio suitable for commercial photography?', a: 'Yes. Premium output meets the highest commercial photography standards.' },
      { q: 'Can I use premium studio output for advertising?', a: 'Yes. Premium AI studio output is suitable for advertising and commercial use.' },
    ],
  },

  'realistic-photo-enhancer': {
    slug: 'realistic-photo-enhancer',
    h1: 'Realistic Photo Enhancer',
    title: 'Realistic Photo Enhancer Online — AI Powered',
    description: 'Realistic photo enhancement online. AI delivers natural, realistic photo quality without artificial filters.',
    intro: { eyebrow: 'AI Realistic Enhancement', tagline: 'Realistic is not filtered. Realistic is true. Make it true.', copy: 'The best enhancement is the kind that looks like no enhancement happened at all. Upload your photo and the AI improves it realistically — sharper, cleaner, more detailed — without any artificial look or filter effect.' },
    howTo: ['Upload your photo.', 'Select AI Realistic Enhancement.', 'Download the naturally enhanced photo.'],
    beforeAfter: 'A photo enhanced to natural, realistic quality that looks genuinely better without looking processed.',
    faqs: [
      { q: 'Does realistic enhancement avoid the "AI look"?', a: 'Yes. The AI is calibrated for natural, realistic output that avoids over-processed or artificial appearances.' },
      { q: 'Can realistic enhancement be used for documentary photography?', a: 'Yes. Realistic enhancement is appropriate for documentary and journalistic photography.' },
      { q: 'Does realistic enhancement preserve original colours?', a: 'Yes. Colour accuracy is maintained throughout the enhancement process.' },
    ],
  },

  'natural-face-enhancer': {
    slug: 'natural-face-enhancer',
    h1: 'Natural Face Enhancer',
    title: 'Natural Face Enhancer Online — AI Powered',
    description: 'Natural face enhancement online with AI. Enhance face photos realistically without artificial filters or effects.',
    intro: { eyebrow: 'AI Natural Face Enhancement', tagline: 'Natural is the finest filter. Preserve it well.', copy: 'The most powerful face enhancement is the kind that makes a face look exactly as it should — not filtered, not smoothed, not artificially improved. Just clear, sharp, and genuinely natural. Upload yours and the AI delivers that.' },
    howTo: ['Upload your face photo.', 'Select AI Natural Enhancement.', 'Download the naturally enhanced face photo.'],
    beforeAfter: 'A face photo enhanced to natural quality — sharper and clearer without any artificial look.',
    faqs: [
      { q: 'Does natural face enhancement avoid skin smoothing?', a: 'Yes. The AI preserves natural skin texture and avoids the over-smooth plastic look.' },
      { q: 'Is natural face enhancement suitable for documentary portraits?', a: 'Yes. Natural enhancement is appropriate for documentary and journalistic portrait use.' },
      { q: 'Does natural enhancement change facial features?', a: 'No. The AI enhances clarity and detail without altering any facial features.' },
    ],
  },

  'natural-portrait-enhancer': {
    slug: 'natural-portrait-enhancer',
    h1: 'Natural Portrait Enhancer',
    title: 'Natural Portrait Enhancer Online — AI Powered',
    description: 'Natural portrait enhancement online with AI. Enhance portraits realistically for genuine, natural-looking results.',
    intro: { eyebrow: 'AI Natural Portrait Enhancement', tagline: 'No filter needed. Just clarity. Just truth.', copy: 'A natural portrait shows the person as they are — no enhancement hiding behind filters, no artificial glow masking the real face. Upload yours and the AI delivers the natural clarity that lets the person in the portrait be seen truthfully.' },
    howTo: ['Upload your portrait.', 'Select AI Natural Enhancement.', 'Download the naturally enhanced portrait.'],
    beforeAfter: 'A portrait enhanced to natural quality — clear and sharp without any artificial processing.',
    faqs: [
      { q: 'Does natural portrait enhancement preserve the original mood?', a: 'Yes. Lighting, shadow, and mood are preserved while technical quality is improved.' },
      { q: 'Can natural portrait enhancement be used for editorial photography?', a: 'Yes. Natural enhancement is suitable for editorial, documentary, and journalistic portrait use.' },
      { q: 'Will natural enhancement make the portrait look over-processed?', a: 'No. The AI is specifically calibrated to avoid over-processing in portrait enhancement.' },
    ],
  },

  'print-quality-photo-enhancer': {
    slug: 'print-quality-photo-enhancer',
    h1: 'Print Quality Photo Enhancer',
    title: 'Print Quality Photo Enhancer Online — AI Powered',
    description: 'Enhance photos to print quality online with AI. Get sharp, detailed, print-ready photo output.',
    intro: { eyebrow: 'AI Print Quality Enhancement', tagline: 'Pixels forgive. Paper does not. Do it fine.', copy: 'A photo on screen can hide its imperfections. A photo on paper cannot. Upload yours before printing and the AI enhances it to print quality — sharp, detailed, and honest enough to survive paper.' },
    howTo: ['Upload your photo for printing.', 'Select AI Print Quality Enhancement.', 'Download the print-ready enhanced photo.'],
    beforeAfter: 'A screen-quality photo enhanced to sharp, detailed, print-ready quality.',
    faqs: [
      { q: 'What resolution is needed for quality printing?', a: 'At least 300dpi at the print size. AI enhancement delivers the resolution needed for standard and large prints.' },
      { q: 'Can I enhance a photo for large format printing?', a: 'Yes. 4K and 8K output options are suitable for large format printing.' },
      { q: 'Does print quality enhancement change colours?', a: 'No. Colour accuracy is preserved. Sharpness and resolution are improved.' },
    ],
  },

  'photo-for-print-enhancer': {
    slug: 'photo-for-print-enhancer',
    h1: 'Photo for Print Enhancer',
    title: 'Photo for Print Enhancer Online — AI Powered',
    description: 'Enhance photos for printing online with AI. Get print-ready photo quality from any original.',
    intro: { eyebrow: 'AI Print Preparation Enhancement', tagline: 'Print it. Frame it. Keep it for decades.', copy: 'A photo worth printing is a photo worth printing well. Upload yours and the AI prepares it for print — sharpening the detail, improving the resolution, and delivering the quality that paper and frame deserve.' },
    howTo: ['Upload your photo for printing.', 'Select AI Print Enhancement.', 'Download the print-ready photo.'],
    beforeAfter: 'A standard digital photo enhanced to print-ready quality for framing and display.',
    faqs: [
      { q: 'What print sizes is AI enhancement suitable for?', a: 'Standard sizes (4x6 to A3) with HD output. Large formats (A1 and above) require 4K or 8K.' },
      { q: 'Should I enhance before or after cropping?', a: 'Enhance before cropping to maximise quality. Crop to your print dimensions after enhancing.' },
      { q: 'What file format should I use for printing?', a: 'AI output as PNG. Most print services accept PNG or JPG.' },
    ],
  },

  'large-print-photo-enhancer': {
    slug: 'large-print-photo-enhancer',
    h1: 'Large Print Photo Enhancer',
    title: 'Large Print Photo Enhancer Online — AI Powered',
    description: 'Enhance photos for large print online with AI. Get 4K and 8K output ready for large format printing.',
    intro: { eyebrow: 'AI Large Print Enhancement', tagline: 'Large print tells the truth. Make sure the truth is clear.', copy: 'Large prints magnify everything — the good and the imperfect. Upload your photo and the AI enhances it to 4K or 8K resolution, so when it is printed large, every detail is sharp and nothing is left to hide.' },
    howTo: ['Upload your photo.', 'Select 4K or 8K output for large print.', 'Download the large-print-ready photo.'],
    beforeAfter: 'A standard photo enhanced to 4K or 8K quality ready for large format printing without quality loss.',
    faqs: [
      { q: 'What is the maximum size I can print from AI output?', a: '8K output (7680px) can be printed at very large wall sizes without quality loss.' },
      { q: 'Can I enhance a photo for a canvas print?', a: 'Yes. Canvas prints benefit significantly from 4K or 8K AI enhancement.' },
      { q: 'Does large print enhancement work on landscape photos?', a: 'Yes. All photo types including landscapes are supported.' },
    ],
  },

  'poster-photo-enhancer': {
    slug: 'poster-photo-enhancer',
    h1: 'Poster Photo Enhancer',
    title: 'Poster Photo Enhancer Online — AI Powered',
    description: 'Enhance photos for posters online with AI. Get sharp, detailed, large-format quality for poster printing.',
    intro: { eyebrow: 'AI Poster Photo Enhancement', tagline: 'It will be seen by many. Make sure it is seen clearly.', copy: 'A poster is a public statement. It will be looked at by many eyes from many distances. Upload your photo and the AI enhances it to poster quality — sharp at close range, vivid from a distance, worthy of public display.' },
    howTo: ['Upload your poster photo.', 'Select 4K or 8K output.', 'Download the poster-quality enhanced photo.'],
    beforeAfter: 'A standard photo enhanced to sharp, vivid, poster-quality output suitable for large format printing.',
    faqs: [
      { q: 'What resolution is needed for poster printing?', a: 'For standard poster sizes, 4K is sufficient. For very large posters, 8K is recommended.' },
      { q: 'Can I enhance a face photo for a large event poster?', a: 'Yes. Face photos are enhanced with CodeFormer for maximum quality at poster size.' },
      { q: 'Does poster enhancement work on event and promotional photos?', a: 'Yes. All photo types are supported for poster enhancement.' },
    ],
  },

  'wall-frame-photo-enhancer': {
    slug: 'wall-frame-photo-enhancer',
    h1: 'Wall Frame Photo Enhancer',
    title: 'Wall Frame Photo Enhancer Online — AI Powered',
    description: 'Enhance photos for wall frames online with AI. Get frame-worthy quality for wall display and home decor.',
    intro: { eyebrow: 'AI Wall Frame Enhancement', tagline: 'It will hang on that wall all time. Give it what that deserves.', copy: 'A photo on a wall is looked at every day for years. It deserves to be at its best. Upload yours and the AI enhances it to the quality that daily viewing and framing deserves — sharp, vivid, and worthy of the wall it will call home.' },
    howTo: ['Upload your photo for framing.', 'Select 4K or 8K output.', 'Download the wall-frame-ready enhanced photo.'],
    beforeAfter: 'A photo enhanced to wall frame quality — sharp, vivid, and ready for permanent display.',
    faqs: [
      { q: 'What size photos are suitable for wall frames?', a: 'Common wall frame sizes range from 8x10 to 24x36 inches. AI 4K output covers all standard frame sizes.' },
      { q: 'Can I enhance a family photo for a large wall frame?', a: 'Yes. Family photos with multiple faces receive full face enhancement for wall frame quality.' },
      { q: 'Is 4K output sufficient for a 24x36 frame?', a: 'Yes. 4K output is sufficient for 24x36 inch frames at standard viewing distances.' },
    ],
  },

  // ─────────────────────────────────────────────
  // FAMILY / MEMORY CLUSTER
  // ─────────────────────────────────────────────

  'memorial-photo-restoration': {
    slug: 'memorial-photo-restoration',
    h1: 'Memorial Photo Restoration',
    title: 'Memorial Photo Restoration Online — AI Powered',
    description: 'Restore memorial photos online with AI. Recover and preserve the photos of loved ones who are no longer here.',
    intro: { eyebrow: 'AI Memorial Photo Restoration', tagline: 'They are gone now. The photo is what remains. Restore it with respect.', copy: 'Some photos hold the only clear memory of a face that is no longer in the world. Upload yours and the AI restores it with care — recovering every detail of the person who deserves to be remembered clearly.' },
    howTo: ['Upload your memorial photo.', 'Select AI Restoration mode.', 'Download the restored memorial photo.'],
    beforeAfter: 'A faded, damaged memorial photo restored to a clear, sharp image preserving every detail of the person.',
    faqs: [
      { q: 'Can AI restore a very old memorial photo?', a: 'Yes. Memorial photos from any era are restored with the same care and quality.' },
      { q: 'Is memorial photo restoration handled sensitively?', a: 'Your photo is processed securely and privately. It is never stored or shared.' },
      { q: 'Can I restore a memorial photo for a funeral or tribute?', a: 'Yes. Many people restore memorial photos for tributes, funerals, and commemoration services.' },
    ],
  },

  'family-memory-photo-enhancer': {
    slug: 'family-memory-photo-enhancer',
    h1: 'Family Memory Photo Enhancer',
    title: 'Family Memory Photo Enhancer Online — AI Powered',
    description: 'Enhance family memory photos online with AI. Preserve family memories with sharp, clear, restored quality.',
    intro: { eyebrow: 'AI Family Memory Enhancement', tagline: 'The memory is perfect. Now let the photo match it.', copy: 'Family memories are kept alive through photographs. When those photographs are unclear or faded, the memories they hold feel further away. Upload yours and the AI enhances the photo to match the clarity of the memory.' },
    howTo: ['Upload your family memory photo.', 'Select AI Enhancement.', 'Download the enhanced family memory photo.'],
    beforeAfter: 'A faded family memory photo enhanced to vivid, sharp quality that matches the memory it holds.',
    faqs: [
      { q: 'Can AI enhance old family memory photos?', a: 'Yes. Old family photos are restored and enhanced to preserve family memories clearly.' },
      { q: 'Can I enhance a family photo for a family reunion?', a: 'Yes. Enhanced family photos make excellent displays and gifts at family gatherings.' },
      { q: 'Is family photo enhancement suitable for printing and framing?', a: 'Yes. Enhanced family photos are print-ready and suitable for framing.' },
    ],
  },

  'ancestor-photo-restoration': {
    slug: 'ancestor-photo-restoration',
    h1: 'Ancestor Photo Restoration',
    title: 'Ancestor Photo Restoration Online — AI Powered',
    description: 'Restore ancestor photos online with AI. Recover the faces of ancestors from old, damaged photographs.',
    intro: { eyebrow: 'AI Ancestor Restoration', tagline: 'They came before you. Restore their faces with the respect they earned.', copy: 'Ancestor photographs connect generations. They show where a family came from and who shaped it. Upload yours and the AI restores the faces of those who came before — giving them the clarity and respect their legacy deserves.' },
    howTo: ['Upload your ancestor photo.', 'Select AI Restoration.', 'Download the restored ancestor photo.'],
    beforeAfter: 'An old, barely visible ancestor photo restored to show clear faces and full family detail.',
    faqs: [
      { q: 'How old can ancestor photos be for restoration?', a: 'From daguerreotypes to modern prints — all eras of ancestor photography are supported.' },
      { q: 'Can I restore a group ancestor photo?', a: 'Yes. Group ancestor photos with multiple family members are restored with all faces enhanced.' },
      { q: 'Can restored ancestor photos be used for family history projects?', a: 'Yes. Restored photos are suitable for family history books, genealogy projects, and heritage displays.' },
    ],
  },

  'parents-photo-restoration': {
    slug: 'parents-photo-restoration',
    h1: 'Parents Photo Restoration',
    title: 'Parents Photo Restoration Online — AI Powered',
    description: 'Restore parents photos online with AI. Recover and preserve the photographs of your mother and father.',
    intro: { eyebrow: 'AI Parents Photo Restoration', tagline: 'They gave you everything. Give their photo the clarity it deserves.', copy: 'A photograph of your parents from before you existed is a window into a world you only know through stories. Upload it and the AI restores every detail of those faces — giving you the clearest possible view of the people who shaped your life.' },
    howTo: ['Upload your parents photo.', 'Select AI Restoration.', 'Download the restored photo.'],
    beforeAfter: 'An old, faded parents photo restored to a clear, sharp image showing both faces in full detail.',
    faqs: [
      { q: 'Can I restore a parents wedding photo?', a: 'Yes. Wedding and formal photos of parents are restored beautifully.' },
      { q: 'What if the photo is very small or damaged?', a: 'The AI works effectively on small and damaged photos, recovering the most detail possible.' },
      { q: 'Can I restore a photo as a gift for my parents?', a: 'Yes. Restored parent photos make deeply meaningful and personal gifts.' },
    ],
  },

  'grandparents-photo-restoration': {
    slug: 'grandparents-photo-restoration',
    h1: 'Grandparents Photo Restoration',
    title: 'Grandparents Photo Restoration Online — AI Powered',
    description: 'Restore grandparents photos online with AI. Recover the faces and memories of your grandparents from old photographs.',
    intro: { eyebrow: 'AI Grandparents Photo Restoration', tagline: 'That photo is the only window left. Keep it clear all time.', copy: 'For many people, a photograph is the only way to see a grandparent\'s face. Upload yours and the AI restores every detail it holds — so the face that shaped your family can be seen as clearly as the love it carried.' },
    howTo: ['Upload your grandparents photo.', 'Select AI Restoration.', 'Download the restored photo.'],
    beforeAfter: 'An old grandparents photo restored to a clear, sharp image preserving their faces in full detail.',
    faqs: [
      { q: 'Can very old grandparent photos from the early 1900s be restored?', a: 'Yes. Very early photographs are handled with the same restoration quality as later eras.' },
      { q: 'What if only one grandparent is in the photo?', a: 'Single and group grandparent photos are both supported.' },
      { q: 'Can I restore a grandparents anniversary photo?', a: 'Yes. Formal anniversary and celebration photos are restored beautifully.' },
    ],
  },

  'childhood-photo-enhancer': {
    slug: 'childhood-photo-enhancer',
    h1: 'Childhood Photo Enhancer',
    title: 'Childhood Photo Enhancer Online — AI Powered',
    description: 'Enhance childhood photos online with AI. Restore and preserve childhood memories with sharp, vivid quality.',
    intro: { eyebrow: 'AI Childhood Photo Enhancement', tagline: 'She won\'t redraw that masterpiece again. Take it. Frame it. Keep it vivid.', copy: 'Childhood happens once and leaves photos that no one will ever retake. Upload yours and the AI enhances every detail of those faces — the small hands, the genuine smiles, the innocence that belongs to those years and no others.' },
    howTo: ['Upload your childhood photo.', 'Select AI Enhancement.', 'Download the enhanced childhood photo.'],
    beforeAfter: 'A faded childhood photo enhanced to vivid, sharp quality preserving every detail of those years.',
    faqs: [
      { q: 'Can AI enhance old childhood photos from the 1980s and 90s?', a: 'Yes. Childhood photos from all decades are restored and enhanced effectively.' },
      { q: 'Can I enhance a childhood photo as a gift?', a: 'Yes. Enhanced childhood photos make deeply meaningful personal gifts.' },
      { q: 'Does AI enhancement work on photos of very young children?', a: 'Yes. Baby and toddler photos receive the same care and quality as all other childhood photos.' },
    ],
  },

  'school-photo-enhancer': {
    slug: 'school-photo-enhancer',
    h1: 'School Photo Enhancer',
    title: 'School Photo Enhancer Online — AI Powered',
    description: 'Enhance school photos online with AI. Restore and preserve school day memories with sharp, clear quality.',
    intro: { eyebrow: 'AI School Photo Enhancement', tagline: 'School days don\'t wait. Neither should that photo.', copy: 'School photos capture a version of a person that will never exist again — a specific age, a specific year, a specific smile. Upload yours and the AI enhances every detail so those days are preserved properly.' },
    howTo: ['Upload your school photo.', 'Select AI Enhancement.', 'Download the enhanced school photo.'],
    beforeAfter: 'An old, faded school photo enhanced to sharp, vivid quality showing every face clearly.',
    faqs: [
      { q: 'Can I enhance an old class photo with many students?', a: 'Yes. Group school photos with many faces are all enhanced simultaneously.' },
      { q: 'Can I enhance a school photo for a reunion?', a: 'Yes. School reunion photos are a common use case for enhancement.' },
      { q: 'Does AI enhancement work on yearbook photos?', a: 'Yes. Yearbook photos are fully supported.' },
    ],
  },

  'college-photo-enhancer': {
    slug: 'college-photo-enhancer',
    h1: 'College Photo Enhancer',
    title: 'College Photo Enhancer Online — AI Powered',
    description: 'Enhance college photos online with AI. Restore and preserve college memories with sharp, vivid quality.',
    intro: { eyebrow: 'AI College Photo Enhancement', tagline: 'Those were the days. Let the photo prove it clearly.', copy: 'College days hold a specific kind of freedom and friendship that only happens once. The photos from those years deserve to be seen properly. Upload yours and the AI enhances them to the quality those memories earned.' },
    howTo: ['Upload your college photo.', 'Select AI Enhancement.', 'Download the enhanced college photo.'],
    beforeAfter: 'An old college photo enhanced to sharp, vivid quality preserving those years in full detail.',
    faqs: [
      { q: 'Can I enhance old college group photos?', a: 'Yes. College group photos with multiple people are enhanced with all faces improved.' },
      { q: 'Can I enhance a college photo for a reunion or alumni event?', a: 'Yes. College reunion photos are a popular use case.' },
      { q: 'Does AI enhancement work on hostel and campus photos?', a: 'Yes. All college photo types are supported.' },
    ],
  },

  'graduation-photo-enhancer': {
    slug: 'graduation-photo-enhancer',
    h1: 'Graduation Photo Enhancer',
    title: 'Graduation Photo Enhancer Online — AI Powered',
    description: 'Enhance graduation photos online with AI. Get sharp, clear, frame-worthy graduation photos.',
    intro: { eyebrow: 'AI Graduation Photo Enhancement', tagline: 'That moment was earned. The photo should say so all time.', copy: 'A graduation photograph represents years of work, late nights, and real commitment. It should look like it. Upload yours and the AI enhances it to the quality that the achievement behind it deserves.' },
    howTo: ['Upload your graduation photo.', 'Select AI Enhancement.', 'Download the enhanced graduation photo.'],
    beforeAfter: 'A graduation photo enhanced to sharp, clear, frame-worthy quality worthy of the achievement.',
    faqs: [
      { q: 'Can I enhance a graduation photo for framing?', a: 'Yes. Enhanced graduation photos are print-ready and suitable for framing.' },
      { q: 'Does AI enhancement work on graduation ceremony group photos?', a: 'Yes. Group graduation photos with many faces are all enhanced.' },
      { q: 'Can I enhance a graduation photo as a gift for family?', a: 'Yes. Enhanced graduation photos make excellent gifts for parents and family.' },
    ],
  },

  'baby-photo-enhancer': {
    slug: 'baby-photo-enhancer',
    h1: 'Baby Photo Enhancer',
    title: 'Baby Photo Enhancer Online — AI Powered',
    description: 'Enhance baby photos online with AI. Preserve precious baby memories with sharp, vivid, high-quality photos.',
    intro: { eyebrow: 'AI Baby Photo Enhancement', tagline: 'He was that small once. Nobody believes it now. Show them.', copy: 'Baby photos capture a size and a softness that lasts for such a short time. Upload yours and the AI enhances every detail — the tiny hands, the sleeping face, the first smiles — so those earliest memories are preserved properly.' },
    howTo: ['Upload your baby photo.', 'Select AI Enhancement.', 'Download the enhanced baby photo.'],
    beforeAfter: 'A blurry, low-quality baby photo enhanced to a sharp, vivid, memory-preserving image.',
    faqs: [
      { q: 'Can AI enhance newborn baby photos?', a: 'Yes. Newborn photos receive careful enhancement that preserves their delicate character.' },
      { q: 'Can I enhance a baby photo for a birth announcement?', a: 'Yes. Enhanced baby photos make beautiful birth announcement images.' },
      { q: 'Does AI enhancement work on hospital baby photos?', a: 'Yes. All baby photo types are supported.' },
    ],
  },

  'kids-photo-enhancer': {
    slug: 'kids-photo-enhancer',
    h1: 'Kids Photo Enhancer',
    title: 'Kids Photo Enhancer Online — AI Powered',
    description: 'Enhance kids photos online with AI. Preserve children\'s memories with sharp, vivid, high-quality photos.',
    intro: { eyebrow: 'AI Kids Photo Enhancement', tagline: 'They grow fast. The photo should keep up. Preserve it well.', copy: 'Children grow in front of your eyes and the photos of them become precious faster than you expect. Upload yours and the AI enhances them — capturing each age, each smile, and each phase with the clarity it deserves.' },
    howTo: ['Upload your kids photo.', 'Select AI Enhancement.', 'Download the enhanced kids photo.'],
    beforeAfter: 'A kids photo enhanced to sharp, vivid quality preserving childhood moments clearly.',
    faqs: [
      { q: 'Can AI enhance blurry photos of kids who were moving?', a: 'Yes. Motion blur from active children is one of the most common use cases.' },
      { q: 'Can I enhance kids photos for birthday albums?', a: 'Yes. Birthday and event photos are enhanced to album quality.' },
      { q: 'Does AI enhancement work on kids group photos?', a: 'Yes. Group photos with multiple children are fully supported.' },
    ],
  },

  'group-photo-enhancer': {
    slug: 'group-photo-enhancer',
    h1: 'Group Photo Enhancer',
    title: 'Group Photo Enhancer Online — AI Powered',
    description: 'Enhance group photos online with AI. Sharpen every face and detail in group photographs.',
    intro: { eyebrow: 'AI Group Photo Enhancement', tagline: 'They all showed up that day. Every face deserves to be seen.', copy: 'In a group photo every person made an effort to be there. Every face in it deserves to be seen clearly. Upload your group photo and the AI enhances every face simultaneously — from the front row to the back.' },
    howTo: ['Upload your group photo.', 'Select AI Enhancement.', 'Download the enhanced group photo.'],
    beforeAfter: 'A group photo with unclear faces enhanced to a sharp image where every person is visible.',
    faqs: [
      { q: 'How many faces can AI enhance in one group photo?', a: 'The AI detects and enhances all faces in a group photo regardless of number.' },
      { q: 'Can AI enhance faces at the back of a large group?', a: 'Yes. The AI applies face enhancement to all detected faces including those at a distance.' },
      { q: 'Does group photo enhancement work on event photos?', a: 'Yes. Event group photos are fully supported.' },
    ],
  },

  'family-photo-enhancer': {
    slug: 'family-photo-enhancer',
    h1: 'Family Photo Enhancer',
    title: 'Family Photo Enhancer Online — AI Powered',
    description: 'Enhance family photos online with AI. Preserve family memories with sharp, clear, vivid quality.',
    intro: { eyebrow: 'AI Family Photo Enhancement', tagline: 'The family gathered. That does not happen every day. Preserve it all time.', copy: 'A family photo happens when everyone manages to be in the same place at the same time. That is rarer than it sounds. Upload yours and the AI enhances it — every face, every generation, every person who made the effort to be there.' },
    howTo: ['Upload your family photo.', 'Select AI Enhancement.', 'Download the enhanced family photo.'],
    beforeAfter: 'A family photo enhanced to sharp, vivid quality with every face clearly visible.',
    faqs: [
      { q: 'Can AI enhance a large extended family photo?', a: 'Yes. Large family group photos are enhanced with all faces improved.' },
      { q: 'Can I enhance a family photo for a reunion album?', a: 'Yes. Family reunion photos are a popular and meaningful use case.' },
      { q: 'Is family photo enhancement suitable for wall framing?', a: 'Yes. Enhanced family photos are print-ready for wall framing.' },
    ],
  },

  'couple-portrait-enhancer': {
    slug: 'couple-portrait-enhancer',
    h1: 'Couple Portrait Enhancer',
    title: 'Couple Portrait Enhancer Online — AI Powered',
    description: 'Enhance couple portraits online with AI. Get sharp, clear, beautiful couple photos with AI enhancement.',
    intro: { eyebrow: 'AI Couple Portrait Enhancement', tagline: 'Two people. One portrait. Keep it the way it deserves all time.', copy: 'A couple portrait captures two people at a moment they chose to share. Upload yours and the AI enhances both faces equally — every expression, every detail, every aspect of what made that moment worth photographing.' },
    howTo: ['Upload your couple portrait.', 'Select AI Enhancement.', 'Download the enhanced couple portrait.'],
    beforeAfter: 'A couple portrait enhanced to sharp, clear quality with both faces in full detail.',
    faqs: [
      { q: 'Does AI enhance both faces equally in a couple portrait?', a: 'Yes. Both faces receive the same quality of enhancement simultaneously.' },
      { q: 'Can I enhance a couple portrait for framing?', a: 'Yes. Enhanced couple portraits are print-ready for framing.' },
      { q: 'Does couple portrait enhancement work on engagement photos?', a: 'Yes. Engagement and pre-wedding couple portraits are fully supported.' },
    ],
  },

  // ─────────────────────────────────────────────
  // VINTAGE / SCAN CLUSTER
  // ─────────────────────────────────────────────

  'black-and-white-photo-enhancer': {
    slug: 'black-and-white-photo-enhancer',
    h1: 'Black and White Photo Enhancer',
    title: 'Black and White Photo Enhancer Online — AI Powered',
    description: 'Enhance black and white photos online with AI. Restore and sharpen classic black and white photographs.',
    intro: { eyebrow: 'AI Black and White Enhancement', tagline: 'Black and white never needed colour. It needed clarity. Give it that.', copy: 'Black and white photography communicates in contrast and texture — and when those are degraded by age, the photograph loses its power. Upload yours and the AI restores the contrast, the detail, and the presence that black and white photography demands.' },
    howTo: ['Upload your black and white photo.', 'Select AI Enhancement.', 'Download the enhanced black and white photo.'],
    beforeAfter: 'A faded, low-contrast black and white photo enhanced to rich contrast and sharp detail.',
    faqs: [
      { q: 'Does AI enhancement affect the black and white look?', a: 'No. The AI enhances contrast and detail while preserving the original black and white aesthetic.' },
      { q: 'Can AI enhance very old black and white photos from the 1940s?', a: 'Yes. Vintage black and white photos from all eras are supported.' },
      { q: 'Can I enhance a black and white portrait photo?', a: 'Yes. Black and white portrait enhancement is one of the most powerful applications.' },
    ],
  },

  'color-photo-enhancer': {
    slug: 'color-photo-enhancer',
    h1: 'Color Photo Enhancer',
    title: 'Color Photo Enhancer Online — AI Powered',
    description: 'Enhance colour photos online with AI. Restore vivid colours and sharp detail to faded or compressed colour photos.',
    intro: { eyebrow: 'AI Colour Enhancement', tagline: 'The colour was vivid that day. Let the photo be vivid too.', copy: 'Colour fades in photos the way it fades in memory — slowly and then all at once. Upload your colour photo and the AI restores the vibrancy, the depth, and the accuracy of the colours that were actually there.' },
    howTo: ['Upload your colour photo.', 'Select AI Colour Enhancement.', 'Download the vivid, enhanced colour photo.'],
    beforeAfter: 'A faded, dull colour photo enhanced to vivid, accurate, sharp colour quality.',
    faqs: [
      { q: 'Does AI colour enhancement look natural?', a: 'Yes. The AI restores colour to natural, accurate levels without over-saturation.' },
      { q: 'Can AI restore faded colour in old photos?', a: 'Yes. Colour restoration from faded photographs is one of the AI\'s strongest capabilities.' },
      { q: 'Does colour enhancement change the composition?', a: 'No. Only colour quality is improved. Composition is preserved exactly.' },
    ],
  },

  'vintage-portrait-enhancer': {
    slug: 'vintage-portrait-enhancer',
    h1: 'Vintage Portrait Enhancer',
    title: 'Vintage Portrait Enhancer Online — AI Powered',
    description: 'Enhance vintage portrait photos online with AI. Restore and clarify vintage portraits while preserving their character.',
    intro: { eyebrow: 'AI Vintage Portrait Enhancement', tagline: 'Vintage is the soul. Clarity is the respect it earned. Give both.', copy: 'A vintage portrait has a character that modern photography rarely achieves. Upload yours and the AI enhances the clarity and detail without removing the soul — giving the portrait the quality it always should have had while keeping what makes it irreplaceable.' },
    howTo: ['Upload your vintage portrait.', 'Select AI Enhancement.', 'Download the enhanced vintage portrait.'],
    beforeAfter: 'A faded vintage portrait enhanced to clear, sharp detail while preserving its authentic character.',
    faqs: [
      { q: 'Will vintage portrait enhancement remove the vintage look?', a: 'No. The AI enhances clarity while preserving the original vintage character and tone.' },
      { q: 'Can I enhance a formal Victorian or Edwardian portrait?', a: 'Yes. Very early photographic portraits are supported.' },
      { q: 'Is enhanced vintage portrait suitable for museum or exhibition use?', a: 'Yes. AI-enhanced vintage portraits meet the quality standards for exhibition use.' },
    ],
  },

  'scanned-photo-enhancer': {
    slug: 'scanned-photo-enhancer',
    h1: 'Scanned Photo Enhancer',
    title: 'Scanned Photo Enhancer Online — AI Powered',
    description: 'Enhance scanned photos online with AI. Improve quality, remove scan artefacts, and restore scanned photographs.',
    intro: { eyebrow: 'AI Scanned Photo Enhancement', tagline: 'Scanned to survive. Enhanced to be seen properly. Do it well.', copy: 'Scanning preserves a photo digitally but often introduces its own quality issues — lines, colour shifts, soft detail. Upload your scanned photo and the AI removes the scan artefacts and enhances the image to proper digital quality.' },
    howTo: ['Upload your scanned photo.', 'Select AI Enhancement.', 'Download the enhanced scanned photo.'],
    beforeAfter: 'A scanned photo with scan artefacts removed and quality enhanced to clean, sharp digital output.',
    faqs: [
      { q: 'Can AI remove scan lines from scanned photos?', a: 'Yes. Scan lines, moiré patterns, and other scan artefacts are removed by the AI.' },
      { q: 'Does AI enhance scanned photo colour?', a: 'Yes. Colour shifts and fading from the scanning process are corrected.' },
      { q: 'Can I enhance a photo scanned from a flatbed scanner?', a: 'Yes. Photos from all scanner types are supported.' },
    ],
  },

  'scan-photo-restoration': {
    slug: 'scan-photo-restoration',
    h1: 'Scan Photo Restoration',
    title: 'Scan Photo Restoration Online — AI Powered',
    description: 'Restore scanned photos online with AI. Fix scan quality, repair damage, and restore scanned photographs.',
    intro: { eyebrow: 'AI Scan Photo Restoration', tagline: 'The scan saved it. The restoration gives it life again.', copy: 'A scanned photo is a digital preservation of something physical. Upload your scan and the AI takes it the rest of the way — removing the limitations of the scan and restoring the full quality that the original photograph held.' },
    howTo: ['Upload your scanned photo.', 'Select AI Restoration.', 'Download the restored scan.'],
    beforeAfter: 'A low-quality photo scan restored by AI to a sharp, clean, fully detailed digital image.',
    faqs: [
      { q: 'Can AI restore a photo scanned at low resolution?', a: 'Yes. Low-resolution scans are upscaled and restored simultaneously.' },
      { q: 'Does scan photo restoration fix physical damage visible in the scan?', a: 'Yes. Physical damage visible in the scan — scratches, tears, stains — is repaired by the AI.' },
      { q: 'Is scan photo restoration suitable for archival purposes?', a: 'Yes. AI-restored scans are suitable for archival and heritage preservation use.' },
    ],
  },

  'old-scan-photo-enhancer': {
    slug: 'old-scan-photo-enhancer',
    h1: 'Old Scan Photo Enhancer',
    title: 'Old Scan Photo Enhancer Online — AI Powered',
    description: 'Enhance old scanned photos online with AI. Restore and improve the quality of old scanned photographs.',
    intro: { eyebrow: 'AI Old Scan Enhancement', tagline: 'Scanned years ago. Enhanced today. Preserved all time.', copy: 'Old scans were made with older technology and limited resolution. Upload yours and the AI brings them up to current quality standards — removing artefacts, sharpening detail, and delivering an enhanced version that old scanning technology could never have produced.' },
    howTo: ['Upload your old scanned photo.', 'Select AI Enhancement.', 'Download the enhanced scan.'],
    beforeAfter: 'An old, low-quality scan enhanced by AI to sharp, clean, high-quality digital output.',
    faqs: [
      { q: 'Can AI enhance scans from old flatbed scanners?', a: 'Yes. Scans from all scanner types and eras are supported.' },
      { q: 'Does old scan enhancement fix colour degradation?', a: 'Yes. Colour shifts and fading from old scans are corrected.' },
      { q: 'Can I enhance an old scan of a newspaper or magazine photo?', a: 'Yes. Printed media scans are supported with moiré pattern removal.' },
    ],
  },

  'damaged-portrait-repair': {
    slug: 'damaged-portrait-repair',
    h1: 'Damaged Portrait Repair',
    title: 'Damaged Portrait Repair Online — AI Powered',
    description: 'Repair damaged portrait photos online with AI. Fix scratches, tears, and damage in portrait photographs.',
    intro: { eyebrow: 'AI Portrait Repair', tagline: 'Damaged by time. Not by love. Repair it with both.', copy: 'Physical damage to a portrait is damage to a memory, not to the person in it. Upload your damaged portrait and the AI repairs every scratch, crack, and stain — restoring the face within it to the way it was always meant to be seen.' },
    howTo: ['Upload your damaged portrait.', 'Select AI Repair mode.', 'Download the repaired portrait.'],
    beforeAfter: 'A damaged portrait with scratches and tears repaired by AI to a clean, clear, damage-free image.',
    faqs: [
      { q: 'What types of portrait damage can AI repair?', a: 'Scratches, cracks, tears, water stains, mould, fading, and general physical damage.' },
      { q: 'Can AI repair a portrait that has been torn?', a: 'If enough of the original portrait remains visible, the AI can restore it significantly.' },
      { q: 'Does portrait repair affect the face detail?', a: 'The AI repairs damage and simultaneously enhances face detail for the best possible result.' },
    ],
  },

  'faded-face-photo-enhancer': {
    slug: 'faded-face-photo-enhancer',
    h1: 'Faded Face Photo Enhancer',
    title: 'Faded Face Photo Enhancer Online — AI Powered',
    description: 'Enhance faded face photos online with AI. Restore colour, contrast, and detail to faded face photographs.',
    intro: { eyebrow: 'AI Faded Face Enhancement', tagline: 'The face faded in the photo. Never in the memory. Restore that face well.', copy: 'A faded face in a photograph feels like a person becoming harder to see. Upload yours and the AI restores the face — recovering the colour, the contrast, and the detail — so the person in the photo is visible again as clearly as they live in memory.' },
    howTo: ['Upload your faded face photo.', 'Select AI Enhancement.', 'Download the restored face photo.'],
    beforeAfter: 'A faded, pale face photo restored by AI to vivid, sharp quality with full face detail.',
    faqs: [
      { q: 'Can AI restore a face that has completely faded in a photo?', a: 'If any visible face data remains, the AI can recover significant detail. Completely blank areas may have limited recovery.' },
      { q: 'Does faded face restoration look natural?', a: 'Yes. The AI restores natural skin tone and colour during the enhancement process.' },
      { q: 'Can I restore a faded face in a group photo?', a: 'Yes. Faded faces in group photos are individually restored.' },
    ],
  },

  // ─────────────────────────────────────────────
  // LIFE EVENTS CLUSTER
  // ─────────────────────────────────────────────

  'wedding-photo-enhancer': {
    slug: 'wedding-photo-enhancer',
    h1: 'Wedding Photo Enhancer',
    title: 'Wedding Photo Enhancer Online — AI Powered',
    description: 'Enhance wedding photos online with AI. Get sharp, clear, beautiful wedding photos with professional quality.',
    intro: { eyebrow: 'AI Wedding Photo Enhancement', tagline: 'She wore that dress once. It amazed everyone in that room. Now it is time to preserve it the way it deserves.', copy: 'A wedding day happens once. The photographs from it are the only proof that everything looked exactly the way it did. Upload yours and the AI enhances every detail — the light, the faces, the dress — so the day is preserved completely.' },
    howTo: ['Upload your wedding photo.', 'Select AI Enhancement.', 'Download the enhanced wedding photo.'],
    beforeAfter: 'A wedding photo enhanced to sharp, vivid, professional quality with every detail preserved.',
    faqs: [
      { q: 'Can AI enhance wedding photos taken in low light?', a: 'Yes. Low light wedding photos are significantly improved by AI enhancement.' },
      { q: 'Does AI enhance both faces in a wedding portrait?', a: 'Yes. Both the bride and groom receive equal face enhancement treatment.' },
      { q: 'Can I enhance wedding photos for a wedding album?', a: 'Yes. Enhanced wedding photos are print-ready for album production.' },
    ],
  },

  'ai-wedding-photo-enhancer': {
    slug: 'ai-wedding-photo-enhancer',
    h1: 'AI Wedding Photo Enhancer',
    title: 'AI Wedding Photo Enhancer Online — Powered by CodeFormer',
    description: 'AI wedding photo enhancer powered by CodeFormer. Professional enhancement for wedding photography.',
    intro: { eyebrow: 'AI Wedding Enhancement', tagline: 'The day was perfect. The photo should say so. Time has come.', copy: 'CodeFormer and RealESRGAN working together on your wedding photos — face restoration for the finest portrait detail, image upscaling for the highest resolution. Every moment from that day, enhanced to the standard it deserves.' },
    howTo: ['Upload your wedding photo.', 'Select resolution — HD to 8K.', 'Download the AI-enhanced wedding photo.'],
    beforeAfter: 'A wedding photo processed by dual AI models for maximum face detail and resolution.',
    faqs: [
      { q: 'What AI models enhance wedding photos?', a: 'CodeFormer handles face restoration and RealESRGAN handles overall image upscaling.' },
      { q: 'Is AI wedding photo enhancement suitable for professional photographers?', a: 'Yes. Output quality meets professional wedding photography standards.' },
      { q: 'Can I enhance a full wedding ceremony group photo?', a: 'Yes. All faces in group wedding photos are enhanced simultaneously.' },
    ],
  },

  'wedding-portrait-enhancer': {
    slug: 'wedding-portrait-enhancer',
    h1: 'Wedding Portrait Enhancer',
    title: 'Wedding Portrait Enhancer Online — AI Powered',
    description: 'Enhance wedding portraits online with AI. Get sharp, professional quality wedding portrait photos.',
    intro: { eyebrow: 'AI Wedding Portrait Enhancement', tagline: 'That portrait held two people at their best. Keep it that way all time.', copy: 'A wedding portrait is one of the few photographs where two people deliberately posed at their very best. Upload yours and the AI ensures that effort is preserved — every expression, every detail, at the highest quality available.' },
    howTo: ['Upload your wedding portrait.', 'Select AI Enhancement.', 'Download the enhanced wedding portrait.'],
    beforeAfter: 'A wedding portrait enhanced to sharp, professional quality with full facial detail for both subjects.',
    faqs: [
      { q: 'Does AI enhance both faces equally in a wedding portrait?', a: 'Yes. Both subjects receive the same quality of face enhancement simultaneously.' },
      { q: 'Can I enhance a traditional wedding portrait?', a: 'Yes. All wedding portrait styles are supported.' },
      { q: 'Is output suitable for large wall framing?', a: 'Yes. Select 4K or 8K output for large wedding portrait prints.' },
    ],
  },

  'bridal-photo-enhancer': {
    slug: 'bridal-photo-enhancer',
    h1: 'Bridal Photo Enhancer',
    title: 'Bridal Photo Enhancer Online — AI Powered',
    description: 'Enhance bridal photos online with AI. Get sharp, beautiful bridal photos that capture every detail of the day.',
    intro: { eyebrow: 'AI Bridal Photo Enhancement', tagline: 'She was radiant that day. Let the photo be radiant too.', copy: 'A bridal photo captures a moment of transformation — a person at the height of a day they planned and dreamed about. Upload yours and the AI enhances every detail of that radiance — the dress, the expression, the light.' },
    howTo: ['Upload your bridal photo.', 'Select AI Enhancement.', 'Download the enhanced bridal photo.'],
    beforeAfter: 'A bridal photo enhanced to sharp, vivid quality capturing every detail of the bridal look.',
    faqs: [
      { q: 'Can AI enhance bridal makeup and dress details?', a: 'Yes. The AI enhances all elements of the image including dress texture and makeup detail.' },
      { q: 'Does bridal photo enhancement work on candid shots?', a: 'Yes. Both posed and candid bridal photos are supported.' },
      { q: 'Can I enhance bridal photos for a wedding magazine submission?', a: 'Yes. AI enhancement output meets publication quality standards.' },
    ],
  },

  'groom-photo-enhancer': {
    slug: 'groom-photo-enhancer',
    h1: 'Groom Photo Enhancer',
    title: 'Groom Photo Enhancer Online — AI Powered',
    description: 'Enhance groom photos online with AI. Get sharp, professional groom photos that capture the day perfectly.',
    intro: { eyebrow: 'AI Groom Photo Enhancement', tagline: 'He was at his finest that day. Preserve every detail of it.', copy: 'A groom photograph captures a person at their most formal and intentional. Upload yours and the AI enhances every detail — the suit, the expression, the day itself — preserving it at the quality that occasion earned.' },
    howTo: ['Upload your groom photo.', 'Select AI Enhancement.', 'Download the enhanced groom photo.'],
    beforeAfter: 'A groom photo enhanced to sharp, clear, professional quality with full detail.',
    faqs: [
      { q: 'Does AI enhance suit and clothing detail in groom photos?', a: 'Yes. The AI enhances all image elements including clothing texture and detail.' },
      { q: 'Can I enhance a groom solo portrait?', a: 'Yes. Solo and group groom photos are both supported.' },
      { q: 'Is output suitable for wedding album printing?', a: 'Yes. AI-enhanced groom photos are print-ready for wedding albums.' },
    ],
  },

  'couple-photo-enhancer': {
    slug: 'couple-photo-enhancer',
    h1: 'Couple Photo Enhancer',
    title: 'Couple Photo Enhancer Online — AI Powered',
    description: 'Enhance couple photos online with AI. Get sharp, clear, beautiful couple photos with AI enhancement.',
    intro: { eyebrow: 'AI Couple Photo Enhancement', tagline: 'Two people. One moment. Preserve it the way it earned.', copy: 'A couple photo holds two stories in one frame. Upload yours and the AI enhances both — every face, every expression, every detail of the moment two people chose to share — preserved at the quality it deserves.' },
    howTo: ['Upload your couple photo.', 'Select AI Enhancement.', 'Download the enhanced couple photo.'],
    beforeAfter: 'A couple photo enhanced to sharp, vivid quality with both subjects in full detail.',
    faqs: [
      { q: 'Does AI enhance both people equally in a couple photo?', a: 'Yes. Both subjects receive equal enhancement treatment simultaneously.' },
      { q: 'Can I enhance a candid couple photo?', a: 'Yes. Candid and posed couple photos are both supported.' },
      { q: 'Is couple photo enhancement suitable for anniversary gifts?', a: 'Yes. Enhanced couple photos make meaningful anniversary gifts.' },
    ],
  },

  'engagement-photo-enhancer': {
    slug: 'engagement-photo-enhancer',
    h1: 'Engagement Photo Enhancer',
    title: 'Engagement Photo Enhancer Online — AI Powered',
    description: 'Enhance engagement photos online with AI. Get sharp, clear, beautiful engagement photos that capture the moment.',
    intro: { eyebrow: 'AI Engagement Photo Enhancement', tagline: 'The yes happened once. The photo should last forever.', copy: 'An engagement photo holds the moment a commitment was made. Upload yours and the AI enhances it — the expressions, the detail, the emotion — so the moment is preserved as clearly as the decision it represents.' },
    howTo: ['Upload your engagement photo.', 'Select AI Enhancement.', 'Download the enhanced engagement photo.'],
    beforeAfter: 'An engagement photo enhanced to sharp, vivid, frame-worthy quality capturing the moment perfectly.',
    faqs: [
      { q: 'Can AI enhance outdoor engagement photos?', a: 'Yes. Outdoor, indoor, and studio engagement photos are all supported.' },
      { q: 'Does AI enhance ring detail in engagement photos?', a: 'Yes. Fine detail including ring and jewellery is enhanced.' },
      { q: 'Can I use enhanced engagement photos for wedding invitations?', a: 'Yes. Enhanced photos are print-ready for invitation use.' },
    ],
  },

  'event-photo-enhancer': {
    slug: 'event-photo-enhancer',
    h1: 'Event Photo Enhancer',
    title: 'Event Photo Enhancer Online — AI Powered',
    description: 'Enhance event photos online with AI. Get sharp, clear, high-quality photos from any event.',
    intro: { eyebrow: 'AI Event Photo Enhancement', tagline: 'The event is over. The memory is not. Restore it well.', copy: 'Events happen once and leave photos as their only record. Upload yours and the AI enhances every face, every detail, every moment from that occasion so the record does justice to what actually happened.' },
    howTo: ['Upload your event photo.', 'Select AI Enhancement.', 'Download the enhanced event photo.'],
    beforeAfter: 'An event photo enhanced to sharp, clear quality with all faces and details visible.',
    faqs: [
      { q: 'Can AI enhance photos from indoor events with poor lighting?', a: 'Yes. Indoor event photos with noise and blur are significantly improved.' },
      { q: 'Does AI work on event photos with many people?', a: 'Yes. Large group event photos are fully supported.' },
      { q: 'Can I enhance event photos for press or promotional use?', a: 'Yes. AI-enhanced event photos meet press and promotional quality standards.' },
    ],
  },

  'party-photo-enhancer': {
    slug: 'party-photo-enhancer',
    h1: 'Party Photo Enhancer',
    title: 'Party Photo Enhancer Online — AI Powered',
    description: 'Enhance party photos online with AI. Get sharp, vivid, high-quality party photos with AI enhancement.',
    intro: { eyebrow: 'AI Party Photo Enhancement', tagline: 'Everyone was there. Everyone was happy. Keep that visible.', copy: 'Party photos capture a specific kind of joy — unposed, genuine, full of life. Upload yours and the AI enhances the energy — every face sharp, every moment clear, every part of that celebration preserved properly.' },
    howTo: ['Upload your party photo.', 'Select AI Enhancement.', 'Download the enhanced party photo.'],
    beforeAfter: 'A noisy, blurry party photo enhanced to a sharp, vivid, clearly visible image.',
    faqs: [
      { q: 'Can AI enhance photos taken in low light at parties?', a: 'Yes. Low light party photos benefit significantly from AI noise reduction and detail recovery.' },
      { q: 'Does AI work on party photos with motion blur?', a: 'Yes. Motion blur from dancing or movement is reduced by the AI.' },
      { q: 'Can I enhance party photos for social media sharing?', a: 'Yes. Enhanced party photos are ready for all social media platforms.' },
    ],
  },

  'birthday-photo-enhancer': {
    slug: 'birthday-photo-enhancer',
    h1: 'Birthday Photo Enhancer',
    title: 'Birthday Photo Enhancer Online — AI Powered',
    description: 'Enhance birthday photos online with AI. Preserve birthday memories with sharp, clear, high-quality photos.',
    intro: { eyebrow: 'AI Birthday Photo Enhancement', tagline: 'That birthday came once. The smile in that photo proves it.', copy: 'A birthday photo captures a specific moment of a specific year — a smile that belongs to that age and no other. Upload yours and the AI enhances every detail of that smile and that moment.' },
    howTo: ['Upload your birthday photo.', 'Select AI Enhancement.', 'Download the enhanced birthday photo.'],
    beforeAfter: 'A birthday photo enhanced to sharp, vivid quality preserving every detail of the celebration.',
    faqs: [
      { q: 'Can AI enhance kids birthday photos?', a: 'Yes. Children\'s birthday photos are enhanced with all faces improved.' },
      { q: 'Does AI work on birthday photos with candles and low light?', a: 'Yes. Candlelight birthday photos are enhanced for noise and detail.' },
      { q: 'Can I enhance a birthday photo for a greeting card?', a: 'Yes. Enhanced birthday photos are suitable for card printing.' },
    ],
  },
}

export const PREMIUM_LANDING_MAP: Record<string, PremiumEntry> = PREMIUM_LANDING_SOURCE

export const PREMIUM_LANDING_PAGES = Object.values(PREMIUM_LANDING_MAP)
export const PREMIUM_LANDING_SLUGS = Object.keys(PREMIUM_LANDING_MAP)

export function getPremiumLanding(slug: string) {
  return PREMIUM_LANDING_MAP[slug]
}

export default PREMIUM_LANDING_MAP
