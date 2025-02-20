import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisable, setAlertVisability] = useState(false);
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        ></ListGroup>
      </div>

      <div>
        {alertVisable && (
          <Alert onClose={() => setAlertVisability(false)}>
            Hello <span>World</span>
          </Alert>
        )}
        <Button color="danger" onClick={() => setAlertVisability(true)}>
          My New Button
        </Button>
      </div>
    </>
  );
}

export default App;
