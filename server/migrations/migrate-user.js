var server = require('../server');
var ds = server.dataSources.mysql;
for (var a in server.models){
  console.log(a)
}

ds.automigrate('User', function(err) {
console.log(err)
});
