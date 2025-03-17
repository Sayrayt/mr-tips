import './Menu.scss';

import { Header } from '@widgets/header'
import { Sliders } from '../Sliders/Sliders';
import { MenuBlock } from '@widgets/menuBlock';

import { JSX } from '@emotion/react/jsx-runtime';

export function Menu(): JSX.Element {
    const titles = [
        {
            title: 'Завтрак',
            id: 'Breakfasts'
        },
        {
            title: 'Салаты',
            id: 'Salads'
        },
        {
            title: 'Закуски',
            id: 'Snacks'
        },
        {
            title: 'Пасты',
            id: 'Pasts'
        },
        {
            title: 'Тест1',
            id: 'Test1'
        },
        {
            title: 'Тест2',
            id: 'Test2'
        },
        {
            title: 'Тест3',
            id: 'Test3'
        },
        {
            title: 'Тест4',
            id: 'Test4'
        }
    ]

    return (
        <div className="menu">
            <Header />
            <div className="menu__content">
                <h2>Меню</h2>
                <Sliders />
                {titles.map((title) => (<MenuBlock key={title.id} title={title.title} id={title.id} ></MenuBlock>))}

            </div>

        </div>
    )
}