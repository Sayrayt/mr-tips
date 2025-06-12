import "./NavButton.scss";

import { NavButtonProps } from "@shared/model/interfaces/NavButtonProps";
import { JSX } from '@emotion/react/jsx-runtime';

export function NavButton({ placeholder, variant, path, isActive, handleClick }: NavButtonProps): JSX.Element {
    return (
        <div className="navButton__container">
            <a
                href={path}
                className={`navButton__item ${isActive ? `navButton__item-active` : ""} ${variant ? `navButton__item-${variant}` : ""}`}
                onClick={() => {
                    handleClick && handleClick();
                }}
            >
                {placeholder}
            </a>
        </div>
    );
}

