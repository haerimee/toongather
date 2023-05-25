import { useState } from 'react';
// @mui
import { Menu, Button, MenuItem, Typography, FormControl, Select } from '@mui/material';
// component
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: 'newest', label: '최신 순' },
  { value: 'title', label: '제목 순' },
];

export default function SearchWebtoonSort() {
  const [sortType, setSortType] = useState("newest");

  const handleChange = (event) => {
    setSortType(event.target.value)
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={sortType}
          onChange={handleChange}
          displayEmpty
        >
          {SORT_BY_OPTIONS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === 'newest'}
              value={option.value}
              sx={{ typography: 'body2' }}

            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
