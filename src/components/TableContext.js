import React, { createContext, useState } from 'react'

export const TableContext = createContext()

const TableContextProvider = ({ children }) => {
	const [table, setTable] = useState('')
	return <TableContext.Provider value={{ table, setTable }}>{children}</TableContext.Provider>
}

export default TableContextProvider
