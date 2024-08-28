const inputText = document.getElementById('inputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const outputText = document.getElementById('outputText');
const copyButton = document.getElementById('copyButton');
const codes = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

encryptButton.addEventListener('click', () => {
    const originalText = inputText.value;
    const encryptedText = encrypt(originalText);
    showEncryptedText(encryptedText);
});

decryptButton.addEventListener('click', () => {
    const encryptedText = inputText.value;
    const originalText = decrypt(encryptedText);
    showDecryptedText(originalText);
});

copyButton.addEventListener('click', () => {
    const encryptedTextElement = document.querySelector('.encrypted-text');
    if (encryptedTextElement) {
        navigator.clipboard.writeText(encryptedTextElement.textContent)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    }
});

function encrypt(text) {
  const encryptedText = text.replace(/[aeiou]/g, (match) => codes[match]);
  return encryptedText;
}

function decrypt(text) {
  const decryptedText = text.replace(/enter|imes|ai|ober|ufat/g, (match) => Object.keys(codes).find(key => codes[key] === match));
  return decryptedText;
}

function showEncryptedText(text) {
  const rightSection = document.querySelector('.right-section');
  const image = rightSection.querySelector('.image');
  const noMessage = rightSection.querySelector('.no-message');
  const instruction = rightSection.querySelector('.instruction');
  const encryptedTextElement = rightSection.querySelector('.encrypted-text');
  const copyButton = rightSection.querySelector('.copy-button');
  
  encryptedTextElement.textContent = text;
  
  image.style.display = 'none';
  noMessage.style.display = 'none';
  instruction.style.display = 'none';
  encryptedTextElement.style.display = 'block';
  copyButton.style.display = 'block';
}

function showDecryptedText(text) {
  outputText.textContent = `Texto desencriptado: ${text}`;
}
