import React, { useEffect , useState} from "react";
import * as firebase from "firebase";
import firebaseConfig from "../index.js";

function Posts(props) {
    const [Note, setNote] = useState([]);
    const [Lists, setLists] = useState([]);


  useEffect(() => {
    // Update the document title using the browser API
    listenforChange();
  });

  const listenforChange = () => {
    firebase
      .database()
      .ref(`Requests`)
      .on("child_added", snapshot => {
        let PRequest = {
          id: snapshot.key,
          title: snapshot.val().PrayerRequest
        };
        let List = Lists;
        List.push(PRequest);

        setLists(List);
        console.log(Lists[0].title)
      });

    firebase
      .database()
      .ref(`Requests`)
      .on("child_removed", snapshot => {
        let List = List;
        List = List.filter(Lists => Lists.id !== snapshot.key);
        setLists(List);
      });
  };
  return (
    <div>
      {Lists.map(Request => (
        <div className="note" key={Request.id}>
          <h1>{Request.title}</h1>
        </div>
      ))
      }
    </div>
  );
}

export default Posts;
