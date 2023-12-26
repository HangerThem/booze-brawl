"use client";

import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import prompts from "@/data/data.json";
import ShotGlassIcon from "@/icons/shotGlassIcon";

interface CardProps {
  termination: string;
}

interface CardDeckProps {
  height: number;
}

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  font-size: 15px;
  background-color: ${(props) => {
    return props.termination === "true" ? "#DD0000" : "#000000";
  }};
  box-shadow: ${(props) => {
    return props.termination === "true" ? "0px 0px 50px 4px #AA0000" : "none";
  }};
  border-radius: 8px;
  padding: 16px;
  color: white;

  transition: transform 0.5s;
  transform-style: preserve-3d;

  &:hover {
    cursor: pointer;
    transform: scale(1.1) rotateY(10deg) rotateX(10deg);
  }

  h2 {
    margin: 0;
  }

  p {
    display: ${(props) => {
      return props.termination === "true" ? "none" : "flex";
    }};
    align-self: flex-end;
    margin: 0;
    font-size: 20px;
    font-weight: bold;

    svg {
      margin-right: 8px;

      path {
        fill: white;
      }
    }
  }
`;

export default function GamePage() {
  const [data, setData] = useState<any>(prompts);
  const [prompt, setPrompt] = useState<any>(null);

  const drawPrompt = () => {
    const random = Math.floor(Math.random() * data.length);
    const prompt = data[random];
    setData(data.filter((item: any) => item !== prompt));
    return prompt;
  };

  useEffect(() => {
    setPrompt(drawPrompt());

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        setPrompt(drawPrompt());
      }
    });

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, []);

  const wasTilted = useRef(false);

  const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
    const el = document.querySelector<HTMLDivElement>("div[termination]");
    if (el) {
      if (!e.beta || !e.gamma) return;
      const rotateY = Math.min(Math.max(e.gamma || 0, -10), 10);
      const rotateX = Math.min(Math.max(e.beta || 0, -10), 10);
      el.style.transform = `perspective(1500px) 
                            rotateX(${rotateX}deg) 
                            rotateY(${rotateY}deg) 
                            scale3d(1, 1, 1)`;
      if (e.beta > 65) {
        wasTilted.current = true;
      }

      if (wasTilted.current && e.beta < 50) {
        setPrompt(drawPrompt());
        wasTilted.current = false;
      }
    }
  };

  const reset = () => {
    setData(prompts);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = document.querySelector<HTMLDivElement>("div[termination]");
    if (el) {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      const rotateY = Math.min(Math.max(x / 10, -10), 10);
      const rotateX = Math.min(Math.max(y / -10, -10), 10);
      el.style.transform = `perspective(1500px) 
                            rotateX(${rotateX}deg) 
                            rotateY(${rotateY}deg) 
                            scale3d(1, 1, 1)`;
    }
  };

  const generateShotGlassIcons = (shots: number) => {
    const shotGlassIcons = [];
    for (let i = 0; i < shots; i++) {
      shotGlassIcons.push(<ShotGlassIcon key={i} />);
    }
    return <p>{shotGlassIcons}</p>;
  };

  useEffect(() => {
    if (data.length === 0) {
      reset();
    }
  }, [data]);

  return (
    <div onMouseMove={(e) => handleMouseMove(e)}>
      {prompt && (
        <Card
          termination={prompt.termination ? "true" : "false"}
          onClick={() => setPrompt(drawPrompt())}
        >
          <h2>{prompt.question}</h2>
          {generateShotGlassIcons(prompt.shots)}
        </Card>
      )}
    </div>
  );
}
