const createResumable = () => {
  return fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable"
  )
    .then((res) => {
      return { headers: res.headers, json: res.json };
    })
    .then(
      (result) => {
        if (result.headers.location) {
          return result.headers.location;
        }
        throw new Error("No location returned");
      },
      (error) => {
        alert(error);
        return null;
      }
    );
};

export { createResumable };
