import axios from "axios"
import { API_ROUTE } from "../../app/env";

export async function loginUser(loginUserDTO){
    try {
    const response = await axios.post(`${API_ROUTE}/User/Login`, {
      Email: loginUserDTO.email,
      Password: loginUserDTO.password,
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("No existe este usuario");
    } else {
      throw new Error("Hubo un error al autenticar el usuario");
    }
  }
}