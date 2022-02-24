
const dashboardView = (req, res) => {
    console.log(req);
    res.render("dashboard", {
      user: req.user
    });
};


module.exports =  {
    dashboardView,
};
