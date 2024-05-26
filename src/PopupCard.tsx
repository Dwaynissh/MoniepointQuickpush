import React from "react";

interface PopupCardProps {
  onClose: () => void;
}

const PopupCard: React.FC<PopupCardProps> = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="w-[700px] h-[700px] bg-gray-400 inset-0 flex items-center justify-center z-50 rounded-xl"
    >
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Hi!</h2>
          <p className="text-gray-700">You're welcome.</p>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
