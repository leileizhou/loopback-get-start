/**
 * Created by zhouleilei on 17/10/7.
 */
'use strict';

module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('customer', function(err) {
    if (err) throw err;

    app.models.customer.create([{
      nickname: 'Bel Cafe',
      password: '111222',
      email: '753013795@qq.com',
    }], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
