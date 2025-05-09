# Promises in JavaScript

JavaScript Promises are used to handle asynchronous operations. Many modern APIs return Promises to allow chaining and cleaner async logic using `.then()` or `async/await`.

---

## 🔗 Browser / Web API Promises

| Function/Method | Description |
|-----------------|-------------|
| `fetch()` | Performs HTTP requests (GET, POST, etc.). Returns a Promise that resolves to a Response object. |
| `Response.json()` | Parses the body of the response as JSON. Returns a Promise. |
| `Response.text()` | Parses the body of the response as plain text. Returns a Promise. |
| `navigator.clipboard.readText()` | Reads text from the clipboard. Returns a Promise. |
| `navigator.clipboard.writeText()` | Writes text to the clipboard. Returns a Promise. |
| `Notification.requestPermission()` | Asks the user for permission to show notifications. Returns a Promise. |
| `navigator.mediaDevices.getUserMedia()` | Requests access to camera/microphone. Returns a Promise. |

---

## 🧠 Native JavaScript Promise Utilities

| Function | Description |
|----------|-------------|
| `Promise.resolve(value)` | Creates a Promise that resolves with `value`. |
| `Promise.reject(error)` | Creates a Promise that rejects with `error`. |
| `Promise.all([...])` | Waits for all Promises in the array to resolve. |
| `Promise.race([...])` | Resolves/rejects as soon as the first Promise completes. |
| `Promise.allSettled([...])` | Waits for all Promises to settle (resolve or reject). |

---

## 📦 APIs That Use Promises

| API | Example |
|-----|---------|
| **Clipboard API** | `navigator.clipboard.readText()` |
| **Media Devices API** | `navigator.mediaDevices.getUserMedia()` |
| **File System Access API** | `window.showOpenFilePicker()` (limited browser support) |
| **Web Bluetooth/USB/Serial** | Hardware device access in browser, Promise-based |
| **IndexedDB (via wrappers like idb)** | Used for client-side storage |

---

## ⚙️ Node.js Promise APIs

| Module | Method |
|--------|--------|
| `fs.promises` | `readFile()`, `writeFile()`, `mkdir()`, etc. |
| `dns.promises` | `lookup()`, `resolve()`, etc. |
| `util.promisify()` | Converts callback-based APIs into Promise-based |

---

## 🔧 Library Functions That Return Promises

| Library | Method Examples |
|---------|------------------|
| **Axios** | `axios.get()`, `axios.post()`, etc. Always return Promises. |
| **Firebase** | `auth().signInWithEmailAndPassword()` returns a Promise. |
| **Mongoose (Node.js)** | Methods like `find()`, `save()` return Promises. |
| **jQuery** | `$.ajax()` returns a Deferred (Promise-like). |

---

## 🛠 Custom Promise Functions

You can create your own functions that return Promises:

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000).then(() => console.log("Waited 1 second"));
