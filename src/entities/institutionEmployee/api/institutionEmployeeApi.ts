import institutionEmployeeApiService from './institutionEmployeeApiService';

export const getInstitutionEmployees = async () => {
    try {
        const response = await institutionEmployeeApiService.getInstitutionEmployees();
        if (response && response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error('Error fetching institution employees data:', error);
        return null;
    }
}
