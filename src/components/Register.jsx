import { useState, useEffect } from "react";
import "../styles/Log-Reg.css";

export default function Register() {
  const today = new Date();
  const [users, setUsers] = useState({
    userNick: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: {
      day: "",
      month: "",
      year: "",
    },
  });

  const [error, setError] = useState({});
  const [days, setDays] = useState([]);
  const [months] = useState([
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]);
  const [years] = useState(
    // Inicializar los años (año actual - 100)
    Array.from({ length: 100 }, (_, i) => today.getFullYear() - i)
  );

  // Inicializar los días y años cuando el componente se monta
  useEffect(() => {
    updateDays(users.birthDate.month, users.birthDate.year);
  }, [users.birthDate.month, users.birthDate.year]);

  const updateDays = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  };

  const validate = () => {
    let error = {};

    if (!/\S+@\S+\.\S+/.test(users.email)) {
      error.email = "Correo electronico invalido";
    }

    if (users.password.length < 8) {
      error.password = "Minimo 8 caracteres";
    }

    if (users.password !== users.confirmPassword) {
      error.confirmPassword = "La contraseña no coincide";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "day" || name === "month" || name === "year") {
      setUsers({
        ...users,
        birthDate: {
          ...users.birthDate,
          [name]: value,
        },
      });
    } else {
      setUsers({
        ...users,
        [name]: value,
      });
    }

    setError({
      ...error,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validate();
    if (Object.keys(validateError).length === 0) {
      setUsers({
        userNick: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthDate: {
          day: "",
          month: "",
          year: "",
        },
      });
    } else {
      setError(validateError);
    }
  };

  return (
    <div className="contenedor-reg">
      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <h2>Registrarse</h2>

          <div className="input-contenedor">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="userNick"
              value={users.userNick}
              onChange={handleChange}
              required
            />
            <label htmlFor="#">Usuario:</label>
          </div>
          {error.userNick && <p className="error">{error.userNick}</p>}

          <div className="input-contenedor">
            <i className="fa-solid fa-envelope custom-carta"></i>
            <input
              type="text"
              name="email"
              value={users.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="#">Correo electronico:</label>
          </div>
          {error.email && <p className="error">{error.email}</p>}

          <div className="input-contenedor">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="password"
              value={users.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="#">Contraseña:</label>
          </div>
          {error.password && <p className="error">{error.password}</p>}

          <div className="input-contenedor">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="confirmPassword"
              value={users.confirmPassword}
              onChange={handleChange}
              required
            />
            <label htmlFor="#">Confirmar contraseña:</label>
          </div>
          {error.confirmPassword && (
            <p className="error">{error.confirmPassword}</p>
          )}

          <div className="input-contenedor-fecha">
            <label htmlFor="#">Fecha de nacimiento: </label>
            <select
              name="day"
              value={users.birthDate.day}
              onChange={handleChange}
              required
            >
              <option value="">Día</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              name="month"
              value={users.birthDate.month}
              onChange={handleChange}
              required
            >
              <option value="">Mes</option>
              {months.map((month, index) => (
                <option key={index + 1} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select
              name="year"
              value={users.birthDate.year}
              onChange={handleChange}
              required
            >
              <option value="">Año</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button className="btn" type="submit">
              Enviar
            </button>
          </div>
          <div className="cuenta">
            <p>
              Ya tengo cuenta <a to="/logeo">Iniciar sesion</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
