'use strict';

// Notice the curried middleware...we take the desired capability from the route
// and return a middleware function that's aware of it. We did something similar in
// Class 07
module.exports = (capability) => {

  return (req, res, next) => {

    // We're expecting that previous middleware has put the user object on the request object
    // Given that, we can just inspect their capabilities.
    // Using a try/catch to avoid having to deeply check this object
    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      }
      else {
        next('Access Denied');
      }
    } catch (e) {
      next('Invalid Login');
    }

  }

}