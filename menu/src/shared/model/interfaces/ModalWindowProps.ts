import { JSX } from 'react';

export interface ModalWindowProps {
    content: JSX.Element,
    open: boolean,
    handleClose: () => void
}