import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserDTO } from "../../../modules/users/dto/login-user";
import { loginUser } from "../../../modules/users/services/login-user";

export default function useLogin(){
 const [form, setForm] = useState({
    email: "",
    userPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.userPassword) {
      setError("Por favor complete todos los campos");
      return;
    }

    setLoading(true);
    setError("");

    let dto;
    try {
      dto = loginUserDTO({
        email: form.email,
        password: form.userPassword,
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return;
    }

    loginUser(dto)
      .then((user) => {
        console.log(user.value)
        if (user) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: user.value.name,
              email: user.value.email,
            })
          );
          navigate("/projects");
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return {
    handleSubmit,
    handleChange,
    error,
    form,
    loading,
  };
}

