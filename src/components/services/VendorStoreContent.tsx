import React from 'react';
import './VendorStoreContent.css';
// import { useNavigate } from 'react-router-dom';
import { VendorStoreInfo } from '../models/VendorStoreInfo';

interface StoreProps {
    vendorStoreInfo?: VendorStoreInfo;
}

const VendorStoreContent: React.FC<StoreProps> = ({ vendorStoreInfo }) => {
    // const navigate = useNavigate();

    const handleUpdateOpeningHours = () => {
        // navigate('/update-opening-hours', { state: { openingHours } });
    };

    const handleUpdatePromotion = () => {
        // Logic to handle updating promotion (e.g., open a modal or navigate to another page)
        console.log('Update Promotion clicked');
    };

    const openingHours = vendorStoreInfo?.openingHours;

    const openTime = openingHours?.openTime ? new Date(openingHours.openTime).toLocaleTimeString() : 'N/A';
    const closingTime = openingHours?.closingtTime ? new Date(openingHours.closingtTime).toLocaleTimeString() : 'N/A';

    return (
        <div className="store-content">
            <h3>Vendor Store Information</h3>
            <div className="store-info">
                {/* Opening Hours Section */}
                <div className="opening-hours">
                    <h4><u>Opening Hours</u></h4>
                    <p><b>Open Time:</b> {openTime}</p>
                    <p><b>Closing Time:</b> {closingTime}</p>
                    <p><b>Status:</b> {vendorStoreInfo?.openingHours.isOpen ? "Open" : "Closed"}</p>
                    <br></br>
                    {/* Update Opening Hours Button */}
                    <button onClick={handleUpdateOpeningHours} className="update-button">
                        Update Opening Hours
                    </button>
                </div>

                {/* Promotion Section */}
                <div className="promotion">
                    <h4><u>Promotion</u></h4>
                    {vendorStoreInfo?.promotion.isValid === true ? (
                        <>
                            <p><b>Promo Code:</b> {vendorStoreInfo.promotion.promoCode}</p>
                            <p><b>Discount:</b> {vendorStoreInfo.promotion.discount}%</p>
                            <p><b>Minimum Spending:</b> ${vendorStoreInfo.promotion.minimumSpending}</p>
                            <p><b>Status:</b> {vendorStoreInfo.promotion.isValid ? "Valid" : "Expired"}</p>
                        </>
                    ) : (
                        <p>No promotion available</p>
                    )}

                    {/* Update Promotion Button */}
                    <button onClick={handleUpdatePromotion} className="update-button">
                        Update Promotion
                    </button>
                </div>
            </div>
        </div>
    );     
};

export default VendorStoreContent;