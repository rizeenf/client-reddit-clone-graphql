import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import WidthWrarpper from "../components/WidthWrarpper";
import { Box, Button } from "@chakra-ui/react";
import { useRegisterUserMutation } from "../generated/graphql";

const Register = () => {
  const [, Register] = useRegisterUserMutation();

  return (
    <WidthWrarpper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (val, { setErrors }) => {
          const res = await Register({
            username: val.username,
            password: val.password,
          });

          if (res.data?.registerUser) {
            setErrors({
              username: "Wrong username",
            });
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField
              label="Username"
              name="username"
              placeholder="Username"
            />
            <Box mt={4}>
              <InputField
                type="password"
                label="Password"
                name="password"
                placeholder="Password"
              />
            </Box>
            <Button
              type="submit"
              backgroundColor={"teal"}
              p={16}
              mt={4}
              rounded={4}
              colorScheme={"teal"}
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </WidthWrarpper>
  );
};

export default Register;
