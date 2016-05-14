export const TOGGLE_MODAL = "TOGGLE_MODAL";

export function toggleModal(employee) {
  return {
    type: TOGGLE_MODAL,
    employee
  };
}
