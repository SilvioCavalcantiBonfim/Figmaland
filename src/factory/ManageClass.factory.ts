export const ManageClass = (element: HTMLElement, className: string[] | string) => {
  let classNames: string[] = [];
  if (typeof className === 'string') {
    classNames = className.split(' ');
  }else {
    classNames = className;
  }
 
  return {
    add() {
      classNames.forEach((e) => element.classList.add(e));
    },
    remove() {
      classNames.forEach((e) => element.classList.remove(e));
    },
  };
};
