import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'

import axios from 'axios'

const Cuisine = () => {
	const [cuisines, setCuisines] = useState([])
	const getCuisines = async () => {
		try {
			let result = await axios.get(`${process.env.REACT_APP_BASE_URI}/foodcategories`)
			setCuisines(result.data)
		} catch (error) {
			console.error('Cuisines Error: ', error)
		}
	}

	useEffect(() => {
		getCuisines()
	}, [])

	return (
		<Container className='cuisines-wrapper mt-5'>
			<Row>
				<Col className='mx-auto'>
					<p className='title text-center'>What do you feel like eating today?</p>
					<div className='cuisines'>
						{cuisines.map((cuisine) => (
							<img
								alt={cuisine.food_category + ' Cuisine'}
								className='img-raised rounded-circle'
								src={`${process.env.REACT_APP_BASE_URI}/${cuisine.food_category_imagename}`}
								key={cuisine._id}
								onClick={() => alert('clicking now')}
							></img>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Cuisine
