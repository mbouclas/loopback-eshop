var loopback = require('loopback');
var ds = loopback.createDataSource('mysql');

// Discover and build models from INVENTORY table
ds.discoverAndBuildModels('users', {visited: {}, associations: false},
  function (err, models) {
    // Now we have a list of models keyed by the model name
    // Find the first record from the inventory
    console.log(models);
/*    models.Inventory.findOne({}, function (err, inv) {
      if(err) {
        console.error(err);
        return;
      }
      console.log("\nInventory: ", inv);
      // Navigate to the product model
      inv.product(function (err, prod) {
        console.log("\nProduct: ", prod);
        console.log("\n ------------- ");
      });
    });*/
  });
