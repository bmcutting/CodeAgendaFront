import { useState } from "react";
import { createUserDTO } from "../../../modules/users/dto/create-user";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../modules/users/services/create-user";

export default function useSignUp() {
  const [form, setForm] = useState({
    name: "",
    firstName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.firstName || !form.email || !form.password) {
      setError("Por favor complete todos los campos");
      return;
    }

    setLoading(true);
    setError("");

    let dto;
    try {
      dto = createUserDTO({
        name: form.name,
        firstName: form.firstName,
        email: form.email,
        password: form.password,
      });
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return;
    }

    createUser(dto)
      .then((user) => {
        if (user) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              name: user.name,
              firstName: user.firstName,
              email: user.email,
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
