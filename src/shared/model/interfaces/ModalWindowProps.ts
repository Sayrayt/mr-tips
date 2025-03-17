import { JSX } from '@emotion/react/jsx-runtime';

export interface ModalWindowProps {
    content: JSX.Element,
    open: boolean,
    handleClose: () => void
}