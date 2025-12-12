// Vercel Serverless Function to handle AI extraction securely
// Using CommonJS syntax for maximum compatibility with Vercel Node.js runtime
module.exports = async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get API key from environment variable
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: 'API key not configured in Vercel Settings' });
    }

    try {
        const body = req.body || {};
        const { imageData, mimeType } = body;

        if (!imageData) {
            return res.status(400).json({ error: 'No image data provided' });
        }

        // Call Gemini API (trying gemini-1.5-pro model)
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            {
                                text: "Extract ALL fields from this Japanese tax withholding slip (源泉徴収票) to JSON format. Include: furigana, name, dob_year, dob_month, dob_day, address, my_number, payment_amount (支払金額), salary_after_deduction (給与所得控除後の金額), total_deductions (所得控除の額の合計額), withholding_tax (源泉徴収税額), social_insurance (社会保険料等の金額), life_insurance_old (生命保険料控除額 old), life_insurance_new (生命保険料控除額 new), earthquake_insurance (地震保険料控除額), spouse_deduction (配偶者控除), dependent_deduction (扶養控除), company_name (氏名又は名称), company_address (所在地), company_number (個人番号又は法人番号). Use 0 for missing numbers and empty string for missing text."
                            },
                            {
                                inlineData: {
                                    mimeType: mimeType || 'image/jpeg',
                                    data: imageData
                                }
                            }
                        ]
                    }]
                })
            }
        );

        // Check if response is OK
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error (${response.status}): ${errorText}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        // Parse the response
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            throw new Error("Invalid response from AI model");
        }

        const extractedText = data.candidates[0].content.parts[0].text;
        const parsed = JSON.parse(extractedText.replace(/```json|```/g, '').trim());

        return res.status(200).json({ success: true, data: parsed });

    } catch (error) {
        console.error('Extraction error:', error);
        return res.status(500).json({
            error: error.message || 'Failed to extract data'
        });
    }
}