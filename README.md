# 🤖 AI Tax Filer

An intelligent tax filing application that uses AI to automatically extract data from Japanese tax withholding slips (源泉徴収票) and generates filled PDF documents.

![AI Tax Filer](https://img.shields.io/badge/AI-Powered-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered OCR** - Automatically extract data from tax slip images using Google Gemini or OpenAI GPT-4
- **Smart Form Filling** - All extracted data populates into organized form sections
- **Real-time Tax Calculation** - Automatic calculation of taxable income, tax due, and refund/payment amounts
- **PDF Generation** - Creates filled PDF documents ready for submission
- **Multi-Language Support** - Handles Japanese text and characters seamlessly

### 🎨 Modern UI/UX
- **Cyan/Teal Theme** - Fresh, modern color scheme
- **Glassmorphism Design** - Beautiful glass-effect cards with backdrop blur
- **Smooth Animations** - Micro-interactions and hover effects throughout
- **Responsive Layout** - Works on desktop and mobile devices
- **Dark Mode** - Eye-friendly dark interface

### 📋 Comprehensive Data Fields

#### Personal Information
- Furigana (フリガナ)
- Name (氏名)
- Date of Birth (生年月日)
- Address (住所)
- My Number (個人番号)

#### Employer Information
- Company Name (氏名又は名称)
- Company Address (所在地)
- Company Number (法人番号)

#### Income Details
- Payment Amount (支払金額)
- Salary After Deduction (給与所得控除後の金額)
- Withholding Tax (源泉徴収税額)

#### Deduction Details
- Social Insurance (社会保険料)
- Life Insurance - Old & New (生命保険料控除額)
- Earthquake Insurance (地震保険料控除額)
- Spouse Deduction (配偶者控除)
- Dependent Deduction (扶養控除)
- Basic Deduction (基礎控除)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- An API key from either:
  - [Google AI Studio](https://aistudio.google.com/app/apikey) (Free - Gemini)
  - [OpenAI Platform](https://platform.openai.com/api-keys) (Paid - GPT-4)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/riddhi-z1465/AI-Tax-Filer.git
   cd AI-Tax-Filer
   ```

2. **Configure API Keys**
   
   Open `tax-filer.html` and update the configuration:
   ```javascript
   const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";
   const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY_HERE";
   const USE_API = "gemini"; // or "openai"
   ```

3. **Run a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server -p 8000
   ```

4. **Open in browser**
   ```
   http://localhost:8000/tax-filer.html
   ```

## 📖 Usage

### Step 1: Upload Tax Slip
- Click the upload area or drag and drop your tax slip image
- Supported formats: JPG, PNG, WEBP
- AI will automatically extract all data

### Step 2: Review & Edit
- Check extracted data in organized sections
- Edit any fields as needed
- Watch real-time tax calculations update

### Step 3: Generate PDF
- Click "Generate PDF Document"
- Preview the filled PDF
- Download for submission

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06b6d4)
- **Secondary**: Teal (#14b8a6)
- **Accent**: Sky Blue (#0891b2)
- **Background**: Deep Navy (#050816)

### Typography
- **Body**: Outfit - Modern geometric sans-serif
- **Monospace**: JetBrains Mono - Clean code font

### Components
- Glass cards with backdrop blur
- Gradient buttons with animations
- Floating icons
- Neon text effects
- Smooth transitions

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 (via CDN)
- **Styling**: TailwindCSS (via CDN)
- **PDF Generation**: PDF-Lib
- **Font Handling**: Fontkit
- **AI Integration**: 
  - Google Gemini 2.5 Flash
  - OpenAI GPT-4o-mini
- **Icons**: Font Awesome 6

## 📁 Project Structure

```
AI-Tax-Filer/
├── tax-filer.html          # Main application file
├── NotoSansJP-Regular.ttf  # Japanese font for PDF
├── pdfs/
│   └── kakutei_a_clean.pdf # PDF template
└── README.md               # This file
```

## 🔧 Configuration

### Tax Calculation Settings
The app uses Japanese tax brackets:
- Up to ¥1,950,000: 5%
- ¥1,950,001 - ¥3,300,000: 10% - ¥97,500
- ¥3,300,001 - ¥6,950,000: 20% - ¥427,500
- Over ¥6,950,000: 23% - ¥636,000

Plus 2.1% reconstruction tax

### PDF Coordinates
Coordinates for PDF field placement are configured in the `CONFIG` object. Adjust if using a different PDF template.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Google Gemini for AI-powered OCR
- OpenAI for GPT-4 integration
- PDF-Lib for PDF manipulation
- TailwindCSS for styling utilities
- Font Awesome for icons

## 📧 Contact

Riddhi Zunjarrao - [@riddhi-z1465](https://github.com/riddhi-z1465)

Project Link: [https://github.com/riddhi-z1465/AI-Tax-Filer](https://github.com/riddhi-z1465/AI-Tax-Filer)

---

<div align="center">
  <strong>Made with ❤️ and AI</strong>
  <br>
  <sub>Simplifying tax filing, one document at a time</sub>
</div>
