import * as express from 'express';
import { getAllChirps, getOneChirp, deleteChirp, postChirp, updateChirp } from '../../db';

const router = express.Router();

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        let chirp = await getOneChirp(id);
        res.send(chirp);
    } else {
        let chirps = await getAllChirps();
        res.send(chirps);
    }
});

router.delete('/:id', async (req, res, next) => {
    let id = req.params.id;
    let chirp = await deleteChirp(id);
    res.send(chirp);
});

router.post('/', async (req, res, next) => {
    try{
        let userid = req.body.userid;
        let chirp = req.body.chirp;
        let newChirp = await postChirp(userid, chirp);
        res.send(newChirp);
    } catch(err) {
        if(err) console.log(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try{
        let id = req.params.id;
        let userid = req.body.userid;
        let chirp = req.body.chirp;
        let newChirp = await updateChirp(id, chirp);
        res.send(newChirp);
    } catch(err) {
        if(err) console.log(err);
    }
});

// router.post('/', (req, res, next) => {
//     let chirp = req.body;
//     Chirps.CreateChirp(chirp);
//     res.sendStatus(200);
// });

// router.put('/:id', (req, res, next) => {
//     let id = req.params.id;
//     let chirp = req.body;

//     Chirps.UpdateChirp(id, chirp);
//     res.sendStatus(200);
// });

// router.delete('/:id', (req, res, next) => {
//     let id = req.params.id

//     Chirps.DeleteChirp(id);
//     res.sendStatus(200);
// });

export default router;