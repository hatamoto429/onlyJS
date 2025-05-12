// Provide reusable utility functions (e.g., validators, formatters)

// Generate a random ID
export const generateId = () => Math.random().toString(36).substr(2, 9);

// Validate email
export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

// Capitalize first letter
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
