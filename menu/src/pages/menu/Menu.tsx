import './Menu.scss';

import  Header  from '@widgets/header/Header'
import { Sliders } from './Sliders';
import  MenuBlock  from '@widgets/menuBlock/MenuBlock';
import { titles } from '@pages/menu/__mocks__/menuMocks';

export default function Menu() {
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
