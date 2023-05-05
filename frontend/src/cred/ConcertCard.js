import { useState, useRef, useEffect } from "react";

import "./ConcertCard.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Card = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const cardRef = useRef(null);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
  }, []);

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - cardRef.current.offsetLeft - width / 2);
    setMouseY(e.pageY - cardRef.current.offsetTop - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000)
    );
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${props.dataImage})`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div
          className="card-bg"
          style={{ ...cardBgTransform, ...cardBgImage }}
        ></div>
        <div className="card-info">
          {props.header}
          {props.content}
        </div>
      </div>
    </div>
  );
};

const ConcertCard = () => {
  return (
    <div className="scroll">
      <Card
        dataImage="https://plus.unsplash.com/premium_photo-1680764499879-8c2c6a72b31e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        header={<h1>Lakes</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
      <Card
        dataImage="https://images.unsplash.com/photo-1672580663768-e15a512a4ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80"
        header={<h1>Canyons</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
      <Card
        dataImage="https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
        header={<h1>Beaches</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
      <Card
        dataImage="https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        header={<h1>Trees</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
      <Card
        dataImage="https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        header={<h1>Lakes</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
      <Card
        dataImage="https://plus.unsplash.com/premium_photo-1681503973024-375f6e49b9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        header={<h1>Lakes</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
      <Card
        dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
        header={<h1>Lakes</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />

      <Card
        dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
        header={<h1>Lakes</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
    </div>
  );
};

export default ConcertCard;
