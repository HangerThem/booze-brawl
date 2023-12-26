"use client";

import { useRouter } from "next/navigation";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111;
  padding: 20px;
  border-radius: 5px;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(0);
  }
  10% {
    transform: translateY(-25px) rotate(-2deg);
  }
  40% {
    transform: translateY(-10px) rotate(-1deg);
  }
  60% {
    transform: translateY(-5px) rotate(1deg);
  }
  90% {
    transform: translateY(-2px) rotate(2deg);
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 3rem;
  animation: ${bounce} 2s infinite;
  transition: color 0.5s;

  &:hover {
    color: #444;
  }

  @media (min-width: 600px) {
    font-size: 5rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: #aaa;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.25s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function HomePage() {
  const router = useRouter();

  return (
    <Container>
      <Title>BoozeBrawl</Title>
      <ButtonsContainer>
        <Button onClick={() => router.push("/game")}>Play</Button>
        <Button onClick={() => router.push("/rules")}>Rules</Button>
      </ButtonsContainer>
    </Container>
  );
}
