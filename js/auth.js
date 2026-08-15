// =====================================================
// MNU-UNAD v1.0
// Autenticación
// =====================================================

async function obtenerUsuarioActual() {

    const {
        data: { user }
    } = await supabaseClient.auth.getUser();

    return user;
}


// -----------------------------------------------------
// Obtener perfil del usuario
// -----------------------------------------------------

async function obtenerPerfil(userId) {

    const { data, error } =
        await supabaseClient
            .from("profiles")
            .select("*")
            .eq("id", userId)
            .single();

    if (error) {
        console.error(
            "Error obteniendo perfil:",
            error
        );

        return null;
    }

    return data;
}


// -----------------------------------------------------
// Login
// -----------------------------------------------------

async function iniciarSesion(email, password) {

    const {
        data,
        error
    } = await supabaseClient.auth.signInWithPassword({

        email: email,
        password: password

    });

    if (error) {

        throw new Error(
            error.message
        );

    }

    const user = data.user;

    const profile =
        await obtenerPerfil(user.id);

    if (!profile) {

        await cerrarSesion();

        throw new Error(
            "No se encontró el perfil del usuario."
        );

    }

    if (profile.active !== true) {

        await cerrarSesion();

        throw new Error(
            "El usuario se encuentra inactivo."
        );

    }

    return {
        user,
        profile
    };
}


// -----------------------------------------------------
// Cerrar sesión
// -----------------------------------------------------

async function cerrarSesion() {

    const { error } =
        await supabaseClient.auth.signOut();

    if (error) {

        console.error(
            "Error cerrando sesión:",
            error
        );

    }

    window.location.reload();
}


// -----------------------------------------------------
// Verificar rol
// -----------------------------------------------------

function verificarRol(profile, rolEsperado) {

    if (!profile) {
        return false;
    }

    return (
        profile.role === rolEsperado &&
        profile.active === true
    );
}
