import { ActionIcon } from '@mantine/core';
import { IconPlus } from '@tabler/icons';

interface NewSheetBtnProps {
  loading?: boolean;
  onAddSheet: () => void;
}

export const NewSheetBtn = ({ onAddSheet, loading }: NewSheetBtnProps) => {
  return (
    <ActionIcon onClick={onAddSheet} loading={loading} disabled={loading}>
      <IconPlus />
    </ActionIcon>
  );
};
