import qrCodeApiService from './qrCodeApiService';

export const getTipsQRCode = async (value: number) => {
    try {
        const response = await qrCodeApiService.getTipsQRcode(value);
        if (response && response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error get tips QR-code:', error);
        return null;
    }
}

export const getMenuQRCode = async (value: number) => {
    try {
        const response = await qrCodeApiService.getMenuQRcode(value);
        if (response && response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error get menu QR-code:', error);
        return null;
    }
}
