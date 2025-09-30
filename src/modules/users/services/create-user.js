import { API_ROUTE } from "../../app/env";
import axios from "axios";

export async function createUser(createUserDTO) {
  try {
    const response = await axios.post(`${API_ROUTE}/User/Create`, {
      Name: createUserDTO.name,
      FirstName: createUserDTO.firstName,
      Email: createUserDTO.email,
      Password: createUserDTO.password,
    });
    if (response.data.status === false) {
       throw new Error("Ya existe un usuario con este correo electrónico");
    }
    return response.data;
  } catch (error) {
    if (error.response?.status === 409) {
      throw new Error("Ya existe un usuario con este correo electrónico");
    } else if (error.response?.data?.message) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error("Hubo un error al crear el usuario");
  }
  }
}
