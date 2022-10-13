// Assignment code here
var passwordCriteria = {
  lowercase: true,
  uppercase: true,
  numeric: true,
  specialChar: true
};

function generatePassword(num) {
  var password = ''
  var characters = [];
  if (passwordCriteria.lowercase && passwordCriteria.uppercase && passwordCriteria.numeric && passwordCriteria.specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 70)];
    }
  }
  else if(passwordCriteria.lowercase && passwordCriteria.uppercase && passwordCriteria.numeric && !passwordCriteria.specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 62)];
    }
  }
  else if(passwordCriteria.lowercase && passwordCriteria.uppercase && !passwordCriteria.numeric && passwordCriteria.specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 60)];
    }
  }
  else if (passwordCriteria.lowercase && !passwordCriteria.uppercase && passwordCriteria.numeric && passwordCriteria.specialChar) {
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 44)];
    }
  }
  else if (!passwordCriteria.lowercase && passwordCriteria.uppercase && passwordCriteria.numeric && passwordCriteria.specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 44)];
    }
  }
  else if (passwordCriteria.lowercase && passwordCriteria.uppercase && !passwordCriteria.numeric && !passwordCriteria.specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 52)];
    }
  }
  else if (passwordCriteria.lowercase && !passwordCriteria.uppercase && passwordCriteria.numeric && !passwordCriteria.specialChar) {
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 36)];
    }
  }
  else if (!passwordCriteria.lowercase && passwordCriteria.uppercase && passwordCriteria.numeric && !passwordCriteria.specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 36)];
    }
  }
  else if (passwordCriteria.lowercase && !passwordCriteria.uppercase && !passwordCriteria.numeric && passwordCriteria.specialChar) {
    characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 34)];
    }
  }
  else if (!passwordCriteria.lowercase && passwordCriteria.uppercase && !passwordCriteria.numeric && passwordCriteria.specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 34)];
    }
  }
  else if (!passwordCriteria.lowercase && !passwordCriteria.uppercase && passwordCriteria.numeric && passwordCriteria.specialChar) {
    characters = '0123456789!@#$%^&*'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 18)];
    }
  }
  else if (passwordCriteria.lowercase && !passwordCriteria.uppercase && !passwordCriteria.numeric && !passwordCriteria.specialChar) {
    characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 26)];
    }
  }
  else if (!passwordCriteria.lowercase && passwordCriteria.uppercase && !passwordCriteria.numeric && !passwordCriteria.specialChar) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 26)];
    }
  }
  else if (!passwordCriteria.lowercase && !passwordCriteria.uppercase && passwordCriteria.numeric && !passwordCriteria.specialChar) {
    characters = '0123456789'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 10)];
    }
  }
  else if (!passwordCriteria.lowercase && !passwordCriteria.uppercase && !passwordCriteria.numeric && passwordCriteria.specialChar) {
    characters = '!@#$%^&*'.split('');
    for (var i = 0; i < num; i++) {
      password += characters[Math.floor(Math.random() * 8)];
    }
  }
  return password;
}

function getPasswordCriteria() {
  var passwordLength = window.prompt('Password length between 8 and 128', 8);

  if (passwordLength > 128 || passwordLength < 8) {
    window.alert('Please choose between 8 and 128');
    return;
  }
  
  var includeLowercase = window.prompt('Include lowercase letters? (Y/N)')
  if (includeLowercase !== 'Y' && includeLowercase !== 'N') {
    window.alert('Please enter "Y" or "N"');
    return;
  } 
  else if (includeLowercase === 'Y') {
    window.confirm('Including lowercase letters in password');
    passwordCriteria.lowercase = true;
  }
  else {
    window.confirm('Not including lowercase letters in password');
    passwordCriteria.lowercase = false;
  }

  var includeUppercase = window.prompt('Include uppercase letters? (Y/N)')
  if (includeUppercase !== 'Y' && includeUppercase !== 'N') {
    window.alert('Please enter "Y" or "N"');
    return;
  } 
  else if (includeUppercase === 'Y') {
    window.confirm('Including uppercase letters in password');
    passwordCriteria.uppercase = true;
  }
  else {
    window.confirm('Not including uppercase letters in password');
    passwordCriteria.uppercase = false;
  }

  var includeNumbers = window.prompt('Include numbers? (Y/N)')
  if (includeNumbers !== 'Y' && includeNumbers !== 'N') {
    window.alert('Please enter "Y" or "N"');
    return;
  } 
  else if (includeNumbers === 'Y') {
    window.confirm('Including numbers in password');
    passwordCriteria.numeric = true;
  }
  else {
    window.confirm('Not including numbers in password');
    passwordCriteria.numeric = false;
  }

  var includeSpecChars = window.prompt('Include special characters? (Y/N)')
  if (includeSpecChars !== 'Y' && includeSpecChars !== 'N') {
    window.alert('Please enter "Y" or "N"');
    return;
  } 
  else if (includeSpecChars === 'Y') {
    window.confirm('Including special characters in password');
    passwordCriteria.specialChar = true;
  }
  else {
    window.confirm('Not including special characters in password');
    passwordCriteria.specialChar = false;
  }

  if (!passwordCriteria.lowercase && !passwordCriteria.uppercase && !passwordCriteria.numeric && !passwordCriteria.specialChar) {
    return('Are you expecting a blank password?')
  }
  else {
    var password = generatePassword(passwordLength);
    return password;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getPasswordCriteria();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
