import React from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import WidthWrarpper from "../components/WidthWrarpper";

const Register = () => {
  return (
    <WidthWrarpper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                value={values.username}
                onChange={handleChange}
                placeholder="username"
              />
              {/* <FormErrorMessage></FormErrorMessage> */}
            </FormControl>
          </Form>
        )}
      </Formik>
    </WidthWrarpper>
  );
};

export default Register;
