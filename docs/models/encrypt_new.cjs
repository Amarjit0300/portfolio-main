const crypto = require("crypto");
const fs = require("fs");

// Encrypt a new character model (.glb → .enc)
// Usage: node encrypt_new.cjs <input.glb>
const inputFile = process.argv[2] || "character_new.glb";
const outputFile = "character.enc";
const password = "MyCharacter12";

if (!fs.existsSync(inputFile)) {
    console.error(`❌ File not found: ${inputFile}`);
    console.log("Usage: node encrypt_new.cjs <your_model.glb>");
    process.exit(1);
}

const encryptFile = (inputFile, outputFile, password) => {
    const key = crypto.createHash("sha256").update(password).digest();
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    const input = fs.readFileSync(inputFile);
    const encrypted = Buffer.concat([iv, cipher.update(input), cipher.final()]);

    fs.writeFileSync(outputFile, encrypted);
    console.log(`✅ Encrypted: ${inputFile} → ${outputFile}`);
    console.log("🔄 Restart the dev server to see your new model!");
};

encryptFile(inputFile, outputFile, password);
