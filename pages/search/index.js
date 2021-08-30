import { useRouter } from "next/dist/client/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { format } from "date-fns";
import { fetchData } from "../../utils/helpers";
import InfoCard from "../../components/InfoCard";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formatDate = (date) => {
    const formmatedDate = format(new Date(date), "dd MMMM yy");
    return formmatedDate;
  };
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          {searchResults?.map((item) => (
            <InfoCard
              key={item.img}
              img={item.img}
              title={item.title}
              location={item.location}
              description={item.description}
              star={item.star}
              price={item.price}
              total={item.total}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetchData("https://links.papareact.com/isz");
  return {
    props: {
      searchResults,
    },
  };
}
