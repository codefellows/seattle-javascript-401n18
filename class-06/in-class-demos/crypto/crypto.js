'use strict';

const base64 = require('base-64'); // encoding for passing over the internet
const bcrypt = require('bcrypt'); // encryption for saving pw to the DB

// :::::::::   PASS ME OVER THE INTERNET   ::::::::: //

let details = 'username:p@ssw3rd'; // format for passing our username and pw over the internet (before we encode it)

let encoded = base64.encode(details);
console.log('details', encoded);

let decoded = base64.decode(encoded);
console.log('og thing', decoded);

// take my username and password off of form fields in a sign in user interface
// immediately, base 64 encode the username and password into a single string '*aioand:8982982'
// then, put that string on to a header as part of your request

// if interception happens, it happens over the network and part of the request cycle -> "packet sniffing"

// then on the backend, grab the username password string off of the header
// extract the password part
// run it through bcrypt and compare it with the one in the DB


// :::::::::::   HASH ME AND SAVE ME TO THE DB  ::::::::: //

let pw = 'mycoolpassword';
let salt = 10;

async function encrypt(password, complexity) {
  let hashed = await bcrypt.hash(password, complexity);

  console.log('encrypted:', hashed);

  let checkPW = await bcrypt.compare(password, hashed); // (plainTextPW, encryptedPW)
  console.log('is the pw the same?', checkPW);
}

encrypt(pw, salt);