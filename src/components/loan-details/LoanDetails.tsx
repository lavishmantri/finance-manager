import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';

interface LoanDetailsProps {
  interestEarned: number;
  cagr: number;
}

export const LoanDetails = ({ interestEarned, cagr }: LoanDetailsProps) => {
  return (
    <div>
      <div>
        <Typography variant={TypographyVariants.SUB_HEADING1}>Interest Earned</Typography>
        <Typography variant={TypographyVariants.SUB_HEADING2}>{interestEarned}</Typography>
      </div>
      <div>
        <Typography variant={TypographyVariants.SUB_HEADING1}>CAGR</Typography>
        <Typography variant={TypographyVariants.SUB_HEADING2}>{cagr}</Typography>
      </div>
    </div>
  );
};
