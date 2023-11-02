// useScrollY.js
const useScrollY = () => {
    return (event, element, currentPage, setCurrentPage) => {
      const totalPages = (element.current.clientHeight / window.innerHeight) - 1;
      const userScrolledUp = event.deltaY < 0 ? true : false;
      const userScrolledDown = event.deltaY > 0 ? true : false;
  
      if (userScrolledUp && currentPage !== 0) {
        setCurrentPage(currentPage - 1);
        return (currentPage - 1) * 100;
      } else if (userScrolledDown && currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        return (currentPage + 1) * 100;
      }
    };
  };
  
  export default useScrollY;
  