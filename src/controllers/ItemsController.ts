import {Request, Response} from 'express';
import knex from '../database/connection'

class ItemsController{
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
              id: item.id,
              title: item.title,
              item_url: `http://192.168.100.57:3333/uploads/${item.image}`
            }
        })
    
        response.json(serializedItems);
    }
};

export default ItemsController;