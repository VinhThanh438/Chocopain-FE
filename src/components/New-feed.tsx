import React from 'react';
import { Card } from 'react-bootstrap';

const NewFeed: React.FC = () => {
  return (
    <div className="new-feed">
      <h2>New Feed</h2>
      <Card className="mb-3">
        <Card.Header>
          <img src="avatar1.jpg" alt="Avatar" className="avatar" />
          <strong>Người dùng 1</strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>Tiêu đề bài viết</Card.Title>
          <Card.Text>Nội dung bài đăng...</Card.Text>
          <Card.Img variant="bottom" src="image1.jpg" />
          <div>
            <span>👍 100 lượt thích</span>
            <span>⭐ 50 lượt đánh giá</span>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <img src="avatar1.jpg" alt="Avatar" className="avatar" />
          <strong>Người dùng 1</strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>Tiêu đề bài viết</Card.Title>
          <Card.Text>Nội dung bài đăng...</Card.Text>
          <Card.Img variant="bottom" src="image1.jpg" />
          <div>
            <span>👍 100 lượt thích</span>
            <span>⭐ 50 lượt đánh giá</span>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <img src="avatar1.jpg" alt="Avatar" className="avatar" />
          <strong>Người dùng 1</strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>Tiêu đề bài viết</Card.Title>
          <Card.Text>Nội dung bài đăng...</Card.Text>
          <Card.Img variant="bottom" src="image1.jpg" />
          <div>
            <span>👍 100 lượt thích</span>
            <span>⭐ 50 lượt đánh giá</span>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <img src="avatar1.jpg" alt="Avatar" className="avatar" />
          <strong>Người dùng 1</strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>Tiêu đề bài viết</Card.Title>
          <Card.Text>Nội dung bài đăng...</Card.Text>
          <Card.Img variant="bottom" src="image1.jpg" />
          <div>
            <span>👍 100 lượt thích</span>
            <span>⭐ 50 lượt đánh giá</span>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <img src="avatar1.jpg" alt="Avatar" className="avatar" />
          <strong>Người dùng 1</strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>Tiêu đề bài viết</Card.Title>
          <Card.Text>Nội dung bài đăng...</Card.Text>
          <Card.Img variant="bottom" src="image1.jpg" />
          <div>
            <span>👍 100 lượt thích</span>
            <span>⭐ 50 lượt đánh giá</span>
          </div>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <img src="avatar1.jpg" alt="Avatar" className="avatar" />
          <strong>Người dùng 1</strong>
        </Card.Header>
        <Card.Body>
          <Card.Title>Tiêu đề bài viết</Card.Title>
          <Card.Text>Nội dung bài đăng...</Card.Text>
          <Card.Img variant="bottom" src="image1.jpg" />
          <div>
            <span>👍 100 lượt thích</span>
            <span>⭐ 50 lượt đánh giá</span>
          </div>
        </Card.Body>
      </Card>
      {/* Thêm nhiều bài viết khác */}
    </div>
  );
};

export default NewFeed;