export default function signUpUser(firstName, lastName) {
  return new promise((resolve) => {
    resolve({ firstName, lastName });
  });
}
