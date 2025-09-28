import { API_ROUTE } from "../../app/env";
import axios from "axios";

export async function createUser(createUserDTO) {
  try {
    const response = await axios.post(`${API_ROUTE}/user/create`, {
      createUserDTO,
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 409) {
      throw new Error("Ya existe un usuario con este correo electrónico");
    } else {
      throw new Error("Hubo un error al crear el usuario");
    }
  }
}
