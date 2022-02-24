

const protectRoute = (req, res, next) => {
  console.log(req.isAuthenticated());
    if (true /*req.isAuthenticated() */) {
      return next();
    }
    console.log('Please log in to continue');
    res.redirect('/login');
  }
  const allowIf = (req, res, next) =>{
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/dashboard');      
  }
  module.exports = {
      protectRoute,
      allowIf,
    };
  