import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  //here is item detail page is loaed:  
  //1. First of all index.js page is loaded => MeetupList.js => MeetupItem.js
  //2. with the help of a router we are redirected to the page [meetupid] => index.js => MeetupDetail.js 
  //in [meetupid]/index.js we pass the dummy data to MeetupDetail.js component 
  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
