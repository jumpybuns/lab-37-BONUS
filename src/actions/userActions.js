export const FIND_USER = 'FIND_USER';
export const findUser = (username) => ({
  type: FIND_USER,
  payload: username,
});
