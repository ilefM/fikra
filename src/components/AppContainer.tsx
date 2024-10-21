import useLoadingModal from "../hooks/loadingModal/useLoadingModal";
import Router from "../router/Router";

function AppContainer() {
  const { isModalOpen } = useLoadingModal();
  return (
    <div className={`${isModalOpen ?? "pointer-events-none"}`}>
      <Router />
    </div>
  );
}

export default AppContainer;
