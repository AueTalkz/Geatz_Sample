# Geatz Groupz Design System & Figma Guide

This document provides the technical specifications required to recreate and edit the Geatz Groupz website in Figma. Since the site is built with code, these tokens and metrics will ensure your Figma designs match the live application perfectly.

## 🎨 Color Palette

| Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Background** | `#050505` | Main page background |
| **Brand Blue** | `#2563eb` | GDz accents, gradients, icons |
| **Brand Cyan** | `#06b6d4` | Secondary GDz accents |
| **Brand Purple** | `#9333ea` | GEz accents, Brand logo |
| **Brand Pink** | `#db2777` | GEz accents, gradients |
| **Text Primary** | `#ffffff` | Headings and primary content |
| **Text Secondary** | `#a0a0ab` | Subtitles, descriptions, footers |
| **Glass Border** | `rgba(255, 255, 255, 0.07)` | Card outlines |

## Typography (Outfit Font)

> [!NOTE]
> The project uses **Outfit** from Google Fonts. If you don't have it, Inter or Roboto are good substitutes for the Figma mockup.

*   **Hero Title (H1)**: `900 Black`, `clamp(3.5rem, 8vw, 6.5rem)`, `-2px` letter spacing.
*   **Section Title (H2)**: `800 ExtraBold`, `clamp(2.5rem, 5vw, 4rem)`.
*   **Card Titles (H3)**: `700 Bold`, `1.5rem`.
*   **Body Text**: `400 Regular`, `1.1rem`.
*   **Badges/Tags**: `800 ExtraBold`, `0.75rem`, `3px` letter spacing.

## 🧊 Component Specifications

### Glass Cards
*   **Background**: `rgba(255, 255, 255, 0.03)`
*   **Backdrop Blur**: `20px`
*   **Corner Radius**: `24px`
*   **Padding**: `48px`
*   **Hover Glow**: `0px 0px 40px [Color] @ 25% opacity`

### Navigation Bar
*   **Height**: `~64px`
*   **Background**: `rgba(37, 99, 235, 0.15)`
*   **Blur**: `16px`
*   **Border Radius**: `50px` (Pill shape)

## 🔄 Prototyping Flow (Interaction Map)

The site is already a high-fidelity functional prototype. Here is the logic for your Figma prototype:

1.  **Home Page**:
    *   `Explore Our World` Button → **GDz Page**
    *   `View Detailed GDz` Button → **GDz Page**
    *   `View Detailed GEz` Button → **GEz Page**
    *   `Start Project` / `Build your Project` → Scroll to **#Contact** anchor.
2.  **Navigation Bar**:
    *   [GDz](file:///b:/App/GG/src/components/GDz.jsx#1-74) → **GDz Page**
    *   [GEz](file:///b:/App/GG/src/components/GEz.jsx#1-54) → **GEz Page**
    *   [Projects](file:///b:/App/GG/src/components/Projects.jsx#1-80) → **Projects Page**
    *   `Logo` → **Home Page (Top)**

## 📷 Exported Visuals
I have saved full-page high-resolution screenshots of every page to your artifacts directory:
*   [Home Page Screenshot](file:///C:/Users/AueTalkz/.gemini/antigravity/brain/8581db7d-9de5-421e-84d3-442ab72bb739/home_1774208916909.png)
*   [GDz Page Preview](file:///C:/Users/AueTalkz/.gemini/antigravity/brain/8581db7d-9de5-421e-84d3-442ab72bb739/gdz_1774208937856.png)
*   [GEz Page Preview](file:///C:/Users/AueTalkz/.gemini/antigravity/brain/8581db7d-9de5-421e-84d3-442ab72bb739/gez_1774208989465.png)
*   [Projects Page Preview](file:///C:/Users/AueTalkz/.gemini/antigravity/brain/8581db7d-9de5-421e-84d3-442ab72bb739/projects_1774209008511.png)

> [!TIP]
> You can import these images directly into Figma and use them as a "trace" layer or reference to quickly build your editable file.
