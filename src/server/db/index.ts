import * as mysql from 'mysql';
import { rejects } from 'assert';


let connection = mysql.createConnection({
    user: 'chirprapp',
    password: 'blahblah',
    host: 'localhost',
    database: 'chirpr'
});

const getAllChirps = () => {
    let query = `
        SELECT c.*, u.name FROM chirps c JOIN users u ON u.id = c.userid;
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if(err) reject(err);
            resolve(results);
        })
    });
};

const getOneChirp = (id: number) => {
    let query = `
        SELECT * FROM chirps WHERE id = ${id};
    `;
    return new Promise ((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if(err) reject(err);
            resolve(results);
        })
    });
};

const deleteChirp = (id: number) => {
    let query = `
        DELETE FROM chirps WHERE id = ${id};
    `;
    return new Promise ((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if(err) reject(err);
            resolve(results);
        })
    });
};

const postChirp = (userid: number, chirp: string) => {
    let query = `
        INSERT INTO chirps (userid, chirp) VALUES ( ${userid}, ${chirp} );
    `;
    return new Promise ((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if(err) reject(err);
            resolve(results);
        })
    });
};

export {
    getAllChirps,
    getOneChirp,
    deleteChirp,
    postChirp
}