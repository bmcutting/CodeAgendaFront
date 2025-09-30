import { useContext } from "react";
import { SidebarContext } from "./SidebarContext.1";


export function useSidebarContext() {
    return useContext(SidebarContext);
}
