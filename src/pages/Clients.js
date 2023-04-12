import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 800px; /* add margin to the top */
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: block;
`;

const Clients = () => {
    const clients = ['Organic by John Patrick', 'Caron Callahan', 'Thom Browne', 'Popular Science', 'Alvin Goldfarb', 'Xbox', 'Wings and Horns', 'Nike', 'Microsoft Surface', 'Plant Paper', 'Columbia Sportswear', 'Autre Magazine', 'MTV', 'GQ', 'INC Magazine', 'Self Magazine', 'Faris Jewelry', 'Barneys', 'See Kai Run', 'TomboyX', 'Olderbrother', 'Barneys', 'Totokaelo', 'Baby and Co', 'Grey Matters', 'Girlfriend Collective', 'Labucq', 'Reebok'];

    return (
        <Wrapper>
            <h2>Client List</h2>
            <List>
                {clients.map((client, index) => (
                    <ListItem key={index}>{client}</ListItem>
                ))}
            </List>
        </Wrapper>
    );
};

export default Clients;
