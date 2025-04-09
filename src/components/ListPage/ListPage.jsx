import { listData } from "../../lib/dummydata";
import { Card } from "../Card/Card";
import { Filter } from "../Filter/Filter";
import "./listPage.scss";

export const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer"></div>
    </div>
  );
};
