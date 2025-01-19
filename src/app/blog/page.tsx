import Link from 'next/link';
import TextReveal from '@/components/motion/text-reveal';
import Line from '@/components/motion/line';
import React from 'react';

import { createMetadata } from '@/lib/metadata';
import PostCard from '@/app/blog/_components/post-card';

import { metadata as meta } from '@/app/config';
import type { WithContext, Blog } from 'schema-dts';
import { Footer } from '@/components/sections';

const title = 'Blog';
const description = 'My thoughts on technology.';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/blog',
    title,
    description
  },
  twitter: {
    title,
    description
  }
});

export default function BlogPage(): React.ReactElement {
  return (
    <main className="my-14 flex-1">
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Blog
          </TextReveal>
          <Line className={'mt-16'} />
        </div>
      </section>
    </main>
  );
}
