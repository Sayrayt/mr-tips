export interface ButtonProps {
    children: string
    variant?: 'primary' | 'secondary'
    action: () => void
}