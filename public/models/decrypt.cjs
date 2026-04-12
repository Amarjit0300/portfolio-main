const crypto = require("crypto");
const fs = require("fs");

// Decrypt the encrypted character model to get the original .glb
const decryptFile = (inputFile, outputFile, password) => {
    const data = fs.readFileSync(inputFile);
    const iv = data.slice(0, 16);
    const encrypted = data.slice(16);

    const key = crypto.createHash("sha256").update(password).digest();
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    fs.writeFileSync(outputFile, decrypted);
    console.log(`✅ Decrypted: ${inputFile} → ${outputFile}`);
};

decryptFile("character.enc", "character_decrypted.glb", "MyCharacter12");
