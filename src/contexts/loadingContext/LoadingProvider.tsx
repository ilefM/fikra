import { ReactNode, useState } from "react";
import { LoadingContext } from "./LoadingContext";

function LoadingProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const value = {
    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export default LoadingProvider;
