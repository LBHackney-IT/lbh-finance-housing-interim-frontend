import { useEffect } from "react";

const useScript = (url, defer) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = defer !== undefined;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, defer]);
};

export default useScript;
