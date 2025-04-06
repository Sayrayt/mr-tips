import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './MultipleSelectPlaceholder.scss';

const ITEM_HEIGHT = 42;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '100%',
      maxWidth: 270,
      borderRadius: '15px',
      border: '1px solid #2569ED',
    },
  },
};

const names = [
  'Товар 1',
  'Товар 2',
  'Товар 3',
  'Товар 4', ,
  'Товар 5',
  'Товар 6',
];

function getStyles(name: string | undefined, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name as string)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div style={{ width: '100%', maxWidth: '270px' }}>
      <FormControl sx={{ width: '100%', }}>
        <Select
          sx={{ padding: '0px', textAlign: 'center', backgroundColor: '#2569ED', borderRadius: '15px', width: '100%' }}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Выбрать</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Выбрать</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
