import { createResumable } from "./api/GoogleDriveApi";
import { useEffect } from "react";

const GooglePicker = () => {
  useEffect(() => {
    async function getResumable() {
      const resumable = await createResumable();
      return resumable;
    }
    const resumableItem = getResumable();
  }, []);

  return <div></div>;
};

export default GooglePicker;
