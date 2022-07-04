import "./login.scss";
import Modal from "../Modal";
import Textfield from "../../../Textfield/Textfield";
import Button from "../../../Button/Button";
import { useCallback, useContext, useState } from "react";
import { loginRequest, registerRequest } from "../../../../api/auth";
import { UiContext } from "../../../Main/Main";

export interface ModalLoginProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalLogin(props: ModalLoginProps) {
  const { onClose } = props;
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<"login" | "register">("login");
  const { onLogin } = useContext(UiContext);

  const onSubmitLogin = useCallback(async () => {
    setLoading(true);
    const { data, status } = await loginRequest(email, password);
    if (status === 200) {
      onLogin(data);
      onClose();
    } else {
      setError(
        "Invalid authentication. Check that the data entered is correct"
      );
    }
    setLoading(false);
  }, [email, password, onLogin, onClose]);

  const onSubmitRegister = useCallback(async () => {
    setLoading(true);
    const { data, status } = await registerRequest({
      name,
      lastname,
      email,
      password,
    });
    if (status === 201) {
      onLogin(data);
      onClose();
    } else {
      setError("Invalid register. Check that the data entered is correct");
    }
    setLoading(false);
  }, [name, lastname, email, password, onClose, onLogin]);

  const onSubmit = useCallback(() => {
    if (type === "login") {
      onSubmitLogin();
    } else {
      onSubmitRegister();
    }
  }, [onSubmitLogin, onSubmitRegister, type]);

  const changeType = useCallback(() => {
    setType(type === "login" ? "register" : "login");
  }, [type]);

  return (
    <Modal id='login' {...props} loading={loading}>
      <header>
        <img src='/logo-hulk.png' alt='' className='icon' />
        <h6>Welcome</h6>
        <p>Enter your email and password to continue</p>
      </header>
      <form>
        {type === "register" && (
          <>
            <div className='group'>
              <Textfield
                placeholder='Name'
                value={name}
                onChange={value => setName(value)}
              />
              <Textfield
                placeholder='Lastname'
                value={lastname}
                onChange={value => setLastname(value)}
              />
            </div>
          </>
        )}
        <Textfield
          placeholder='Email'
          value={email}
          onChange={value => setEmail(value)}
        />
        <Textfield
          type='password'
          placeholder='Password'
          value={password}
          onChange={value => setPassword(value)}
        />
      </form>
      <footer>
        <span className={error ? "color-error" : ""}>
          {error
            ? error
            : "Do You haven't an account? Register so you can access. It will only take a few minutes."}
        </span>
      </footer>
      <menu>
        <Button fullWidth variant='color' onClick={changeType}>
          {type}
        </Button>
        <Button fullWidth variant='bg' onClick={onSubmit}>
          enter
        </Button>
      </menu>
    </Modal>
  );
}
