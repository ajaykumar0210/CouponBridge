const Provider = require('../Models/provider.model.js');

const create = async (data) => {
    try {
        const provider = await Provider.create(data);
        return provider;
    } catch(error) {
        console.log(error);
        if(error.name === 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach( key => {
                err[key] = error.errors[key].message;
            });
            throw { err, code: 400 };
        }
        throw error;
    }
}


module.exports = {
    create
}