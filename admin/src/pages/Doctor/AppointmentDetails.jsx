import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const AppointmentDetails = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState(null);
    const [error, setError] = useState('');
    const [note, setNote] = useState('');

    const fetchAppointmentDetails = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/admin/appointment-details/${appointmentId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token if required
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch appointment details');
            }

            const data = await response.json();
            setAppointment(data);
            setNote(data.note || '');
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchAppointmentDetails();
    },[appointmentId])

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!appointment) {
        return <p>Loading...</p>;
    }

    const handleNoteUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/admin/appointments/${appointmentId}/note`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ note }),
            });

            if (!response.ok) {
                throw new Error('Failed to update note');
            }

            const updatedAppointment = await response.json();
            setAppointment(updatedAppointment); // Update the displayed appointment
            alert('Note updated successfully');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Appointment Details</h2>
            <p><strong>Date:</strong> {appointment.slotDate}</p>
            <p><strong>Time:</strong> {appointment.slotTime}</p>
            <p><strong>Doctor:</strong> {appointment.docData?.name}</p>
            <p><strong>Patient:</strong> {appointment.userData?.name}</p>
            <p><strong>Amount:</strong> ${appointment.amount}</p>
            <p><strong>Status:</strong> {appointment.isCompleted ? 'Completed' : 'Pending'}</p>
            <div>
                <h3>Note:</h3>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows="4"
                    cols="50"
                />
                <br/>
                <button onClick={handleNoteUpdate}>Update Note</button>
            </div>
        </div>
    );
};

export default AppointmentDetails;
