// =====================================================
// MNU-UNAD v1.0
// Aplicación principal
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacion
);


async function iniciarAplicacion() {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <div class="loading">

            <div class="loading-icon">
                🇺🇳
            </div>

            <h2>
                MNU-UNAD
            </h2>

            <p>
                Cargando plataforma...
            </p>

        </div>

    `;


    const user =
        await obtenerUsuarioActual();


    if (!user) {

        mostrarLogin();

        return;

    }


    const profile =
        await obtenerPerfil(user.id);


    if (!profile) {

        mostrarError(
            "No se encontró el perfil del usuario."
        );

        return;

    }


    if (profile.active !== true) {

        mostrarError(
            "El usuario se encuentra inactivo."
        );

        return;

    }


    if (profile.role === "director") {

        await cargarPanelDirector(
            profile
        );

        return;

    }


    if (profile.role === "estudiante") {

        await cargarPanelEstudiante(
            profile
        );

        return;

    }


    mostrarError(
        "El rol del usuario no está configurado correctamente."
    );

}


// -----------------------------------------------------
// Login
// -----------------------------------------------------

function mostrarLogin() {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <section class="login-container">

            <div class="login-card">

                <div class="login-logo">
                    🇺🇳
                </div>

                <h1>
                    MNU-UNAD
                </h1>

                <p class="login-subtitle">
                    Modelo de Naciones Unidas
                </p>


                <form
                    id="login-form"
                    onsubmit="procesarLogin(event)"
                >

                    <label>
                        Correo electrónico
                    </label>

                    <input
                        type="email"
                        id="login-email"
                        required
                        placeholder="correo@ejemplo.com"
                    >


                    <label>
                        Contraseña
                    </label>

                    <input
                        type="password"
                        id="login-password"
                        required
                        placeholder="Contraseña"
                    >


                    <div
                        id="login-error"
                        class="login-error"
                    ></div>


                    <button
                        type="submit"
                        class="btn btn-primary btn-full"
                    >
                        INGRESAR
                    </button>

                </form>

            </div>

        </section>

    `;

}


// -----------------------------------------------------
// Procesar login
// -----------------------------------------------------

async function procesarLogin(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "login-email"
        ).value.trim();


    const password =
        document.getElementById(
            "login-password"
        ).value;


    const errorElement =
        document.getElementById(
            "login-error"
        );


    errorElement.innerText =
        "Verificando acceso...";


    try {

        const resultado =
            await iniciarSesion(
                email,
                password
            );


        if (
            resultado.profile.role ===
            "director"
        ) {

            await cargarPanelDirector(
                resultado.profile
            );

        } else {

            await cargarPanelEstudiante(
                resultado.profile
            );

        }

    } catch (error) {

        console.error(error);

        errorElement.innerText =
            error.message;

    }

}


// -----------------------------------------------------
// Error
// -----------------------------------------------------

function mostrarError(mensaje) {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <div class="error-page">

            <div>
                ⚠️
            </div>

            <h2>
                No fue posible cargar MNU-UNAD
            </h2>

            <p>
                ${mensaje}
            </p>

            <button
                class="btn btn-primary"
                onclick="location.reload()"
            >
                Intentar nuevamente
            </button>

        </div>

    `;

}
