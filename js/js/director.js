// =====================================================
// MNU-UNAD v1.0
// Panel del Director
// =====================================================

async function cargarPanelDirector(profile) {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <section class="dashboard">

            <div class="dashboard-header">

                <div>
                    <span class="badge">
                        DIRECTOR
                    </span>

                    <h2>
                        Panel del Director
                    </h2>

                    <p>
                        Bienvenido,
                        <strong>
                            ${profile.full_name}
                        </strong>
                    </p>
                </div>

                <button
                    class="btn btn-light"
                    onclick="cerrarSesion()"
                >
                    Cerrar sesión
                </button>

            </div>


            <div class="dashboard-grid">

                <button
                    class="module-card"
                    onclick="mostrarModulo('periodos')"
                >
                    <span>📅</span>
                    <strong>Períodos académicos</strong>
                    <small>
                        Administrar períodos
                    </small>
                </button>


                <button
                    class="module-card"
                    onclick="mostrarModulo('simulaciones')"
                >
                    <span>🏛️</span>
                    <strong>Simulaciones</strong>
                    <small>
                        Administrar simulaciones
                    </small>
                </button>


                <button
                    class="module-card"
                    onclick="mostrarModulo('comites')"
                >
                    <span>🏛️</span>
                    <strong>Comités</strong>
                    <small>
                        Configurar comités
                    </small>
                </button>


                <button
                    class="module-card"
                    onclick="mostrarModulo('agenda')"
                >
                    <span>📋</span>
                    <strong>Agenda</strong>
                    <small>
                        Temas de agenda
                    </small>
                </button>


                <button
                    class="module-card"
                    onclick="mostrarModulo('delegaciones')"
                >
                    <span>🌎</span>
                    <strong>Delegaciones</strong>
                    <small>
                        Países y estudiantes
                    </small>
                </button>


                <button
                    class="module-card"
                    onclick="mostrarModulo('resoluciones')"
                >
                    <span>📄</span>
                    <strong>Resoluciones</strong>
                    <small>
                        Anteproyectos
                    </small>
                </button>


                <button
                    class="module-card"
                    onclick="mostrarModulo('votaciones')"
                >
                    <span>🗳️</span>
                    <strong>Votaciones</strong>
                    <small>
                        Gestionar votaciones
                    </small>
                </button>


                <button
                    class="module-card"
                    onclick="mostrarModulo('resultados')"
                >
                    <span>📊</span>
                    <strong>Resultados</strong>
                    <small>
                        Quórum y aprobación
                    </small>
                </button>

            </div>


            <div
                id="modulo-contenido"
                class="module-content"
            >

                <h3>
                    👋 Bienvenido al MNU-UNAD
                </h3>

                <p>
                    Seleccione un módulo para comenzar.
                </p>

            </div>

        </section>

    `;

}


// -----------------------------------------------------
// Módulos
// -----------------------------------------------------

function mostrarModulo(modulo) {

    const contenido =
        document.getElementById(
            "modulo-contenido"
        );

    const nombres = {

        periodos:
            "📅 Períodos académicos",

        simulaciones:
            "🏛️ Simulaciones",

        comites:
            "🏛️ Comités",

        agenda:
            "📋 Agenda",

        delegaciones:
            "🌎 Delegaciones",

        resoluciones:
            "📄 Resoluciones",

        votaciones:
            "🗳️ Votaciones",

        resultados:
            "📊 Resultados"

    };

    contenido.innerHTML = `

        <h3>
            ${nombres[modulo]}
        </h3>

        <p>
            Módulo en construcción.
        </p>

    `;

}
