const itemController = require("../controllers/items.controller");

module.exports = app => {

    app.get('/api/items', itemController.getItemsCtrl);
    app.get('/api/items/:id', itemController.getDetailCtrl);

    app.get('/', itemController.webApp);
    app.get('/items', itemController.webApp);
    app.get('/items/:id', itemController.webApp);

};