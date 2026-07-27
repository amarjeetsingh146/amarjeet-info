import { books } from '@/data/books';
import BookshelfCarousel from '@/components/BookshelfCarousel';

export const metadata = {
  title: 'Reading',
};
const sortedBooks = [...books].sort(
  (a, b) => new Date(b.readDate) - new Date(a.readDate)
);

export default function Reading() {
  return (
    <main className="mt-[50px] md:ml-[480px] max-w-[760px] pt-[80px] md:pt-[20px] px-[20px] font-lora">
      <BookshelfCarousel books={sortedBooks} infinite={true} />
    </main>
  );
}
