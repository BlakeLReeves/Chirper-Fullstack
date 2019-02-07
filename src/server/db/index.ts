import * as mysql from 'mysql';


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

export {
    getAllChirps,
    getOneChirp
}