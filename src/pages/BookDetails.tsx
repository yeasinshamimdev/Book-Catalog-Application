import { useEffect } from "react";

const BookDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen max-w-[1280px] mx-auto pt-24">
      <div className="">Book Details</div>
    </div>
  );
};

export default BookDetails;
