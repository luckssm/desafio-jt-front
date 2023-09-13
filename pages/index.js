import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getTicketsByCityName } from "../services/api/apiCalls";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import TicketCard from "../components/TicketCard";
import { Pagination } from "../components/Pagination";
import { AllFiltersContainer } from "../components/Filters/AllFiltersContainer";

export async function getStaticProps() {
  const allTicketsData = await getTicketsByCityName({ currentPage: 1 })
    .then((res) => {
      return res.data?.data?.getTicketsByCityNamePaginated;
    })
    .catch((err) => {
      console.error("Error when static loading data: ", err);
      return null;
    });

  return {
    props: {
      allTicketsData,
    },
  };
}

export default function Home({ allTicketsData }) {
  const router = useRouter();

  const [completeTickets, setCompleteTickets] = useState(
    allTicketsData?.tickets,
  );
  const [shouldSearchTicketByName, setShouldSearchTicketByName] =
    useState(false);
  const [searchCityName, setSearchCityName] = useState("");

  const [totalItems, setTotalItems] = useState(allTicketsData?.totalItems);
  const [totalPages, setTotalPages] = useState(allTicketsData?.totalPages);
  const [currentPage, setCurrentPage] = useState(1);

  const getTickets = async ({ cityName, page }) => {
    getTicketsByCityName({ cityName: cityName, currentPage: page })
      .then((res) => {
        if (res.data) {
          const responsePaginated =
            res.data?.data?.getTicketsByCityNamePaginated;
          setCompleteTickets(responsePaginated?.tickets);
          setTotalItems(responsePaginated?.totalItems);
          setTotalPages(responsePaginated?.totalPages);
        }
      })
      .catch((err) => console.error("Error getting tickets: ", err));
  };

  useEffect(() => {
    if (shouldSearchTicketByName) {
      getTickets({ cityName: searchCityName, page: 1 });
      setCurrentPage(1);
      setShouldSearchTicketByName(false);
    }
  }, [shouldSearchTicketByName, searchCityName]);

  useEffect(() => {
    if (currentPage <= totalPages) {
      getTickets({ cityName: searchCityName, page: currentPage });
    }
  }, [currentPage]);

  const goToTicketPage = ({ url }) => {
    router.push(url, { scroll: false });
  };

  const searchTicketByCityFunction = (input) => {
    setSearchCityName(input);
    setShouldSearchTicketByName(true);
  };

  const renderTicketCard = (completeTicket) => {
    return (
      <TicketCard
        attractionTitle={completeTicket?.name}
        attractionLocation={completeTicket?.city.name}
        attractionImage={"/static/images/attraction-1.png"}
        attractionImageAlt={"lorem ipsum"}
        attractionPriceBefore={"2.351,28"}
        attractionPriceNow={"1.391,28"}
        onButtonClick={() =>
          goToTicketPage({ url: `/detalhe-ingresso/${completeTicket?.id}` })
        }
      />
    );
  };

  const renderTicketCards = () => {
    return (
      <>
        {completeTickets?.length > 0 ? (
          <>
            {completeTickets.map((completeTicket, index) => {
              return (
                <div className="mb-3" key={index}>
                  {renderTicketCard(completeTicket)}
                </div>
              );
            })}
            <Pagination
              totalItems={totalItems}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <>
            <p>Não foram encontrados ingressos!</p>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="px-[60px] py-9">
        <SearchBar searchCall={searchTicketByCityFunction} />
      </div>
      <div className="flex px-[60px] py-6 bg-graygray-05 min-h-screen">
        <div className="mr-6 p-6 bg-white shadow-shadow-s w-full max-w-[368px]">
          <AllFiltersContainer />
        </div>
        <div className="w-full">{renderTicketCards()}</div>
      </div>
    </>
  );
}
