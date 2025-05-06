import profileApiService from './profileApiService';
import { User } from '../model/interfaces/profileInterface';

export const getUserData = async (): Promise<User | null> => {
    try {
        const response = await profileApiService.getUserData();
        if (response && response.status === 200) {
            return response.data;
        } return null;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

export const updateProfile = async (userData: User): Promise<boolean> => {
    try {
        const response = await profileApiService.updateUserData(userData);
        if (response && response.status === 200) {
            console.log("Данные успешно обновлены");
            return true;
            // setMode('view'); // Вернуться в режим просмотра после успешного обновления
        } return false;
    } catch (error) {
        console.error("Error updating user data:", error);
        return false;
    }
};