import Input from '../Input';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange, ...restProps }) {
  return (
    <label>
      <h3>Find contacts by name</h3>
      <Input name="filter" value={value} onChange={onChange} {...restProps} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
