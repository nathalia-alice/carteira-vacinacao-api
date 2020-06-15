const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const userId = request.userId;
        const type = request.type;

        var vaccinesUser;

        if(type === "cidadao"){ 
            vaccinesUser = await connection('vaccinesxuser').select('name', 'id_vaccine', 'id_user', 'name_vaccine', 'description', 'date').
            innerJoin('users', 'users.id', 'vaccinesxuser.id_user').
            innerJoin('vaccines', 'vaccinesxuser.id_vaccine', 'vaccines.id')
            .where('users.id', '=', userId)
        }else{
            vaccinesUser = await connection('vaccinesxuser').select('name', 'id_vaccine', 'id_user', 'name_vaccine', 'description', 'date').
            innerJoin('users', 'users.id', 'vaccinesxuser.id_user').
            innerJoin('vaccines', 'vaccinesxuser.id_vaccine', 'vaccines.id');
        }
 
        return response.json(vaccinesUser);
    },

    async create(request, response) {
        var date = request.body.date;

        const consultVaccine = await connection('vaccines')
        .where('name_vaccine', request.body.id_vaccine);

        const consultUser = await connection('users')
        .where('doc', request.body.id_user);

        var id_vaccine = consultVaccine[0].id;
        var id_user = consultUser[0].id;

        await connection('vaccinesxuser').insert({
            id_vaccine,
          id_user,
          date
        });

        return response.json({ date });
    },

    async index(request, response) {
        const userId = request.userId;
        const type = request.type;

        var vaccinesUser;

        if(type === "cidadao"){ 
            vaccinesUser = await connection('vaccinesxuser').select('name', 'id_vaccine', 'id_user', 'name_vaccine', 'description', 'date').
            innerJoin('users', 'users.id', 'vaccinesxuser.id_user').
            innerJoin('vaccines', 'vaccinesxuser.id_vaccine', 'vaccines.id')
            .where('users.id', '=', userId)
        }else{
            vaccinesUser = await connection('vaccinesxuser').select('name', 'id_vaccine', 'id_user', 'name_vaccine', 'description', 'date').
            innerJoin('users', 'users.id', 'vaccinesxuser.id_user').
            innerJoin('vaccines', 'vaccinesxuser.id_vaccine', 'vaccines.id');
        }
 
        return response.json(vaccinesUser);
    },

}