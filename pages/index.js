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
    }
  }; 
}

export default HomePage;
