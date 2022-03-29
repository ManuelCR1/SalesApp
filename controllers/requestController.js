const User = require("../models/User");
const Request = require("../models/Request");

const registerRequestView = (req, res) => {
    res.render("generateRequest", {
        user: req.user
    } );
}

const viewRequests = (req, res) => {
    Request.find().then((requests) => {
      if (requests) {
          res.render("viewRequests", {
            user: req.user,
            requests: requests,
          });
      } else {
          console.log("Usuario no existe");
      }
    });
  };

const registerRequest = (req, res) => {
    const { requestName, requestLocation, requestSchedule, requestDescription } = req.body;
    if (!requestName || !requestLocation || !requestSchedule || !requestDescription) {
      console.log("Fill empty fields");
    } else {
        User.findOne({ username: 'Manuel' }).then((user) => {
            if (user) {
                const newRequest = new Request({
                    user: user,
                    service: requestName,
                    location: requestLocation,
                    schedule: requestSchedule,
                    description: requestDescription,
                });
                newRequest
                .save()
                .then( res.redirect("/dashboard"))
                .catch((err) => console.log(err));
            } else {
                console.log("Usuario no existe");
            }
        }); 
    }
};

const changeStatusRequest = (req, res) => {
    id = req.originalUrl.split("/request/request/?id=")[1];
    console.log(id);
    Request.findById(id).then((request) => {
        if (request) {
            request.status = "Requested";
            request.save().then(() => {
                res.redirect("/dashboard");
            });
        } else {
            console.log("Request no existe");
        }
    });
};

const changeStatusProgress = (req, res) => {
    id = req.originalUrl.split("/request/progress/?id=")[1];
    
    Request.findById(id).then((request) => {
        if (request) {
            request.status = "In Progress";
            request.save().then(() => {
                res.redirect("/dashboard");
            });
        } else {
            console.log("Request no existe");
        }
    });
};

const changeStatusCancel = (req, res) => {
    id = req.originalUrl.split("/request/cancel/?id=")[1];
    
    Request.findById(id).then((request) => {
        if (request) {
            request.status = "Canceled";
            request.save().then(() => {
                res.redirect("/dashboard");
            });
        } else {
            console.log("Request no existe");
        }
    });
};

const changeStatusFinish = (req, res) => {
    id = req.originalUrl.split("/request/finish/?id=")[1];
    
    Request.findById(id).then((request) => {
        if (request) {
            request.status = "Finished";
            request.save().then(() => {
                res.redirect("/dashboard");
            });
        } else {
            console.log("Request no existe");
        }
    });
};

module.exports =  {
    registerRequestView,
    registerRequest,
    viewRequests,
    changeStatusRequest,
    changeStatusProgress,
    changeStatusCancel,
    changeStatusFinish,
};
