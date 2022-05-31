import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useGetCategories from "../../hooks/useGetCategories";
import { Alert, CircularProgress, Typography } from "@mui/material";

interface categoryType {
  name: string;
  id: number;
}

interface jsxType {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SelectCategory = ({ category, setCategory }: jsxType) => {
  const { categories, isLoading, isError } = useGetCategories();

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : isError ? (
        <Alert severity="error">Error in fetching categories</Alert>
      ) : (
        categories && (
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={handleChange}
            fullWidth
            sx={{ borderRadius: "10px" }}
          >
            <MenuItem value="">Select Category</MenuItem>
            {categories &&
              categories.map((el: categoryType) => (
                <MenuItem value={el.id} key={el.id}>
                  {el.name}
                </MenuItem>
              ))}
          </Select>
        )
      )}
    </>
  );
};

export default SelectCategory;
