const express = require('express'); 

const {celebrate,Segments,Joi} = require('celebrate');

const ongsControlle = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidenteController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/session',sessionController.create);

routes.get('/ongs',ongsControlle.index);
routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().min(2).max(2)
    })
}),ongsControlle.create);

routes.post('/incidents',incidentsController.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY] : Joi.object().keys({
        page: Joi.number()
    })
}),incidentsController.index);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.number().required()
    })
}),incidentsController.delete);

routes.get('/profile',celebrate({
    [Segments.HEADERS] : Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),profileController.index);

module.exports = routes;