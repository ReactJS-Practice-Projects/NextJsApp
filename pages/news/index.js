// our-domain.com/news
//import Link component to use it for url references
import Link from 'next/link';
import { Fragment } from 'react';

//when we use Link instead of <a></a> we don't have to go to another page and instead of it we stay on the same page 
//Link just loads the requred component. It is bettre to use Link instead of anchor tags in NextJs applications
function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NextJS Is A Great Framework !
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
