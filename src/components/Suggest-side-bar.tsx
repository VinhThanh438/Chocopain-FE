import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SidebarRight: React.FC = () => {
  return (
    <div className="sidebar-right">
      <h2>Gợi ý bác sĩ</h2>
      <Card className="mb-3">
        <Card.Body>
          <Card.Img variant="top" src="doctor1.jpg" />
          <Card.Title>Tên bác sĩ</Card.Title>
          <Button variant="primary">Theo dõi</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Img variant="top" src="doctor1.jpg" />
          <Card.Title>Tên bác sĩ</Card.Title>
          <Button variant="primary">Theo dõi</Button>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Body>
          <Card.Img variant="top" src="doctor1.jpg" />
          <Card.Title>Tên bác sĩ</Card.Title>
          <Button variant="primary">Theo dõi</Button>
        </Card.Body>
      </Card>
      {/* Thêm nhiều bác sĩ khác */}
    </div>
  );
};

export default SidebarRight;