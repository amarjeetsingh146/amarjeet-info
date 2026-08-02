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
    <main className="page-content">
      <BookshelfCarousel books={sortedBooks} infinite={true} />
    </main>
  );
}
