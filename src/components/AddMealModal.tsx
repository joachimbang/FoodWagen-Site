// AddMealModal.tsx
"use client";

interface AddMealModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function AddMealModal({ children, onClose }: AddMealModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      data-test-id="food-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[24px] p-6 shadow-lg w-[90vw] max-w-[934px]"
        onClick={(e) => e.stopPropagation()}
        data-test-id="food-modal"
      >
        <div className="mt-6 flex justify-center">{children}</div>
      </div>
    </div>
  );
}
