import { useState, useRef, useEffect } from "react";

import "./ConcertCard.scss";

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
    <div id="app" className="container">
      <Card
        dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
        header={<h1>Canyons</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
      <Card
        dataImage="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
        header={<h1>Beaches</h1>}
        content={
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        }
      />
      <Card
        dataImage="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
        header={<h1>Trees</h1>}
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
