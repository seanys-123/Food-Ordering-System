import React from 'react';

interface OrderHistoryProps {
  closeOrderPage: () => void;
}

const OrderPage: React.FC<OrderHistoryProps> = ({closeOrderPage}) => {
  return (
    <div>
      <h1>Order History</h1>
      <p>Welcome to the Order page. This page is for page.</p>
      <div onClick={closeOrderPage}>
        Close 
      </div>
    </div>
  );
};

export default OrderPage;
