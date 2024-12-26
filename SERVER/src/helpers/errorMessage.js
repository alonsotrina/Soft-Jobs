module.exports = {
    TRIP_NOT_FOUND: {
        id: 'viajeNoEncontrado',
        statusCode: 404,
        message: 'Viaje no encontrado',
        description: 'El viaje con el ID asignado no fue encontrasdo en la Base de datos.'
    },
    SERVER_ERROR: {
        id: 'serverError',
        statusCode: 500,
        message: 'Error interno en el servidor',
        description: 'Error inesperado, intentele más tarde.'
    },
    USER_NOT_FOUND: {
        id: 'userNotFound',
        statusCode: 404,
        message: 'Usuario no encontrado',
        description: 'El usuario no existe en la BD.'
    }
}