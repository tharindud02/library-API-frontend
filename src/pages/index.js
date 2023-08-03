import Image from "next/image";
import { Inter } from "next/font/google";
import BookList from "@/components/bookList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <BookList />
    </main>
  );
}
