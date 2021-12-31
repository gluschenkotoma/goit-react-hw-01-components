import PropTypes from 'prop-types';
import { Table, Tbody } from './Transaction.styled';

import { TransitionPoints } from './TransitionPoints';

export const Transaction = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TransitionPoints type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </Tbody>
    </Table>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
