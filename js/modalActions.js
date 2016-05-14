export const TOGGLE_MODAL = "TOGGLE_MODAL";

export function toggleModal(modalId) {
  return {
    type: TOGGLE_MODAL,
    modalId
  };
}
