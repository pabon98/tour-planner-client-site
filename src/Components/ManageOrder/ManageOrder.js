import React from 'react';

const ManageOrder = (props) => {
    const { _id, name, email, date, phone, status } = props.order;
    const { handleApproveOrder, handleCancelOrder } = props;

    return (
        <tr>
            <td>{email}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{date}</td>
            <td className={status === 'pending' ? 'text-danger' : 'text-success'}>{status}</td>
            <td><button className='btn btn-success' onClick={() => handleApproveOrder(_id)}>Approve</button></td>
            <td><button className='btn btn-danger' onClick={() => handleCancelOrder(_id)}>Delete</button></td>
        </tr>
    );
};

export default ManageOrder;