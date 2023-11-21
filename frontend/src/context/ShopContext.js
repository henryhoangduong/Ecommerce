import { createContext, useState, useEffect } from 'react'
import React from 'react'

const ShopContext = createContext({})

export const ShopContextProvider = ({children}) => {
    return <ShopContext.Provider value={{}

    }>
        {children}
    </ShopContext.Provider>
}

export default ShopContext;