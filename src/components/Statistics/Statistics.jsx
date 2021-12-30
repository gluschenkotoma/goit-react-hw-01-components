import PropTypes from 'prop-types';
import { Styles } from './Statistics.styled';

import { generateColor } from './generateColor';
import { StatisticPoints } from './StatisticPoint';

export const Statistics = ({ items }) => {
  return (
    <Styles>
      <h2>Upload stats</h2>

      <ul>
        {items.map(({ id, label, percentage }) => (
          <li key={id} style={{ backgroundColor: generateColor() }}>
            <StatisticPoints label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </Styles>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
