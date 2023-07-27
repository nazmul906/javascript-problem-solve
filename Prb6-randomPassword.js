function RandomPassword(length) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const specialChar = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    
    const mixChar = uppercase + lowercase + num + specialChar;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * mixChar.length);
      password += mixChar[randomIndex];
    }
  
    return password;
  }
  
  const passwordLength = 12; 
  const result = RandomPassword(passwordLength);
  console.log(result);
  