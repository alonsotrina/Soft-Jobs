const reportarConsulta = async (req, res, next) => {
    const queryParams = req.query
    const url = req.url
    const queryBody = req.body

    if (Object.keys(queryParams).length > 0) {
        // Hay parámetros en req.query
        console.log(`
            Hoy ${new Date()}
            Se ha recibido una consulta en la ruta ${url}
            con los parámetros (query params):
            `, queryParams);
    } else if (Object.keys(queryBody).length > 0) {
        // Hay datos en req.body
        console.log(`
            Hoy ${new Date()}
            Se ha recibido una consulta en la ruta ${url}
            con los parámetros (body):
            `, queryBody);
    } else {
        // Si no hay ni query params ni body
        console.log(`
            Hoy ${new Date()}
            Se ha recibido una consulta en la ruta ${url}, pero no se enviaron parámetros.`);
    }

    next()
}

module.exports = reportarConsulta;