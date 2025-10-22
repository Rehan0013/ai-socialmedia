const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    {
      text: "caption this image.",
    },
  ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: `
            You are an expert in generating caption for images.
            You generate single caption for image.
            Your caption should be short and concise.
            You use hashtags and emojis in captions.
        `,
      },
    });
    return response.text;
}

module.exports = generateCaption;
