export default function function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' })
    .catch(() => new error())
    .finally(() => console.log('Got a response from the API'));
}
