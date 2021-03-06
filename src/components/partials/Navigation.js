import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavItem, NavLink, Nav, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
	const [collapseOpen, setCollapseOpen] = useState(false)

	return (
		<>
			{collapseOpen ? (
				<div
					id='bodyClick'
					onClick={() => {
						document.documentElement.classList.toggle('nav-open')
						setCollapseOpen(false)
					}}
				/>
			) : null}
			<Navbar className='fixed-top rr-bg-dark' expand='lg'>
				<Container>
					<div className='navbar-translate'>
						<Link to='/' id='navbar-brand' className='navbar-brand'>
							ROBORESTRO
						</Link>
						<button
							className='navbar-toggler navbar-toggler'
							onClick={() => {
								document.documentElement.classList.toggle('nav-open')
								setCollapseOpen(!collapseOpen)
							}}
							aria-expanded={collapseOpen}
							type='button'
						>
							<span className='navbar-toggler-bar top-bar'></span>
							<span className='navbar-toggler-bar middle-bar'></span>
							<span className='navbar-toggler-bar bottom-bar'></span>
						</button>
					</div>
					<Collapse className='justify-content-end' isOpen={collapseOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink to='/cuisines/' tag={Link} className='btn rr-nav-link'>
									<FontAwesomeIcon icon={faUtensils} size='lg' className='mr-2' />
									Menu
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to='/my-basket/' tag={Link} className='btn rr-nav-link'>
									<FontAwesomeIcon icon={faShoppingBasket} size='lg' className='mr-2' />
									My Basket
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Navigation
