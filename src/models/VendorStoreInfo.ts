export interface VendorStoreInfo {
    openingHours: VendorStoreOpeningHours;
    promotion: VendorStorePromotion;
}

export interface VendorStoreOpeningHours {
    openingHoursID: number
    vendorProfileID: number
    day: number
    openTime: Date
    closingtTime: Date
    isOpen: boolean 
}

export interface VendorStorePromotion {
    promotionID: number
    promoCode: string
    discount: number
    discountType: string
    minimumSpending: number
    isValid: boolean
    vendorProfileID : number
}
