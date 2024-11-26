import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
    const location = useLocation();
    const [paymentStatus, setPaymentStatus] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const status = queryParams.get('status');
        const tranId = queryParams.get('tran_id');

        setPaymentStatus(status);
        setTransactionId(tranId);

        if (status === 'SUCCESS') {
            setMessage('Payment was successful!');
        } else {
            setMessage('Payment failed. Please try again.');
        }
    }, [location]);

    return (
        <div>
            <h2>{message}</h2>
            <p>Transaction ID: {transactionId}</p>
        </div>
    );
};

export default SuccessPage;
