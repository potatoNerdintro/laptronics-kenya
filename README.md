# Laptronics Kenya - Laptop Catalogue Demo

A modern, premium, mobile-responsive laptop catalogue sales demonstration designed for **Laptronics Kenya**.

> **Important Notice:** This is a private, unapproved sales demonstration, not an official website. Product photos are representative placeholders to be replaced with seller-approved photography prior to commercial launch. Direct WhatsApp enquiry features use clearly marked placeholders until the business contact is officially verified.

---

## Features

- **Exact Advertised Specifications & Prices:** Displays the 6 supplied product listings with verbatim technical specifications and prices in Kenyan Shillings (KSh).
  1. **HP ZBook Fury 16 G9** (Intel Core i7-12850HX / RTX A3000 12GB) — KSh 155,000
  2. **HP ZBook Fury 16 G9** (Intel Core i7-12700H 14C/20T / RTX A3000 12GB) — KSh 150,000
  3. **MacBook Pro 16-inch M1 Max** (32-core GPU / 1TB SSD) — KSh 200,000
  4. **MacBook Pro 16-inch M1 Pro** (120Hz ProMotion / 512GB SSD) — KSh 155,000
  5. **HP Victus 16** (Core i7-13700H / RTX 4060 8GB) — KSh 150,000
  6. **Lenovo Legion 5** (Core i7-13650HX / RTX 5060 8GB 165Hz) — KSh 230,000
- **Live Search & Specification Filter:** Search across models, CPUs, GPUs, RAM, storage, and specialized use cases (e.g., "CAD", "RTX", "32GB", "M1").
- **Category Filtering & Sorting:** Fast toggle across Workstations, Gaming, and Apple laptops, with real-time price sorting (Lowest to Highest, Highest to Lowest).
- **Product Details View:** In-depth view highlighting exact advertised CPU, GPU, memory, display, ports, and target workloads.
- **WhatsApp Enquiry System:** Transparent demo enquiry drawer showing a pre-formatted, copyable enquiry message and explaining that the seller's WhatsApp line is pending verification.
- **Side-by-Side Comparison:** Compare any two laptop models side-by-side to evaluate differences in specs and pricing.
- **Dark Charcoal & Electric Blue Aesthetic:** High-contrast, premium hardware store aesthetic built with Tailwind CSS.

---

## Setup & Running Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

3. **Run Unit Tests:**
   ```bash
   npx --yes tsx --test src/utils/catalogueLogic.test.ts
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## Editing Product Details

All product data is centralized in `src/data/laptops.ts`. To update pricing, specifications, or add new seller-approved photography, edit the entries in the `LAPTOPS` array.
