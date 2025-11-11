// Modal.tsx
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function EditMealModal({ children, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [container] = useState(() => (typeof document !== "undefined" ? document.createElement("div") : null));

  useEffect(() => {
    if (!container) return;
    document.body.appendChild(container);
    setMounted(true);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  if (!mounted || !container) return null;

  return createPortal(
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
    </div>,
    container
  );
}
