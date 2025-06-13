import './TipsBlock.scss';
import { TipsBlockProps } from "@pages/paymentPage/model/interfaces/TipsBlockProps";
import { useEffect, useState } from 'react';
import { PercentButton } from '@shared/index';

export default function TipsBlock({ price }: TipsBlockProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedTip, setSelectedTip] = useState<number>(0);

    const [tipsOptions, setTipsOptions] = useState([
        { percent: 5, title: '5%', result: 0 },
        { percent: 7, title: '7%', result: 0 },
        { percent: 10, title: '10%', result: 0 },
        { percent: 15, title: '15%', result: 0 },
        { percent: 0, title: 'Указать сумму чаевых', result: 0 },
    ]);

    useEffect(() => {
        setTipsOptions((prevTips) =>
            prevTips.map((tipsOption) => ({
                ...tipsOption,
                result: (tipsOption.percent * price) / 100
            }))
        );
    }, [price]);

    const handleClick = (index: number) => {
        setActiveIndex(index);
        setSelectedTip(tipsOptions[index].result); // Обновляем сумму чаевых
    };

    return (
        <div className="tipsBlock">
            <div className='tipsBlock__price'>
                <span>Чаевые: <strong>{selectedTip} ₽</strong></span>
            </div>
            <div className='tipsBlock__buttons'>
                {tipsOptions.map((tipsOption, index) => (
                    <PercentButton
                        key={tipsOption.title}
                        tipsOption={tipsOption}
                        variant={activeIndex === index ? 'active' : ''} 
                        action={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}
