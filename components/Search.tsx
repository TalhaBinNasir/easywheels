"use client";

import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import { manufacturers } from "@/constants";
import { SearchProps } from "@/types";

export default function Search() {
  const [manufacturer, setManuFacturer] = useState("");
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <Autocomplete
        disablePortal
        id="search-manufacturer"
        options={manufacturers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Manufacturer" />}
      />
    </form>
  );
}
