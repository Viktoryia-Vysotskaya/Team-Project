/* selectors */
export const getAll = ({ comments }) => comments;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
