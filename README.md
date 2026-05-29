# Research Page – File Structure & Guide

```
research-page/
│
├── index.html                     ← Main page  (edit this)
│
└── static/
    ├── css/
    │   └── index.css              ← All styles
    │
    ├── js/
    │   └── index.js               ← Gallery slider + comparison slider logic
    │
    ├── images/
    │   ├── favicon.svg            ← Browser tab icon
    │   ├── method_overview.jpg    ← Method / pipeline figure
    │   ├── compare_before.jpg     ← Before/after slider – baseline image
    │   ├── compare_after.jpg      ← Before/after slider – your method
    │   ├── interpolate_start.jpg  ← Interpolation panel left thumbnail
    │   ├── interpolate_end.jpg    ← Interpolation panel right thumbnail
    │   │
    │   ├── gallery/               ← PHOTO GALLERY images
    │   │   ├── sample1.jpg
    │   │   ├── sample2.jpg
    │   │   └── sample3.jpg        ← add as many as you like
    │   │
    │   ├── results/               ← Images used in the RESULTS CAROUSEL
    │   │   └── result3.jpg
    │   │
    │   └── interpolation/         ← INTERPOLATION FRAMES
    │       ├── frame_000.jpg
    │       ├── frame_001.jpg
    │       └── ...frame_099.jpg   ← 100 frames (000–099)
    │
    └── videos/
        ├── teaser.mp4             ← Hero teaser video
        ├── demo.mp4               ← Demo video (used in gallery)
        ├── result1.mp4            ← Result videos for carousel & grid
        ├── result2.mp4
        └── result3.mp4            ← add as many as you like
```

---

## How to add content

### Add photos / videos to the gallery slider
Edit `window.GALLERY_ITEMS` inside the `<head>` of `index.html`:

```js
window.GALLERY_ITEMS = [
  {
    src:     "static/images/gallery/myimage.jpg",
    type:    "image",          // "image" or "video"
    thumb:   "static/images/gallery/myimage_thumb.jpg", // optional
    title:   "My Result",
    caption: "A sentence describing this result."
  },
  {
    src:     "static/videos/myclip.mp4",
    type:    "video",
    title:   "Video Result",
    caption: "Qualitative comparison."
  }
];
```

### Add frames for the interpolation slider
Either:
- Drop 100 JPEG frames named `frame_000.jpg` … `frame_099.jpg` into
  `static/images/interpolation/`  *(the default pattern in `index.js`)*, **or**
- Override `window.INTERPOLATION_IMAGES` with your own array of paths:

```js
window.INTERPOLATION_IMAGES = [
  "static/images/interpolation/a.jpg",
  "static/images/interpolation/b.jpg",
  // …
];
```

### Add result videos to the grid / carousel
- Copy `.mp4` files into `static/videos/`.
- For the **grid**, duplicate a `<div class="video-card">` block in `index.html`
  and update the `<source src>`.
- For the **Bulma carousel**, duplicate an `<div class="item">` block in the
  `#results-carousel` section.

### Before/After comparison slider
Replace `static/images/compare_before.jpg` and `static/images/compare_after.jpg`
with your own images. Both images **must be the same dimensions**.
