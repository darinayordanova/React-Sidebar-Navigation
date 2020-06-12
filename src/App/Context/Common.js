import React, { createContext } from "react";

export const CommonContext = createContext([]);

export function CommonProvider(props) {
    return (
        <CommonContext.Provider>
            {props.children}
        </CommonContext.Provider>);
}