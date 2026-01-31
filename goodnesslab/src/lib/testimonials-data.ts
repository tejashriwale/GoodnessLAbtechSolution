export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "We've been using Infinite Engineering Solutions for all our material testing needs, and we couldn't be happier. The team is knowledgeable, and their testing methods are top-notch. We can always count on them for precise, reliable results. They've helped us streamline our processes and ensure the quality of our products every step of the way.",
    author: "Rushikesh Sinare",
    position: "Director",
    company: "Infinite Engineering Solutions",
    rating: 5
  },
  {
    id: '2',
    quote: "Not only does Viraj Industries provide excellent testing services, but their customer support is second to none. Every time we have a question or need assistance, their team is quick to respond and always goes above and beyond to ensure we are satisfied.",
    author: "Mr. Hase",
    position: "Director",
    company: "Viraj Industries",
    rating: 5
  },
  {
    id: '3',
    quote: "Goodness Lab offers a fast turnaround without compromising the quality of their work. The results we receive are always accurate, and their reports are clear and comprehensive. They've been a critical partner in ensuring that our projects are completed on time and to the highest standard.",
    author: "Mr. Kadam",
    position: "",
    company: "Sairaj Engineering Works",
    rating: 5
  }
];
