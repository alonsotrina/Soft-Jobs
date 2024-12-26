const { DB } = require('../config/db')
const format = require('pg-format')

const viewUser = async () => {
    try {
        const SqlQuery = "SELECT * FROM usuarios"
        const { rows, rowCount } = await DB.query(SqlQuery)
        return {
            rows, 
            rowCount 
        }

    } catch (error) {
        throw error
    }
}

const viewUserId = async (email) => {
    try {
        const SqlQuery = format('SELECT * FROM usuarios WHERE email = %L', email);

        const { rows} = await DB.query(SqlQuery)
        return rows

    } catch (error) {
        throw error
    }
}



module.exports = {
    viewUser,
    viewUserId
}