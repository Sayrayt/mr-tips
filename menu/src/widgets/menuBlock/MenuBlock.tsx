import './MenuBlock.scss'

import img1 from '@assets/images/classic.png'
import img2 from '@assets/images/cruas.png'

import { MenuBlockProps } from "@widgets/menuBlock/model/interfaces/MenuBlockProps";

import MenuBlockItem from '@widgets/menuBlock/MenuBlockItem'

export default function MenuBlock({ title, id }: MenuBlockProps) {
  const menuItems = [
    {
      id: 'Breakfasts',
      image: img1,
      name: 'Завтрак классический',
      info: 'Круассан из слоеного теста с яйцом пашот, авокадо и томатами черри',
      weight: '250гр.',
      price: '400р'
    },
    {
      id: 'Salads',
      image: img2,
      name: 'Круасан французский',
      info: 'Fugiat Lorem ea laborum elit voluptate id pariatur adipisicing esse veniam consectetur. Anim dolore id non excepteur minim consequat enim Lorem deserunt excepteur. Consectetur proident amet occaecat ipsum laborum deserunt laboris voluptate laborum laborum sunt. Id aute laborum laborum est duis nulla cillum velit Lorem.',
      weight: '320гр.',
      price: '510р'
    },
    {
      id: 'Breakfasts',
      image: img1,
      name: 'Омлет с овощами',
      info: 'Омлет с помидорами, болгарским перцем, шпинатом и сыром',
      weight: '300гр.',
      price: '350р'
    },
    {
      id: 'Breakfasts',
      image: img2,
      name: 'Гречневая каша с ягодами',
      info: 'Гречка с медом, свежими ягодами и орехами',
      weight: '250гр.',
      price: '320р'
    },
    {
      id: 'Salads',
      image: img1,
      name: 'Авокадо тост с яйцом',
      info: 'Тост с авокадо, яйцом пашот и зеленью',
      weight: '180гр.',
      price: '400р'
    },
    {
      id: 'Snacks',
      image: img2,
      name: 'Круассан с джемом',
      info: 'Тёплый круассан с клубничным джемом',
      weight: '150гр.',
      price: '250р'
    },
    {
      id: 'Test1',
      image: img2,
      name: 'Test1',
      info: 'Test1',
      weight: '150гр.',
      price: '250р'
    },
    {
      id: 'Test2',
      image: img2,
      name: 'Test2',
      info: 'Test2',
      weight: '150гр.',
      price: '250р'
    },
    {
      id: 'Test3',
      image: img2,
      name: 'Test3',
      info: 'Test3',
      weight: '150гр.',
      price: '250р'
    },
    {
      id: 'Test4',
      image: img2,
      name: 'Test4',
      info: 'Test4',
      weight: '150гр.',
      price: '250р'
    },
    {
      id: 'Pasts',
      image: img2,
      name: 'Pasts',
      info: 'Pasts',
      weight: '150гр.',
      price: '250р'
    },
  ];


  const filteredItems = menuItems.filter((item) => item.id === id);

  return (
    <div className="menuBlock" id={id}>
      <h2>{title}</h2>
      <div className='menuBlock__items'>
        {filteredItems.map((item) => (
          <MenuBlockItem
            tags={title}
            key={item.name}
            image={item.image}
            name={item.name}
            info={item.info}
            weight={item.weight}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
