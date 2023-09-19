import { Loader } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { IBooks } from "../interface/IBooks";
import { useGetBooksQuery } from "../redux/api/apiSlice";

const AllBooks = () => {
  const { data: books, isLoading } = useGetBooksQuery({
    refetchOnMountOrArgChange: true,
  });
  const loaderMap = [1, 2, 3, 4];

  return (
    <div className="min-h-screen max-w-[1280px] mx-auto pt-24">
      <div className="flex flex-wrap gap-4">
        {isLoading &&
          loaderMap.map(() => (
            <div className="flex gap-8">
              <Loader />
            </div>
          ))}
        {books?.data?.map((book: IBooks) => (
          <div className="flex flex-wrap gap-4">
            <ProductCard key={book._id} book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
