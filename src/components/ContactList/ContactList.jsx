import PropTypes from 'prop-types';

import { List, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default function ContactList({ contacts, onDeleteUser }) {
  return (
    <List bordered>
      {contacts.map(({ id, name, number }) => (
        <List.Item key={id}>
          <List.Item.Meta title={name} description={number} />
          <Button
            onClick={() => onDeleteUser(id)}
            danger
            type="text"
            icon={<DeleteOutlined />}
          ></Button>
        </List.Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteUser: PropTypes.func,
};

ContactList.defaultProps = {
  contacts: [],
  onDeleteUser: () => {},
};
