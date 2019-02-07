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
        SELECT c.*, u.name FROM chirps c JOIN users u ON u.id = c.userid ORDER BY _created DESC;
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
};

const getOneChirp = (id: number) => {
    let query = `
        SELECT c.*, u.name FROM chirps c JOIN users u ON u.id = c.userid WHERE c.id = ${id};
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
};

const deleteChirp = (id: number) => {
    let query = `
        DELETE FROM chirps WHERE id = ${id};
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
};

const postChirp = (userid: number, chirp: string) => {
    let query = `
        INSERT INTO chirps (userid, chirp) VALUES (${userid}, '${chirp}');
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
};

const updateChirp = (id: number, chirp: string) => {
    let query = `
        UPDATE chirps SET chirp = "${chirp}" WHERE id = ${id};
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
};

const getAllUsers = () => {
    let query = `
        SELECT * FROM users;
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
}

const getOneUser = (id: number) => {
    let query = `
        SELECT * FROM users WHERE id = ${id};
    `;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
}

export {
    getAllChirps,
    getOneChirp,
    deleteChirp,
    postChirp,
    updateChirp,
    getAllUsers,
    getOneUser
}