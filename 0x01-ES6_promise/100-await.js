import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return { photo, user };
}
