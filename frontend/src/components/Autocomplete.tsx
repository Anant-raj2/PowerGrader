import { classes } from "../data/complete";
import React from "react";
import { AutoComplete } from "antd";
import { FormLabel } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

export interface ClassesAutocompleteProps {
  name: string;
  placeholder: string;
  control: Control<any>;
  label: string;
}
const ClassesAutocomplete = (props: ClassesAutocompleteProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{ required: "This field is required." }}
      render={({ field, fieldState }) => {
        return (
          <>
            <FormLabel>{props.label}</FormLabel>
            <AutoComplete
              style={{ width: 200, height: 39 }}
              options={classes}
              placeholder={props.placeholder}
              filterOption={(inputValue, option) =>
                option!.value
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            />
          </>
        );
      }}
    />
  );
};
export default ClassesAutocomplete;
