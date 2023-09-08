import { Box } from '../../oxygen/atoms/box';
import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';

export const SalaryDetails = () => {
  return (
    <Box>
      <Box>
        <Typography variant={TypographyVariants.HEADING1}>Current Salary</Typography>
        <Typography variant={TypographyVariants.BODY1}>46L</Typography>
      </Box>
      <Box>
        <Typography variant={TypographyVariants.HEADING2}>Breakup</Typography>
        <Box>
          <Typography variant={TypographyVariants.SUB_HEADING1}>Monthly</Typography>
          <Typography variant={TypographyVariants.BODY1}>40L</Typography>
        </Box>
        <Box>
          <Typography variant={TypographyVariants.SUB_HEADING1}>Bonus</Typography>
          <Typography variant={TypographyVariants.BODY1}>2.5L + 6.5L</Typography>
        </Box>
      </Box>
    </Box>
  );
};
