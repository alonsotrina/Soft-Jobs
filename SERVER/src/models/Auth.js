const { DB } = require('../config/db')
const format = require('pg-format')

const verificarCredenciales = async (email, password) => {
    try {
        const SqlQuery = format('SELECT * FROM usuarios WHERE email = %L AND password = %L', email, password);

        const { rowCount } = await DB.query(SqlQuery)
        
        if (!rowCount) throw new Error('USER_NOT_FOUND')

        return Boolean(rowCount)
        
    } catch (error) {
        throw error
    }
}

const register = async (email, password, rol, lenguage) => {
    try {
        const SqlQuery = format('INSERT INTO usuarios VALUES(DEFAULT, %L, %L,%L,%L) RETURNING *', email, password, rol, lenguage);

        const { rows:[user], rowCount } = await DB.query(SqlQuery)
        
        if (!rowCount) throw new Error('USER_NOT_FOUND')

        return user
        
    } catch (error) {
        throw error
    }
}

const exist = async (email) => {
    try {
        const SqlQuery = format('SELECT * FROM usuarios WHERE email = %L', email);

        const { rows:[user], rowCount } = await DB.query(SqlQuery)
        
        if (!rowCount) throw new Error('USER_NOT_FOUND')

        return user

    } catch (error) {
        throw error
    }
}

module.exports = {
    verificarCredenciales,
    register,
    exist,
}