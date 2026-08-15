// =====================================================
// MNU-UNAD v1.0
// Panel del Estudiante
// =====================================================

async function cargarPanelEstudiante(profile) {

    const app =
        document.getElementById("app");

    app.innerHTML = `

        <section class="dashboard">

            <div class="dashboard-header">

                <div>

                    <span class="badge">
                        ESTUDIANTE
                    </span>

                    <h2>
                        Panel del Estudiante
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

                <div class="module-card">

                    <span>👤</span>

                    <strong>
                        Mi perfil
                    </strong>

                    <small>
                        Información personal
                    </small>

                </div>


                <div class="module-card">

                    <span>🌎</span>

                    <strong>
                        Mi delegación
                    </strong>

                    <small>
                        País que represento
                    </small>

                </div>


                <div class="module-card">

                    <span>🏛️</span>

                    <strong>
                        Mi comité
                    </strong>

                    <small>
                        Comité asignado
                    </small>

                </div>


                <div class="module-card">

                    <span>📋</span>

                    <strong>
                        Tema de agenda
                    </strong>

                    <small>
                        Consulta de agenda
                    </small>

                </div>


                <div class="module-card">

                    <span>📄</span>

                    <strong>
                        Anteproyecto
                    </strong>

                    <small>
                        Consultar resolución
                    </small>

                </div>


                <div class="module-card">

                    <span>🗳️</span>

                    <strong>
                        Votación
                    </strong>

                    <small>
                        Participar en votación
                    </small>

                </div>

            </div>

        </section>

    `;

}
