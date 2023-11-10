import React, { useState } from "react";
import AddVideoIdList from "./AddVideoIdList";
import "../AddTodo/AddTodo.css";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function AddKanban(props) {
  const [isTodoVideos, setIsTodoVideos] = useState([]);

  const handleSetIsTodoVideos = () => {
    setIsTodoVideos(
      props.isList.map((item, index) => ({
        id: index,
        name: item.name,
        todoVideos: item.todoVideos,
      })),
    );
  };
  React.useEffect(() => {
    handleSetIsTodoVideos();
  }, [props.isList]);

  return (
    <div className="video-container">
      {isTodoVideos.map((item, index) => (
        <div key={index} className="video-container-wrap">
          <div className="video-container-category">
            <Badge bg="info" className="video-container-category-badge">
              <span className="video-container-category-font">{item.name}</span>
            </Badge>
          </div>
          <div className="video-container-calousel">
            <AddVideoIdList key={index} todoVideos={item.todoVideos} />
          </div>
        </div>
      ))}
    </div>
  );
}
