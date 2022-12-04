import { Text, ThemeIcon, Timeline as MantineTimeline, TimelineItem } from '@mantine/core';
import { IconCalendarEvent } from '@tabler/icons';

export const Timeline = () => {
  return (
    <MantineTimeline>
      <TimelineItem
        bullet={
          <ThemeIcon>
            <IconCalendarEvent />
          </ThemeIcon>
        }
        bulletSize={42}
        title="Timeline Item"
      >
        <Text color="gray.6">The description of timeline item</Text>
      </TimelineItem>
      <TimelineItem
        bullet={
          <ThemeIcon>
            <IconCalendarEvent />
          </ThemeIcon>
        }
        bulletSize={42}
        title="Timeline Item"
      >
        <Text color="gray.6">The description of timeline item</Text>
      </TimelineItem>
      <TimelineItem
        bullet={
          <ThemeIcon>
            <IconCalendarEvent />
          </ThemeIcon>
        }
        bulletSize={42}
        title="Timeline Item"
      >
        <Text color="gray.6">The description of timeline item</Text>
      </TimelineItem>
    </MantineTimeline>
  );
};
