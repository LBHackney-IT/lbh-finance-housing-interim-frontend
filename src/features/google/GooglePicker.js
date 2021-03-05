import { createResumable } from "./api/GoogleDriveApi";
import { useEffect } from "react";

const GooglePicker = () => {
  useEffect(() => {
    async function getResumable() {
      debugger;
      const resumable = await createResumable();
      debugger;
      return resumable;
    }
    const resumableItem = getResumable();
  }, []);

  return <div></div>;
};

export default GooglePicker;
