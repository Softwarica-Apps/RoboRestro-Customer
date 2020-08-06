import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col, Card, CardImg, CardBody, CardText, Badge, Button } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TableContext } from './TableContext'

const Food = () => {
	let { foodId } = useParams()
	const [food, setFood] = useState({})
	const { table } = useContext(TableContext)

	const getFoodDetails = async () => {
		try {
			let result = await axios.get(`${process.env.REACT_APP_BASE_URI}/foods/${foodId}`)
			setFood(result.data)
		} catch (error) {
			console.error('Food Details Error: ', error)
		}
	}

	const addToBasket = async () => {
		let basket = { table: table, ...food }
		try {
			let result = await axios.post(`${process.env.REACT_APP_BASE_URI}/baskets`, basket)
			if (result.status === 201) {
				toast(result.data.message, {
					position: 'bottom-center',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			} else {
				toast.error('Could not add the item to basket', {
					position: 'bottom-center',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			}
		} catch (error) {
			console.error('Basket Error: ', error)
		}
	}

	useEffect(() => {
		getFoodDetails()
	}, [])

	return (
		<Container className='food-wrapper mt-5'>
			<h4 className='title text-center'>{food.food_name}</h4>
			<Row>
				<Col xs='10' md='8' className='mx-auto' key={food._id}>
					<ToastContainer className='mb-2' />
					<Card>
						<Badge color='primary'>{food.food_category}</Badge>
						<CardImg alt={food.food_name} src={`${process.env.REACT_APP_BASE_URI}/${food.food_imagename}`} top></CardImg>
						<CardBody>
							<CardText>{food.food_description}</CardText>
							<span className='text-primary font-weight-bold'>NRs.{food.food_price}</span>
							<Button color='success' size='sm' className='btn-round float-right my-auto' onClick={addToBasket}>
								Add to Basket
							</Button>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default Food
