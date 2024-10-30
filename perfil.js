let perfil = '';

function mostrarMensaje(perfil) {
    if (perfil.trim() === '') {
        console.log("Debe especificar el perfil del usuario");
    } else {
        switch (perfil.toLowerCase()) {
            case 'administrador':
            case 'admin':
            case 'administradora':
                console.log("Usted tiene todos los privilegios de uso del sistema");
                break;

            case 'asistente':
            case 'asistenta':
                console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
                break;

            case 'invitado':
                console.log("Usted sólo tiene permisos de consultar datos");
                break;

            default:
                console.log("Debe especificar un perfil válido");
                break;
        }
    }
}

mostrarMensaje(perfil);