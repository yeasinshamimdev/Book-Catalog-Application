import headerImage from "../assets/header-image.png";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { IBooks } from "../interface/IBooks";
import { useGetBooksQuery } from "../redux/api/apiSlice";

export default function Home() {
  const { data: books, isLoading } = useGetBooksQuery({
    refetchOnMountOrArgChange: true,
  });
  const loaderMap = [1, 2, 3, 4];

  return (
    <>
      <div className="2xl:px-24 lg:px-12 pt-24 bg-green-100">
        <div className="flex py-24 items-center justify-center gap-4">
          <div className="flex-1">
            <img
              src={headerImage}
              alt="Header image"
              className="h-full w-full"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl text-left font-normal ">
              A book is a garden, an orchard, a storehouse, a party, a company
              by the way, a counselor, a multitude of counselors.
            </h1>
            <button className="btn my-8 border-green-500 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400">
              Explore more
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap my-8 gap-4">
        {isLoading &&
          loaderMap.map(() => (
            <div className="flex gap-8">
              <Loader />
            </div>
          ))}
        {books?.data?.map((book: IBooks) => (
          <ProductCard key={book._id} book={book} />
        ))}
      </div>
    </>
  );
}
