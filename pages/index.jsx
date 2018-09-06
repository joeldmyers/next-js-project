import React from 'react';
import Link from 'next/link';

const Index = () => (
  <section>
    <h1>Hello world from Next.js</h1>
    <Link href="/about">
      <a>About This Project</a>
    </Link>
  </section>
);

export default Index;
