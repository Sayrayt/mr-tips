import institutionApiService from './institutionApiService';

export const getInstitution = async () => {
    try {
        const response = await institutionApiService.getInstitution();
        if (response && response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching institution data:', error);
        return null;
    }
}

