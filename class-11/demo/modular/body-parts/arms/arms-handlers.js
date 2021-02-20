'use strict';

function coverEyes(payload) {
  if (payload.brightness >= 90) {
    console.log('Covering Eyes');
  }
}
module.exports = { coverEyes }
