/* not a proud implementation */
const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
export const createPassword = (config) => {
  let characterPool = [];

  if (config.includes.uppercase) {
    characterPool.push(...uppercaseLetters);
  }

  if (config.includes.lowercase) {
    characterPool.push(...lowercaseLetters);
  }

  if (config.includes.numbers) {
    characterPool.push(...numbers);
  }

  if (config.includes.symbols) {
    characterPool.push(...symbols);
  }

  let password = "";
  for (let i = 0; i < config.length; i++) {
    let randomCharacterIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomCharacterIndex];
  }

  return password;
}

/* rework ideal */
export const getPasswordStrength = (config, password) => {
  let points = 0;

  if (config.length < 5) {
    return "too_weak";
  }

  if (config.length >= 8) {
    points += 5;
  }

  if (config.length >= 12) {
    points += 5;
  }

  if (config.includes.lowercase) {
    points += 5;
  }

  if (config.includes.uppercase) {
    points += 5;
  }

  if (config.includes.numbers) {
    points += 5;
  }

  if (config.includes.symbols) {
    points += 10;
  }

  if (new Set(password).size >= 5) {
    points += 5;
  }

  const levels = {
    0: "too_weak",
    1: "too_weak",
    2: "weak",
    3: "medium",
    4: "strong",
  };

  return levels[Math.round(points / 10)];
};
