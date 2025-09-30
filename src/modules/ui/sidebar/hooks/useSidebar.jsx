import { useState } from "react";

export default function useSidebar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return {
    open,
    handleClick,
  };
}
