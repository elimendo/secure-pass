function generatePassword() {
    
    var length = parseInt(prompt("Enter number between 8-128"));

    
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Put the right length in ugly mofo");
      return;
    }

    var includeLowercase = confirm("Lowercase Characers?");
    var includeUppercase = confirm("Uppercase characters?");
    var includeNumeric = confirm("Numeric?");
    var includeSpecial = confirm("Special Characters?");

    
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("Select one character type ugly mofo.");
      return;
    }

    
    var password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
   
    alert(password);
  }

  function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

    var allChars = "";
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecial) allChars += specialChars;

    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }

    return password;
  }