import { useContext } from "react";
import { LoadingContext } from "../../contexts/loadingContext/LoadingContext";

function useLoadingModal() {
  const loadingContext = useContext(LoadingContext);

  if (!loadingContext) {
    throw Error("the auth context is empty");
  }

  return loadingContext;
}

export default useLoadingModal;
