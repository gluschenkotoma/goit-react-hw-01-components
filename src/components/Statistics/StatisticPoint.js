export const StatisticPoints = ({ label, percentage }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
};
