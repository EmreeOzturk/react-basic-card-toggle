import React from "react";
import Card from "./Card";
import Collapse from "./Collapse";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse id="collapseExample1">
              <Card
                title="Card title1"
                image="https://picsum.photos/id/11/200/100"
                text="Card with is content is a little bit longer."
                lastUpdated="1 mins ago"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse id="collapseExample2">
              <Card
                title="Card title2"
                image="https://picsum.photos/id/121/200/100"
                text="asdasd with is content is a little bit longer."
                lastUpdated="2 mins ago"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse id="collapseExample3">
              <Card
                title="Card title3"
                image="https://picsum.photos/id/111/200/100"
                text="qweqwe with is content is a little bit longer."
                lastUpdated="3 mins ago"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
