//import the hook to get url parameter 
import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  //here we use react router hook to get url parameter
  const newsId = router.query.newsId;
  console.log(newsId);

  // send a request to the backend API
  // to fetch the news item with newsId

  return <h1>The Detail Page</h1>
}

export default DetailPage;