import { ActionIcon, Card, Group, Menu, Text } from '@mantine/core';
import { IconDotsVertical, IconEdit } from '@tabler/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getWorkbookPath } from '../../../routes/constants';
import { Workbook, useUpdateWorkbookMutation } from '../../../services/generated/graphql-types';

interface WorkbookCardProps {
  workbook: Workbook;
}

export const WorkbookCard = ({ workbook }: WorkbookCardProps) => {
  const [updateWorkbook] = useUpdateWorkbookMutation();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditName = () => {
    setIsEditing(true);
  };

  return (
    <Card id={workbook?.id} shadow="md" component={Group} display="flex" noWrap position="apart">
      <Link to={getWorkbookPath(workbook?.id ?? '')}>
        <Text>{workbook?.name}</Text>
      </Link>
      <Group>
        <ActionIcon onClick={handleEditName}>
          <IconEdit />
        </ActionIcon>
        <Menu withinPortal>
          <Menu.Target>
            <ActionIcon>
              <IconDotsVertical />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Edit name</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Card>
  );
};
