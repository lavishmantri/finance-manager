import { ThemeIcon, Timeline as MantineTimeline, TimelineItem } from '@mantine/core';
import { IconCalendarEvent } from '@tabler/icons';
import { TimelineItemContent } from './TimelineItemContent';

export const Timeline = () => {
  return (
    <MantineTimeline align="right">
      <TimelineItem
        bullet={
          <ThemeIcon>
            <IconCalendarEvent />
          </ThemeIcon>
        }
        bulletSize={42}
        title="Timeline Item"
      >
        <TimelineItemContent />
      </TimelineItem>
      <TimelineItem
        bullet={
          <ThemeIcon>
            <IconCalendarEvent />
          </ThemeIcon>
        }
        bulletSize={42}
        title="Timeline Item"
        align="left"
      >
        <TimelineItemContent />
      </TimelineItem>
      <TimelineItem
        bullet={
          <ThemeIcon>
            <IconCalendarEvent />
          </ThemeIcon>
        }
        bulletSize={42}
        title="Timeline Item"
        align="right"
      >
        <TimelineItemContent />
      </TimelineItem>
    </MantineTimeline>
  );
};
