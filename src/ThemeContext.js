import { createContext } from "react";

//memicking useState hook
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
