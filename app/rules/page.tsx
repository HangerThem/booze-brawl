"use client";

import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1000px;
`;

const Title = styled.h1`
  color: #aaa;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: #999;
  margin-top: 20px;

  a {
    color: #999;
    text-decoration: underline;
  }
`;

const Text = styled.p`
  color: #777;
  line-height: 1.6;
  margin-left: 5px;
`;

const List = styled.ul`
  color: #777;
  line-height: 1.6;
  margin-left: 25px;
`;

const ListNumber = styled.ol`
  color: #777;
  line-height: 1.6;
  margin-left: 25px;
`;

export default function RulesPage() {
  return (
    <Container>
      <Title>BoozeBrawl Rules</Title>

      <SubTitle>Objective:</SubTitle>
      <Text>
        Outwit, outplay, and outdrink your friends to be the last one standing.
        If you can&apos;t handle the heat, better stay out of the BoozeBrawl
        kitchen!
      </Text>

      <SubTitle>Setup:</SubTitle>
      <ListNumber>
        <li>Assemble some friends - if you have any.</li>
        <li>Pour your favorite drinks - you&apos;re gonna need &apos;em.</li>
        <li>
          And finally let&apos;s get this party started! Draw a card and read it
          out loud.
        </li>
      </ListNumber>

      <SubTitle>Gameplay:</SubTitle>
      <ListNumber>
        <li>
          Click on the card to reveal the challenge. If you&apos;re on mobile,
          you can tilt your phone to reveal the challenge.
        </li>
        <li>
          Choose between owning the challenge or gulping down the liquid courage
          indicated in the bottom right corner.
        </li>
        <li>
          Watch out for red cards - they&apos;re termination cards. Fail the
          challenge, and you&apos;re out quicker than last night&apos;s regrets.
        </li>
      </ListNumber>

      <SubTitle>Special Situations:</SubTitle>
      <List>
        <li>
          <strong>Skipping Turns:</strong> If a card doesn&apos;t vibe with your
          situation (like relationship drama when you&apos;re riding solo), toss
          it aside and draw a new one.
        </li>
        <li>
          <strong>Leaving the Game:</strong> Bail whenever you want, but no
          skipping turns. You&apos;re no quitter, are you?
        </li>
      </List>

      <SubTitle>Termination:</SubTitle>
      <Text>
        Get the boot, and you&apos;re on the sidelines. It&apos;s okay; not
        everyone&apos;s cut out for the BoozeBrawl throne.
      </Text>

      <SubTitle>Winning:</SubTitle>
      <Text>
        Outdrink, outlast, and outwit. The last one standing is the undisputed
        BoozeBrawl sovereign!
      </Text>

      <Text>
        Ready to own the night, or are you nursing your drink in the corner?
        BoozeBrawl awaits - let the sass-fueled games begin!
      </Text>

      <SubTitle>House Rules:</SubTitle>
      <Text>
        BoozeBrawl is a game of chance, but you can make your own rules. Here
        are a few ideas:
      </Text>
      <List>
        <li>
          <strong>Team Play:</strong> Form teams and play as a unit. If one
          teammate fails, the whole team drinks.
        </li>
        <li>
          <strong>Random Pick:</strong> If the card says to pick someone, it
          will be randomly selected, the way to do this is up to you. To add a
          twist, the chosen person must take a sip for being selected.
        </li>
        <li>
          <strong>Themed Round:</strong> Declare a themed round (e.g.,
          pirate-themed, space-themed). Anyone who breaks character takes a
          penalty shot.
        </li>
        <li>
          <strong>Left Hand Rule:</strong> Perform challenges using only your
          left hand. Right-handed penalties apply.
        </li>
        <li>
          <strong>Round Robin:</strong> Players take turns drawing cards. When
          it's your turn, you're the focus. Fail, and everyone drinks.
        </li>
      </List>

      <SubTitle>
        Ready to <Link href="/game">play</Link>?
      </SubTitle>
    </Container>
  );
}
