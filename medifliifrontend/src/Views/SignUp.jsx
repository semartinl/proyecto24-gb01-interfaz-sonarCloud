import React from 'react'

export default function SignUp() {
  return (
    <>
  <title>Medifli.com</title>
  <meta charSet="utf-8" />
  <link rel="icon" href="../assets/icons/medifli_M.png" />
  <link rel="stylesheet" href="./styles.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <header className="container-fluid headerMedifli p-3">
    <div className="centerReservation">
      <img
        src="assets/icons/medifli_sin_fondo_2.png"
        title="Logo de Mediflí"
        height={40}
        alt="M de Mediflí"
      />
      <input
        type="image"
        src="../assets/icons/help.png"
        className="right-header"
        height={40}
        alt="Ayuda"
        title="Ayuda"
      />
      <input
        type="image"
        src="../assets/icons/es-circle.png"
        className="right-header margin_right_header"
        height={40}
        alt="Bandera_idioma"
        title="Selecciona tu idioma"
      />
    </div>
  </header>
  <fieldset className="loginContainer headerMedifli whiteLetters">
    <div>
      <h5>
        <b>Crea tu cuenta</b>
      </h5>
      <div>
        <form method="post">
          <label htmlFor="name" className="loginLables">
            {" "}
            Nombre{" "}
          </label>
          <span style={{ color: "#FF672C" }}>*</span>
          <input
            type="text"
            className="loginBox"
            size={46}
            placeholder="Introduce tu nombre"
            required=""
            name="name"
          />
          <label htmlFor="surname" className="loginLables">
            {" "}
            Apellido{" "}
          </label>
          <input
            type="text"
            className="loginBox"
            size={46}
            placeholder="Introduce tu apellido"
            name="surname"
          />
          <label htmlFor="email" className="loginLables">
            {" "}
            Email{" "}
          </label>
          <span style={{ color: "#FF672C" }}>*</span>
          <input
            type="text"
            className="loginBox"
            size={46}
            placeholder="Introduce tu e-mail"
            required=""
            name="email"
          />
          <label htmlFor="password" className="loginLables">
            {" "}
            Contraseña{" "}
          </label>
          <span style={{ color: "#FF672C" }}>*</span>
          <input
            type="text"
            id="password"
            className="loginBox"
            size={46}
            placeholder="Introduce tu contraseña"
            required=""
            name="password"
            min={4}
          />
          <p className="small-font">
            ${"{"}errorMessage{"}"}
          </p>
          <div>
            <label htmlFor="repeatedPassword" className="loginLables">
              {" "}
              Confirma la contraseña{" "}
            </label>
            <span style={{ color: "#FF672C" }}>*</span>
            <input
              type="text"
              id="repeatedPassword"
              className="loginBox"
              size={46}
              placeholder="Confirma tu contraseña"
              required=""
              name="repeatedPassword"
            />
            <p />
          </div>
          <div>
            <input
              type="submit"
              className="form-control whiteLetters"
              id="loginButton"
              defaultValue="Crear una cuenta"
            />
          </div>
          <p className="small-font" style={{ textAlign: "center" }}>
            ${"{"}errorMessage2{"}"}
          </p>
        </form>
      </div>
    </div>
    <div>
      <div className="center-text">
        <p />
        <div className="top-borders margin-elements">
          <p />
          <p className="twelvePx">
            {" "}
            Al iniciar sesión o al crear una cuenta, aceptas nuestros Términos y
            condiciones y la Política de privacidad{" "}
          </p>
          <div>
            <p className="twelvePx" id="allRightsReserved">
              Todos los derechos reservados
            </p>
            <span className="twelvePx">Copyright 2024 - Medifli.com</span>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</>

  )
}
