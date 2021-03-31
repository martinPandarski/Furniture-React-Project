

const OrderInfo = ({ order, email, price  }) => {
  return(
    <tr>
          <td>{email}</td>
          <td>{order}</td>
          <td>{price}</td>
        
        </tr>
  );
};

export default OrderInfo;
