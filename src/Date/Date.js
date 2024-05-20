const now = new Date();

// Get individual components
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
const day = String(now.getDate()).padStart(2, "0");
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");

// Create formatted date and time strings
const formattedDate = `${year}-${month}-${day}`;
const formattedTime = `${hours}:${minutes}:${seconds}`;

console.log(`Current date: ${formattedDate}`); // Outputs: Current date: YYYY-MM-DD
console.log(`Current time: ${formattedTime}`); // Outputs: Current time: HH:MM:SS

const localeDateString = now.toLocaleDateString();
const localeTimeString = now.toLocaleTimeString();

console.log(`Current date (locale): ${localeDateString}`); // Outputs the date in the user's locale format
console.log(`Current time (locale): ${localeTimeString}`);
//
