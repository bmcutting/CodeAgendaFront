import { useNavigate } from "react-router-dom";

export default function useSidebar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log(path);
    navigate(path);
  };

  return {handleClick};
}
