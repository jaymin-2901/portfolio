# How to Add Your Profile Picture

## Steps to Add Custom Profile Picture:

### 1. Prepare Your Photo
- Use a high-quality photo (recommended: 400x400 pixels or higher)
- Square aspect ratio works best
- Supported formats: JPG, PNG, WebP
- File size: Keep under 2MB for best performance

### 2. Place Your Photo
Place your photo in the `public/` folder and name it `profile.jpg`

Example path: `public/profile.jpg`

### 3. Update the Constants (If Needed)
If your filename is different, update `src/lib/constants.ts`:

```typescript
export const personalInfo = {
  // ... other fields
  profileImage: "/profile.jpg", // Change this to your filename
};
```

### 4. Alternative: Use a URL
You can also use an external URL for your profile image:

```typescript
profileImage: "https://example.com/your-photo.jpg",
```

## Tips for Professional Profile Picture:

1. **Background**: Use a clean, simple background
2. **Lighting**: Ensure good lighting on your face
3. **Expression**: Professional but friendly smile
4. **Attire**: Smart casual or formal clothing
5. **Framing**: Face should take up 60-80% of the image

## Current Fallback

If no profile image is found, the page will automatically display:
- A gradient background with your initials (e.g., "JC" for Jaymin Chavda)
- A decorative rotating dashed border animation

## Recommended Free Tools to Resize/Crop:

- [Canva](https://canva.com)
- [Photopea](https://photopea.com)
- [Figma](https://figma.com)

---

Your profile picture will automatically appear on the About page with:
- Circular frame
- Shadow effect
- Animated border
- Responsive sizing
