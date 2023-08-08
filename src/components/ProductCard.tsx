/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Book1 from "../assets/book1.jpg";
import { IBooks } from "../interface/IBooks";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export default function ProductCard({ book }: { book: IBooks }) {
  const handleAddProduct = (product: any) => {
    console.log(product);
    toast({
      description: "Product Added",
    });
  };

  return (
    <div className="2xl:px-12 lg:px-8 mb-8">
      <div className="rounded-2xl h-[520px] w-[250px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${book._id}`} className="w-full">
          <img src={Book1} alt="product" />
          <h1 className="text-xl font-semibold mt-4">{book?.title}</h1>
        </Link>
        <p>Author: {book?.author}</p>
        <p>Genre: {book?.genre}</p>
        <p>Published: {book?.publicationDate}</p>
        <p className="text-sm">Availability: {"In stock"}</p>
        <p className="text-sm">Price: {2000}</p>
        <Button
          className="mt-4"
          variant="default"
          onClick={() => handleAddProduct(book)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
