import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 150px;
`;

const Homepage = () => {
  return (
    <>
      <Wrapper>
        <h2>MICHELE ANDREWS </h2>
        <div>
          <p>
            <b>Pronounciation</b>: Mi·​chele An·​drews mē-ˈkel an-dro͞oz{" "}
          </p>
          <p>
            <b>Synonyms for Michele Andrews</b>: Mishnar, Mish{" "}
          </p>
          <p>
            <b>1 a :</b> a fashion maven, <b>stylist</b>, and{" "}
            <b>visionary art</b>
            director based in the Pacific Northwest Michele Andrews is a
            <b>stylist</b>, <b>creative</b>, and <b>art director</b>. Her work
            embodies her approach to life, starting with a foundation of the
            familiar, something wearable, then exploring and expanding to
            equipoise structure and fluid sculpture. Through her work, she
            traverses facets of individuality, timelessness, spontaneity, and
            intuition. Seamlessly applying her vision to <b>editorial</b>,
            <b>design</b>, and <b>commercial</b> projects, infusing uniqueness and ingenuity wherever she goes.
          </p>
          <p>
            <b>b :</b> one who skillfully weaves the familiar into wearable art,
            pushing the boundaries to achieve a harmonious balance of structure
            and fluidity c : an artistic touch that graces editorial spreads,
            design ventures, and commercial projects with an unmistakable sense
            of ingenuity and originality
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default Homepage;
