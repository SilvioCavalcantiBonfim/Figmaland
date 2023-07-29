export const ManageClass = (_element, _class) => {
  let __class = [];
  if (typeof _class === 'string' && _class.length > 0) {
    __class = _class.split(' ');
  }else if (typeof _class === 'object') {
    __class = Object.values(_class);
  }

  return {
    add() {
      __class.forEach((e) => _element.classList.add(e));
    },
    remove() {
      __class.forEach((e) => _element.classList.remove(e));
    },
  };
};
