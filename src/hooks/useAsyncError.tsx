import { useCallback, useState } from "react";

const useAsyncError = () => {
  const [, setError] = useState();

  return useCallback(
    (e: Error) => {
      setError(() => {
        console.error(e);
        throw e;
      });
    },
    [setError]
  );
};

export default useAsyncError;
