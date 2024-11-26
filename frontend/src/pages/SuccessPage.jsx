import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Success = () => {
    return (
        <div>
            <h1>Payment Successful!</h1>
            <p>Thank you for your payment. </p>
        </div>
    );
};

export default Success;
