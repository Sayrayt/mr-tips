import "./NavSlider.scss";

import { useState } from "react";

import { NavButton } from "@shared/ui/NavButton/NavButton";
import Slider from "react-slick";

import type { Settings } from "react-slick";

const navButtons = [
    { name: "Завтраки", path: "#Breakfasts" },
    { name: "Салаты", path: "#Salads" },
    { name: "Закуски", path: "#Snacks" },
    { name: "Пасты", path: "#Pasts" },
    { name: "Тест1", path: "#Test1" },
    { name: "Тест2", path: "#Test2" },
    { name: "Тест3", path: "#Test3" },
    { name: "Тест4", path: "#Test4" },
];

export default function NavSlider() {

    const [activePath, setActivePath] = useState<string | null>(navButtons[0]?.path || null);

    const handleClick = (path: string) => {
        setActivePath(path);
    };

    const settings: Settings = {
        focusOnSelect: true,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            { breakpoint: 1920, settings: { slidesToShow: 8 } },
            { breakpoint: 1440, settings: { slidesToShow: 7 } },
            { breakpoint: 1024, settings: { slidesToShow: 6 } },
            { breakpoint: 768, settings: { slidesToShow: 5 } },
            { breakpoint: 480, settings: { slidesToShow: 4 } },
            { breakpoint: 320, settings: { slidesToShow: 3 } },
        ],
    };

    return (
        <div className="navSlider">
            <Slider {...settings}>
                {navButtons.map((button) => (
                    <NavButton
                        key={button.name}
                        isActive={activePath === button.path}
                        handleClick={() => handleClick(button.path)}
                        path={button.path}
                        placeholder={button.name}
                    />
                ))}
            </Slider>
        </div>
    );
}
