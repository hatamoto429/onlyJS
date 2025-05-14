// --- Regular Expressions, regex

// --------------------------------------------
// 🔹 1. COMMON REGULAR EXPRESSION TOKENS
// --------------------------------------------
// .        => Any character except newline
// \d       => Digit (0–9)
// \D       => Non-digit
// \w       => Word character (a–z, A–Z, 0–9, _)
// \W       => Non-word character
// \s       => Whitespace (space, tab, newline)
// \S       => Non-whitespace
// ^        => Start of string
// $        => End of string
// [...]    => Character set (e.g., [aeiou])
// [^...]   => Negated set (not a, e, i, o, u)
// (abc)    => Capturing group
// (?:abc)  => Non-capturing group
// a|b      => Alternation (a or b)
// *        => 0 or more repetitions
// +        => 1 or more repetitions
// ?        => 0 or 1 (optional)
// {n}      => Exactly n times
// {n,}     => At least n times
// {n,m}    => Between n and m times
// \b       => Word boundary
// \B       => Not a word boundary
// (?=...)  => Positive lookahead
// (?!...)  => Negative lookahead

// --------------------------------------------
// 🔹 2. COMMON REGEX FUNCTIONS IN JAVASCRIPT
// --------------------------------------------
// .test()     => Returns true/false if pattern is found
// .match()    => Returns match array or null
// .replace()  => Replaces match with specified value
// .search()   => Returns index of match or -1
// .split()    => Splits string based on RegEx pattern

// --- Examples

// Example 1: Match an email
const text = "Contact us at support@example.com for more info.";
const emailPattern = /\w+@\w+\.\w+/;
const emailMatch = text.match(emailPattern);
console.log("Email found:", emailMatch ? emailMatch[0] : "None");

// Example 2: Check if string contains a number
const hasNumber = /\d/.test(text);
console.log("Contains number:", hasNumber); // false

// Example 3: Replace all spaces with underscores
const withUnderscores = text.replace(/ /g, "_");
console.log("With underscores:", withUnderscores);

// Example 4: Extract all words
const words = text.match(/\b\w+\b/g);
console.log("Words in text:", words);

// Example 5: Case-insensitive search
const ciSearch = /contact/i.test(text); // ignores case
console.log("Contains 'contact' (case-insensitive):", ciSearch);

// Example 6: Validate if a string is a valid 5-digit ZIP code
const zip = "90210";
const isZip = /^\d{5}$/.test(zip);
console.log("Is valid ZIP code:", isZip); // true