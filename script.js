document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const copyBtn = document.getElementById('copy-btn');
    const generateBtn = document.getElementById('generate-btn');
    const lengthInput = document.getElementById('length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    // Character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

    // Generate password function
    function generatePassword() {
        let chars = '';
        let password = '';
        
        // Build character set based on selected options
        if (uppercaseCheckbox.checked) chars += uppercaseChars;
        if (lowercaseCheckbox.checked) chars += lowercaseChars;
        if (numbersCheckbox.checked) chars += numberChars;
        if (symbolsCheckbox.checked) chars += symbolChars;
        
        // If no character set is selected, use all
        if (chars === '') {
            chars = uppercaseChars + lowercaseChars + numberChars + symbolChars;
        }
        
        const length = parseInt(lengthInput.value);
        
        // Generate password
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        
        return password;
    }

    // Copy password to clipboard
    copyBtn.addEventListener('click', function() {
        passwordInput.select();
        document.execCommand('copy');
        
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });

    // Generate new password
    generateBtn.addEventListener('click', function() {
        passwordInput.value = generatePassword();
    });

    // Generate initial password on page load
    passwordInput.value = generatePassword();
});