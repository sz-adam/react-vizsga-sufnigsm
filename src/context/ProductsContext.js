import React from 'react'

export const ProductsContextDefaults = {
    value: [],
    setValue: () => { }
}

export const ProductsContext = React.createContext(ProductsContextDefaults);
