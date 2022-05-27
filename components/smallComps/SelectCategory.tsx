import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectCategory = () => {
  const [category, setcategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setcategory(event.target.value);
  };
  return (
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={category}
      onChange={handleChange}
      fullWidth
      sx={{ borderRadius: "10px" }}
    >
      <MenuItem value="">Select Category</MenuItem>
      <MenuItem value={10}>Vegetables and Fruits</MenuItem>
      <MenuItem value={20}>Juices</MenuItem>
      <MenuItem value={30}>Wheats</MenuItem>
    </Select>
  );
};

export default SelectCategory;
