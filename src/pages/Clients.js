import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 200px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 175px;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
`;

const ListItem = styled.li`
  display: block;
  width: calc(17% - 10px);
  margin-bottom: 10px;

  @media (max-width: 800px) {
    width: calc(33.33% - 10px);
  }

  @media (max-width: 600px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;


const Clients = () => {
  const clients = ['Nike', 'Thom Browne', 'Xbox', 'Microsoft Surface', 'Columbia Sportswear', 'GQ', 'Reebok', 'Organic by John Patrick', 'Caron Callahan',  'Popular Science', 'Alvin Goldfarb',  'Wings and Horns', 'Plant Paper',  'Autre Magazine', 'MTV', 'INC Magazine', 'Self Magazine', 'Faris Jewelry', 'Barneys', 'See Kai Run', 'TomboyX', 'Olderbrother', 'Barneys', 'Totokaelo', 'Baby and Co', 'Grey Matters', 'Girlfriend Collective', 'Labucq'];

    return (
        <Wrapper>
            <h2>CLIENT LIST</h2>
            <List>
                {clients.map((client, index) => (
                    <ListItem key={index}>{client}</ListItem>
                ))}
            </List>
        </Wrapper>
    );
};

export default Clients;
