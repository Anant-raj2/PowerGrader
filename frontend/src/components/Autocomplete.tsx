import { classes } from "../data/complete";
import AutoComplete from "rsuite/AutoComplete";

export const ClassesAutocomplete = (props: any) => {
  return (
    <AutoComplete data={classes} {...props} />
  )
};
export default ClassesAutocomplete;
