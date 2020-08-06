import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, CardImg, CardBody, CardText, Badge } from 'reactstrap'
import { useParams } from 'react-router-dom'

const CuisineMenu = ({ history }) => {
	let { cuisine } = useParams()
	const [cuisineMenu, setCuisineMenu] = useState([])

	const getCuisineMenu = async () => {
		try {
			let result = await axios.get(`${process.env.REACT_APP_BASE_URI}/foods/food/${cuisine}`)
			setCuisineMenu(result.data)
		} catch (error) {
			console.error('Cuisine Menu Error: ', error)
		}
	}

	const goToFoodDetails = (foodId) => {
		history.replace(`/foods/${foodId}`)
	}

	useEffect(() => {
		getCuisineMenu()
	}, [])

	return (
		<Container className='cuisine-menus-wrapper mt-5'>
			<h4 className='title text-center'>{cuisine} foods</h4>
			<Row>
				{cuisineMenu.map((menu) => (
					<Col xs='6' md='4' key={menu._id}>
						<Card onClick={() => goToFoodDetails(menu._id)}>
							<Badge className='rr-badge-dark'>NRs: {menu.food_price}</Badge>
							<CardImg alt={menu.food_name} src={`${process.env.REACT_APP_BASE_URI}/${menu.food_imagename}`} top></CardImg>
							<CardBody>
								<CardText className='text-center'>{menu.food_name}</CardText>
							</CardBody>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default CuisineMenu
