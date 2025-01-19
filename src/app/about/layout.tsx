import { Footer, Header } from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

import { createMetadata } from '@/lib/metadata';
import type { AboutPage, WithContext } from 'schema-dts';

import { metadata as meta } from '@/app/config';

const title = 'About';
const description = 'Learn more about me and how I do things';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/about',
    type: 'profile',
    title,
    description
  },
  twitter: {
    title,
    description
  }
});

export default function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
