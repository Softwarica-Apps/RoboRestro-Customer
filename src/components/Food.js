import React from "react";
import { Button } from "reactstrap";

const Food = ({ history }) => {
  return (
    <>
      <h3 className="title mt-5">Food Details page</h3>
      <Button color="info" onClick={() => history.goBack()}>
        Back
      </Button>
    </>
  );
};

export default Food;
