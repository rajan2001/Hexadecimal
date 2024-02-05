import { useState } from "react";
import { useParams } from "react-router";

function Page() {
    const {id} = useParams()
    const [data,setdata] = useState({})

    fetch(`http://localhost:5000/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
      });
  return (
    <div>
      {data.title}
    </div>
  );
}

export default Page;
