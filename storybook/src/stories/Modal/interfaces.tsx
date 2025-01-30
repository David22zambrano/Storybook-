// TYPES

export type ModalStates = 'info' | 'delete' | 'warning';

// INTERFACES

export interface ModalProps {
    open: boolean;
    onCancel: () => void;
    onAccept: () => void;
    title: string;
    description?: string;
    state?: ModalStates;
}
