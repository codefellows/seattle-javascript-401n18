# Use SSL on localhost with Express

## Why?

Sometimes you need to access localhost over SSL. You might be testing on OAuth application that requires a callback URL using `https`. How can we run an Express server and access it via `https://localhost:3000`?

## How

### 1. Generate a self-signed SSL certificate
Run this command in your terminal:
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
Enter the following values when prompted (a single `.` alone enters a blank value):
- Country Name (2 letter code): `US`
- State or Province Name (full name): `Washington`
- Locality Name (eg, city): `Seattle`
- Organization Name (eg, company): `.`
- Organizational Unit Name (eg, section): `.`
- Common Name (eg, fully qualified host name): `localhost:3000` (or whatever port you're going to be using)
- Email Address: `.`

This will output two files, `server.key` and `server.cert`, to the current working directory.

### 2. Wrap the Express server to use these files
Put the `server.key` and `server.cert` at the root level of your project. Then, in your Express server, call `.listen` not on the Express server itself but on a call to `https.createServer`, where you set the `key` and `cert` properties to read those files.

Your server should look something like this:
```javascript
// server.js
const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')

const app = express()

// put your app stuff here

const config = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
}
https.createServer(config, app).listen(3000, () => {
  console.log('Listening with SSL on port 3000')
})
```

### 3. Use
Remember you'll now have to access your app via `https`, not `http`! This means that your web browser will ask you if you're sure you want to trust this untrusted certificate when accessing `https://localhost:3000` over the Web. Procedures will differ based on browser. For Google Chrome, a "Your connection is not private" error will occur, and you'll have to click "Advanced" and then "Proceed to localhost (unsafe)" to get the computer to trust that self-signed certificate.

If you're on the command line using HTTPie you'll need to disable SSL verification:
```
http --verify=no get https://localhost:3000/route
```
