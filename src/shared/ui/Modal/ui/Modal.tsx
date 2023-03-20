import {
    FC, MouseEvent, ReactNode
} from 'react';
import cls from './Modal.module.scss';

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
}
const Modal: FC<ModalProps> = (props) => {
    const { children, isOpen = false, onClose } = props;
    const onOverlayClick = (e: MouseEvent) => {
        e.stopPropagation();
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className={cls.Modal}>
            <div className={cls.overlay} onClick={onOverlayClick}>
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
