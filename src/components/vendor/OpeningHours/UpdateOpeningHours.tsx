import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface OpeningHours {
    openTime: string;
    closingTime: string;
}

const UpdateOpeningHours: React.FC = () => {
    const location = useLocation();
    const { openingHours } = location.state as { openingHours: OpeningHours };

    // Initial states for open and closing times
    const [openTime, setOpenTime] = useState<string>(openingHours.openTime);
    const [closingTime, setClosingTime] = useState<string>(openingHours.closingTime);
    const [message, setMessage] = useState<string | null>(null);

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Log updated times (this is where you'd typically call an API to save the data)
        console.log('Updated Opening Hours:', { openTime, closingTime });

        // Set a success message
        setMessage('Opening hours updated successfully!');
    };

    return (
        <div className="update-opening-hours">
            <h2>Update Opening Hours</h2>

            {/* Success message display */}
            {message && <p className="success-message">{message}</p>}

            {/* Form for updating opening hours */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="openTime">Open Time:</label>
                    <input
                        type="time"
                        id="openTime"
                        value={openTime}
                        onChange={(e) => setOpenTime(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="closingTime">Closing Time:</label>
                    <input
                        type="time"
                        id="closingTime"
                        value={closingTime}
                        onChange={(e) => setClosingTime(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="update-button">
                    Update Hours
                </button>
            </form>
        </div>
    );
};

export default UpdateOpeningHours;
