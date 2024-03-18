import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { values } from "lodash";
import React from "react";

const InputField = () => {
  return (
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
  );
};

export default InputField;
