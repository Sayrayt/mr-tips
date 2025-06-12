export interface NavButtonProps {
    variant?: string;
    placeholder: string;
    path: string;
    isActive?: boolean;
    handleClick?: () => void;
}