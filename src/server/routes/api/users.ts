import * as express from 'express';
import { getAllUsers, getOneUser } from '../../db';

const router = express.Router();

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        let user = await getOneUser(id);
        res.send(user);
    } else {
        let users = await getAllUsers();
        res.send(users);
    }
});

export default router;