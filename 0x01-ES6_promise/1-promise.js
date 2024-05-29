export default function getFullResponseFromAPI(success) {
  return new promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
	body: "Success",
      });
    } else {
	reject(new error("The fake API is not working currently"));
    }
  });
}
