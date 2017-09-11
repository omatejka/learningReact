export const checkStatus = res => {
  if (res.status < 200 || res.status >= 400)
    throw new Error(`Bad status ${res.status}`);
  return res;
};

export const filter = (term, items) => {
  return items.filter(item => item.login.indexOf(term) > -1);
};

export default {
  checkStatus,
  filter
}
