import axios from "axios";
import { format } from "date-fns";

//const baseUrl = "https://5nyly4gqb3.execute-api.eu-west-2.amazonaws.com/api/v1";
const baseUrl = "https://localhost:44341/api/v1";

// const startDate = "2020/04/12";
// const endDate = "2021/03/20";

async function getOperatingBalances(startDate, endDate) {
  const config = {
    // "x-api-key": "Jne1LB5BWE3Lnlh4EHLM7xGANmM8jvq7QBxACiX1",
    params: {
      startDate: format(startDate, "yyyy/MM/dd"),
      endDate: format(endDate, "yyyy/MM/dd"),
    },
  };
  var result = await axios
    .get(`${baseUrl}/OperatingBalance/`, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });

  return result;
}

export { getOperatingBalances };
