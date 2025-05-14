import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      fontSize: 30,
    },
  },
};

const defaultItems = [
  'Товар 1', 'Товар 2', 'Товар 3', 'Товар 4', 'Товар 5', 'Товар 6',
  'Товар 7', 'Товар 8', 'Товар 9', 'Товар 10', 'Товар 11', 'Товар 12',
];


const names: string[] = [];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

interface MultipleSelectPlaceholderProps {
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  productList: string[];
  height?: string
}

export function MultipleSelectPlaceholder({ selectedItems, setSelectedItems, productList, height = "78.75px"}: MultipleSelectPlaceholderProps) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>(selectedItems);

  const itemsToDisplay = React.useMemo(() => {
    return productList && productList.length > 0 ? productList : defaultItems;
  }, [productList]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const { target: { value } } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
    setSelectedItems(typeof value === 'string' ? value.split(',') : value);
  };

  React.useEffect(() => {
    setPersonName(selectedItems);
  }, [selectedItems]);

  return (
    <div style={{ width: '100%' }}> {/* Устанавливаем 100% ширины для блока */}
      <FormControl sx={{ width: '100%' }}> {/* Устанавливаем 100% ширины для FormControl */}
        <Select
          sx={{
            padding: '27px',
            textAlign: 'center',
            borderRadius: '50px',
            height: height,
            
            border: '3px solid var(--color-blue-main)',
          }}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span style={{ fontSize: '40px', lineHeight: '28px' }}>Товар</span>;
            }

            return (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {selected.join(', ')}
              </div>
            );
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <span>Товар</span>
          </MenuItem>
          {itemsToDisplay.map((name) => (
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
