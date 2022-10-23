import { createContext, useState } from "react";

export const UiContext = createContext();

const UiContextProvider = ({ children }) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false);
 
    const value = {drawerOpen, setDrawerOpen, showSearchBox, setShowSearchBox}
 
    return (
        <UiContext.Provider value={value}>{children}</UiContext.Provider>
    )
}

export default UiContextProvider