import { SkillsProps } from "./skills.types";
import { useState, useEffect } from "react";
export const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button type="button">Start learning</button>
      ) : (
        <button type="button" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </>
  );
};
