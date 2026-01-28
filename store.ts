// store.ts
import { create } from 'zustand';
import { Section } from './types';

type ModalType = 'partner' | 'privacy' | 'terms' | null;

interface StoreState {
  activeModal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const useStore = create<StoreState>((set) => ({
  activeModal: null,
  openModal: (type) => set({ activeModal: type }),
  closeModal: () => set({ activeModal: null }),

  activeSection: Section.HERO,
  setActiveSection: (section) => set({ activeSection: section }),
}));

