import React from "react";

export interface IconButtonProps {
    variant?: string;
    icon: React.ReactNode;
    action: React.MouseEventHandler<HTMLButtonElement>
}