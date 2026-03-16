const providerController = require('../Controllers/provider.controllers.js');

const providerRoutes = ( app ) => {

    app.post('/cb/v1/api/providers/signup', providerController.signUp);
} 

module.exports = providerRoutes;