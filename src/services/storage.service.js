const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(base64Image, filename) {
  try {
    const response = await imagekit.upload({
      file: base64Image,
      fileName: filename,
      folder: "ai-social-post",
    });

    return response;
  } catch (error) {
    console.error("ImageKit Upload Failed with Error:", error);

    const errorMessage = error.message
      ? error.message
      : typeof error === "object" && error !== null
      ? JSON.stringify(error)
      : "Unknown ImageKit API Error";

    throw new Error(`Failed to upload file to ImageKit: ${errorMessage}`);
  }
}

module.exports = uploadFile;
