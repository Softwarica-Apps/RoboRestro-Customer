import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  Button,
} from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyBasket = () => {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getOrders = async () => {
    try {
      let result = await axios.get(
        `${process.env.REACT_APP_BASE_URI}/baskets/Table 2`
      );
      setOrders(result.data);
    } catch (error) {
      console.error("Orders Error: ", error);
    }
  };

  const getTotalPrice = () => {
    let total = 0;
    orders.forEach((order) => {
      total += order.food_price * order.food_quantity;
      setTotalPrice(total);
    });
  };

  const incDecQuantity = (action, orderId) => {
    let myOrders = [...orders];
    myOrders.forEach((order) => {
      if (order._id === orderId) {
        if (action === "increase") {
          order.food_quantity += 1;
        } else {
          if (order.food_quantity === 1) {
            toast("Minimum quantity reached!!!", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            order.food_quantity -= 1;
          }
        }
      }
    });
    setOrders(myOrders);
    getTotalPrice();
  };

  const placeOrder = async () => {
    let myOrders = [...orders];
    try {
      let result = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/orders/place-orders`,
        myOrders
      );
      if (result.status === 201) {
        toast(result.data.message, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setOrders([]);
      }
    } catch (error) {
      console.error("Place Order Error: ", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [totalPrice]);

  useEffect(() => {
    getTotalPrice();
  }, [totalPrice]);

  return (
    <Container className="my-basket-wrapper mt-5">
      <h4 className="title text-center">My Basket</h4>
      <ToastContainer className="mb-2" />
      {orders.map((order) => (
        <Card className="basket-item" key={order._id}>
          <CardBody>
            <Container>
              <Row>
                <Col xs="5" className="food-img">
                  <CardImg
                    alt={order.food_name}
                    src={`${process.env.REACT_APP_BASE_URI}/${order.food_imagename}`}
                  ></CardImg>
                </Col>
                <Col xs="6">
                  <div className="float-right">
                    <CardText className="font-weight-bold">
                      {order.food_name}
                    </CardText>
                    <p className="text-muted price">
                      NRs.{order.food_price * order.food_quantity}
                    </p>
                    <Button
                      color="warning"
                      size="sm"
                      className="btn-round inc"
                      onClick={() => incDecQuantity("decrease", order._id)}
                    >
                      -
                    </Button>
                    <p className="font-weight-bold ml-3 mr-3 quantity">
                      {order.food_quantity}
                    </p>
                    <Button
                      color="warning"
                      size="sm"
                      className="btn-round inc"
                      onClick={() => incDecQuantity("increase", order._id)}
                    >
                      +
                    </Button>
                    <Button
                      color="warning"
                      size="sm"
                      className="btn-round btn-block"
                    >
                      Remove
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      ))}

      {orders.length > 0 ? (
        <>
          <h5 className="text-center">Total: NRs.{totalPrice}</h5>
          <Button color="success" className="btn-block" onClick={placeOrder}>
            Place Order
          </Button>
        </>
      ) : (
        <div className="mt-5 mx-auto text-center">
          <img
            src={`${process.env.REACT_APP_BASE_URI}/images/empty-basket.png`}
            alt="Empty basket"
          />
          <p className="text-muted">Basket's empty</p>
        </div>
      )}
    </Container>
  );
};

export default MyBasket;
