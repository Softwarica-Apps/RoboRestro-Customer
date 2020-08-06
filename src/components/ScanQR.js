import React, { useState,useContext } from 'react'
import QrReader from 'react-qr-reader'
import { useHistory } from 'react-router-dom'
import { TableContext } from './TableContext'

const ScanQR = () => {
	const {setTable} = useContext(TableContext)
	const [tables, setTables] = useState(['@Table 1', '@Table 2', '@Table 3'])
	const history = useHistory()
	const previewStyle = {
		height: '100%',
		width: '100%',
	}

	const handleScan = (data) => {
		if (data) {
			alert(data)
			tables.includes(data) ? history.push('/cuisines') : alert('QR code not recognized...')
			setTable(data)			
		}
	}

	const handleError = (err) => {
		console.error('Scan QR Error:',err)
		alert(err)
	}

	return (
		<div>
			<QrReader delay={300} onError={handleError} onScan={handleScan} style={previewStyle} />
		</div>
	)
}

export default ScanQR
