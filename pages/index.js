import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}


//getServerSideProps - the difference of this function with getStaticProps is that it will not run during the build process 
//but it will away run after deployment on the server 
//getServerSideProps - we get, prepare data for our components 

// export async function getServerSideProps(context) {

//with the context we get access to the request and response object 
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }


//IF WE DON'T HAVE DATA THAT CHAGES ALL THE TIME AND WE DON'T NEED ACCESS TO TEH REQUEST OBJECT (EX. FOR AUTHENTICATION) THEN  getStaticProps IS BETTER
//getStaticProps is faster by fatching the data for every incoming request because it can be cached and reused instead of regenerated all the time 

//IF OUR DATA CHANGES ALL THE TIME THEN WE NEED TO USE getServerSideProps


//getStaticProps - is reserved word
//getStaticProps calls static props such as DUMMY_MEETUPS before it calls component functions 
//the job of getStaticProps to prepare props for componet functions
//the purpose of this static props is that it waits when the data is loaded and then returns this data to the component 
//DUMMY_MEETUPS will be used as props for HomePage component
//this is how we can move data fetching from the client side to the server side during the build process
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    //revalidate - is the parameter that specifies how often the page should be updated on the server after deployment
    revalidate: 1
  }; 
}

export default HomePage;
