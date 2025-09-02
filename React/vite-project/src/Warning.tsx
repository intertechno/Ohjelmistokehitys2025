import "./Warning.css";

function Warning({message}: {message: string}) {
  return <h2 className="warning">Varoitus! {message}</h2>;
}

export default Warning;
