import { useEffect, useRef, useState } from "react";

export default function FormPrenotazione({ setCurrentDate }) {
  const [utenti, setUtenti] = useState([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const dataRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      data: dataRef.current.value,
    };

    setCurrentDate(dataRef.current.value);

    setUtenti((prev) => [...prev, data]);
  };

  useEffect(() => {
    console.log(utenti);
  }, [utenti]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Nome</label>
        <input type="text" id="firstName" name="firstName" ref={firstNameRef} />
      </div>
      <div>
        <label htmlFor="lastName">Cognome</label>
        <input type="text" id="lastName" name="lastName" ref={lastNameRef} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Conferma Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          ref={confirmPasswordRef}
        />
      </div>
      <div>
        <label htmlFor="data">Inserisci Data</label>
        <input
          type="data"
          id="data"
          name="data"
          ref={dataRef}
          placeholder="mm/dd/yyyy"
        />
      </div>
      <button type="submit">Invia</button>
    </form>
  );
}
