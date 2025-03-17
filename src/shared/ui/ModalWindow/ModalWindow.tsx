import './ModalWindow.scss';

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

import { IconButton } from '@shared/ui/IconButton';
import { FiX } from "react-icons/fi";

import { JSX } from '@emotion/react/jsx-runtime';
import { ModalWindowProps } from '@shared/model/interfaces/ModalWindowProps';

export function ModalWindow({ content, open, handleClose }: ModalWindowProps): JSX.Element {
    return (
        <Modal
            open={open}
            onClose={(e: Event) => {
                e.stopPropagation();
                handleClose();
            }}
            disableAutoFocus
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <div className='modalWindow'>
                    <div className='modalWindow__header'>
                        <IconButton action={(e) => {
                            e.stopPropagation();
                            handleClose();
                        }} icon={<FiX size={20} />} />
                    </div>
                    <div className='modalWindow__content'>
                        {content}
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}
