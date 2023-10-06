import { ActionIcon, Alert, Card, Group, Loader, Menu, SimpleGrid, Text } from '@mantine/core';
import { IconDotsVertical, IconEdit } from '@tabler/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getWorkbookPath } from '../../../routes/constants';
import {
  useGetWorkbooksQuery,
  useUpdateWorkbookMutation,
} from '../../../services/generated/graphql-types';

export const WorkbookCardsContainer = () => {
  const { data, loading, error } = useGetWorkbooksQuery();
  const [updateWorkbook] = useUpdateWorkbookMutation();
  const [isEditing, setIsEditing] = useState(false);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert>Error fetching workbooks</Alert>;
  }

  return (
    <SimpleGrid cols={6}>
      {data?.getWorkbookList?.map(workbook => {
        return (
          <Card
            id={workbook?.id}
            shadow="md"
            component={Group}
            display="flex"
            noWrap
            position="apart"
          >
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
      })}
    </SimpleGrid>
  );
};
