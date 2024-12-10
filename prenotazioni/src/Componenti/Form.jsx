import { useEffect, useRef, useState } from "react";

export default function FormPrenotazione({ setCurrentDate, setEvents }) {
  const [utenti, setUtenti] = useState([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const dataRef = useRef();
  const oraRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullDate = `${dataRef.current.value} ${oraRef.current.value}`;

    const data = {
      firstName: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      data: fullDate,
    };

    const event1 = {
      title: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
      start: new Date(fullDate),
      end: new Date(new Date(fullDate).getTime() + 60 * 60 * 1000),
    };

    setEvents([event1]);

    setCurrentDate(dataRef.current.value);

    setUtenti((prev) => [...prev, data]);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
    dataRef.current.value = "";
    oraRef.current.value = "";
  };

  useEffect(() => {
    console.log("utenti form" + utenti);
  }, [utenti]);

  return (
    <nav className="nav">
      <form onSubmit={handleSubmit} className="form">
        <div className="label">
          <label htmlFor="firstName">Nome</label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            id="firstName"
            name="firstName"
            ref={firstNameRef}
          />
        </div>
        <div className="label">
          <label htmlFor="lastName">Cognome: </label>
          <input type="text" id="lastName" name="lastName" ref={lastNameRef} />
        </div>
        <div className="label">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" ref={emailRef} />
        </div>
        <div className="label">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <div className="label">
          <label htmlFor="confirmPassword">Conferma Password: </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            ref={confirmPasswordRef}
          />
        </div>
        <div className="label">
          <label htmlFor="data">Inserisci Data: </label>
          <input type="date" id="data" name="data" ref={dataRef} />
        </div>
        <div className="label">
          <label htmlFor="ora">Inserisci Ora: </label>

          <input
            className=""
            style={{ border: "1px solid black" }}
            type="time"
            name="ora"
            ref={oraRef}
          />
        </div>

        <button type="submit">Invia</button>
      </form>
    </nav>
  );
}
