import { books } from '@/data/books';
import BookshelfCarousel from '@/components/BookshelfCarousel';

export const metadata = {
  title: 'Reading',
};
export default function Reading() {
  return (
    <main className="mt-[50px] md:ml-[330px] max-w-[760px] pt-[80px] md:pt-[20px] px-[20px] font-lora">
      <BookshelfCarousel books={books} infinite={true} />
    </main>
  );
}
