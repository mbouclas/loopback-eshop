
module.exports = function(app) {
  var Order = app.models.Order;
  app.get('/test', function(req,res,next){
    var Order = app.models.Order;
    var User = app.models.User;

    Order.find({where : {email : 'mbouclas@hotmail.com'},include:'shippingMethods'},function(err,results){
      res.send({results:results});
    });

    User.create({email: 'foo@bar.com', password: 'bar'}, function(err, user) {
      console.log(user);
    });
  });

};
