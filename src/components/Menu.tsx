import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SidebarLeft: React.FC = () => {
  return (
    <div className="sidebar-left">
      <h2>Menu</h2>
      <ListGroup>
        <ListGroup.Item>New</ListGroup.Item>
        <ListGroup.Item>Thông báo</ListGroup.Item>
        <ListGroup.Item>Lịch đặt</ListGroup.Item>
        <ListGroup.Item>Cài đặt</ListGroup.Item>
        <ListGroup.Item>Danh sách theo dõi</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SidebarLeft;