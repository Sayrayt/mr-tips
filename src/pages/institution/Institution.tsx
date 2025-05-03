import './Institution.scss';

import { useState, useEffect } from 'react';

import { getInstitution } from '@entities/institution/api/institutionApi';
import { getInstitutionEmployees } from '@entities/institutionEmployee/api/institutionEmployeeApi';

import { InstitutionEntity } from '@entities/institution/model/interfaces/institutionInterface';
import { InstitutionEmployeeEntitie } from '@entities/institutionEmployee/model/interfaces/institutionEmployeeInterface';

import { institutionDataMock, employeeDataMock } from '@pages/institution/__mocks__/institutionMocks';

export default function Institution() {
    const [institutionData, setInstitutionData] = useState<InstitutionEntity>(institutionDataMock as InstitutionEntity);
    const [employeeData, setEmployeeData] = useState<InstitutionEmployeeEntitie[]>([employeeDataMock as InstitutionEmployeeEntitie, employeeDataMock as InstitutionEmployeeEntitie, employeeDataMock as InstitutionEmployeeEntitie,employeeDataMock as InstitutionEmployeeEntitie, employeeDataMock as InstitutionEmployeeEntitie, employeeDataMock as InstitutionEmployeeEntitie]);

    console.log(employeeData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const [institutionResponse, employeesResponse ] = await Promise.all([
                //     getInstitution(),
                //     getInstitutionEmployees()
                // ]);

                // setInstitutionData(institutionResponse);
                // setEmployeeData(employeesResponse);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                // setInstitutionData({} as InstitutionEntity);
                // setEmployeeData({} as InstitutionEmployeeEntitie);
            }
        };

        fetchData();
    }, [])

    return (
        <div className='institution'>
            <div className="institution-card">
                <div className="institution-card__body">
                    <div className="institution-card__logo">

                    </div>

                    <div className="institution-card__info">
                        <div className="institution-card__name institution-name">
                            {institutionData.institutionInfo.name}
                        </div>

                        <div className="institution-card__address institution-card__field institution-address">
                            {institutionData.institutionInfo.address}
                        </div>

                        <div className="institution-card__slogan institution-card__field institution-address">
                            {institutionData.institutionInfo.slogan}
                        </div>
                    </div>
                </div>
            </div>
            <div className="employee-wrapper">
                {employeeData.map((data, index) => (
                    <div key={`employee-card${index}`} className='employee-card'>
                        <div className="employee-card__body">
                            <div className="employee-card__avatar">
                            </div>

                            <div className="employee-card__info">
                                <div className="employee-card__name institution-name">
                                    {data.fullName.name}
                                </div>

                                <div className="employee-card__address employee-card__field institution-address">
                                    {data.fullName.surname}
                                </div>

                                <div className="employee-card__slogan employee-card__field institution-address">
                                    {data.jobTitle}
                                </div>
                            </div>

                            <div className="employee-card__rating">
                                {data.rating.toFixed(1)}
                                <span className="rating-star">★</span>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className='employee-card'>
                    <div className="employee-card__body">
                        <div className="employee-card__avatar">
                        </div>

                        <div className="employee-card__info">
                            <div className="employee-card__name institution-name">
                                {employeeData.fullName.name}
                            </div>

                            <div className="employee-card__address employee-card__field institution-address">
                                {employeeData.fullName.surname}
                            </div>

                            <div className="employee-card__slogan employee-card__field institution-address">
                                {employeeData.jobTitle}
                            </div>
                        </div>

                        <div className="employee-card__rating">
                            {employeeData.rating.toFixed(1)}
                            <span className="rating-star">★</span>
                        </div>
                    </div> */}
            </div>
        </div>
    )
}