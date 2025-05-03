import './DeletableChip.scss';

import Chip from '@mui/material/Chip';

interface DeletableChipProps {
  label: string;
  onDelete: () => void;
}

export function DeletableChip({ label, onDelete }: DeletableChipProps) {
  return (
    <Chip className='chip-container__element' label={label} variant="outlined" onDelete={onDelete} />
  );
}
