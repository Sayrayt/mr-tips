export interface ButtonProps {
    children: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium';
    action: () => void;
}