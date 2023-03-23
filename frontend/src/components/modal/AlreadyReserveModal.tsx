import React from "react";

interface BtnProps {
  isOpen: boolean;
  onClose: () => void;
}
const AlreadyModal = ({ isOpen, onClose }: BtnProps) => {
  const modalStyles = isOpen ? "fixed inset-0 z-50 overflow-y-auto" : "hidden";
  const contentStyles = isOpen
    ? "bg-white rounded-t-lg shadow-lg transform translate-y-0"
    : "transform translate-y-full";

  return (
    <div className={modalStyles}>
      <div
        className={`absolute p-6 sm:p-8 lg:p-10 w-6/12 max-w-md mx-auto rounded-lg transition-all duration-300 left-1/4 top-1/4 ${contentStyles}`}
      >
        <p className="mx-auto mb-4 text-xs font-bold text-center">
          이미 선택된 좌석입니다.
        </p>
        <div className="flex">
          <button
            className="max-w-sm px-8 py-1 mx-auto text-black bg-gray-300 rounded-lg"
            onClick={onClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlreadyModal;
