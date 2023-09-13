import { useEffect, useState } from "react";
import CustomBaseImage from "../CustomBaseImage/CustomBaseImage";

const selectedPageStyle = {
  color: "var(--graygray-60)",
};

export const Pagination = ({
  totalItems,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const maxPagesAtTime = 3;

  const setInitialLastPageNumber = () => {
    return totalPages < maxPagesAtTime ? totalPages : maxPagesAtTime;
  };
  const [firstShowedPageNumber, setFirstShowedPageNumber] = useState(1);
  const [lastShowedPageNumber, setLastShowedPageNumber] = useState(
    setInitialLastPageNumber(),
  );

  useEffect(() => {
    setLastShowedPageNumber(setInitialLastPageNumber());
    setFirstShowedPageNumber(1);
  }, [totalItems]);

  const resolvePageNumber = (pageNumber) => {
    if (pageNumber < 10) {
      return `0${pageNumber}`;
    }
    return pageNumber;
  };

  const resolveGoToNextPage = () => {
    if (currentPage < lastShowedPageNumber) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage < totalPages) {
      setFirstShowedPageNumber(firstShowedPageNumber + 1);
      setLastShowedPageNumber(lastShowedPageNumber + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const resolveGoToPreviousPage = () => {
    if (currentPage > firstShowedPageNumber) {
      setCurrentPage(currentPage - 1);
    } else if (currentPage > 1) {
      setFirstShowedPageNumber(firstShowedPageNumber - 1);
      setLastShowedPageNumber(lastShowedPageNumber - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const resolveGoToFirstPage = () => {
    setFirstShowedPageNumber(1);
    setLastShowedPageNumber(1 + maxPagesAtTime - 1);
    setCurrentPage(1);
  };

  const renderGoToFirstPageButton = () => {
    if (firstShowedPageNumber > 1) {
      return (
        <button className="px-2 mx-2" onClick={resolveGoToFirstPage}>
          <p className="p3 text-brand-color-blue">...</p>
        </button>
      );
    }
  };

  const resolveGoToLastPage = () => {
    setFirstShowedPageNumber(totalPages - maxPagesAtTime + 1);
    setLastShowedPageNumber(totalPages);
    setCurrentPage(totalPages);
  };

  const renderGoToLastPageButton = () => {
    if (lastShowedPageNumber < totalPages) {
      return (
        <button className="px-2 mx-2" onClick={resolveGoToLastPage}>
          <p className="p3 text-brand-color-blue">...</p>
        </button>
      );
    }
  };

  const renderPageNumberButton = ({ pageNumber }) => {
    return (
      <button
        className="px-2 mx-2"
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
      >
        <p
          className="p3 text-brand-color-blue"
          style={pageNumber === currentPage ? selectedPageStyle : {}}
        >
          {pageNumber}
        </p>
      </button>
    );
  };

  const renderPageButtons = () => {
    let pageNumbers = [];
    for (let i = firstShowedPageNumber; i <= lastShowedPageNumber; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((pageNumber) => {
      return renderPageNumberButton({ pageNumber });
    });
  };

  const resolveCurrentPageText = () => {
    let currentPageText = `${totalItems} resultado`;
    if (totalItems > 1) {
      currentPageText += "s";
    }
    return currentPageText;
  };

  return (
    <div className="flex justify-end my-6">
      <div className="flex items-center mr-6">
        <p className="p4 text-graygray-50">{resolveCurrentPageText()}</p>
      </div>
      <div className="flex items-center mr-6">
        <div className="mr-2">
          <p className="p4 text-graygray-50">Página:</p>
        </div>
        <button className="flex border border-graygray-40 rounded-md justify-between items-center pr-1 pl-2 py-1">
          <p className="p4 text-graygray-70 mr-4">
            {resolvePageNumber(currentPage)}
          </p>
          <CustomBaseImage
            src={"/static/icons/arrow-down.svg"}
            alt={"Ícone seta expandir"}
            width={20}
            height={20}
          />
        </button>
      </div>
      <button className="px-2" onClick={resolveGoToPreviousPage}>
        <p
          className="p3 text-brand-color-blue"
          style={currentPage === 1 ? selectedPageStyle : {}}
        >
          {"<"}
        </p>
      </button>
      {renderGoToFirstPageButton()}
      {renderPageButtons()}
      {renderGoToLastPageButton()}
      <button className="px-2" onClick={resolveGoToNextPage}>
        <p
          className="p3 text-brand-color-blue"
          style={currentPage === totalPages ? selectedPageStyle : {}}
        >
          {">"}
        </p>
      </button>
    </div>
  );
};
