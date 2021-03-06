import React, { useState } from "react";
import Contacts from "/src/contacts.json";
import styled from "styled-components";

const Tablestyle = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
  th {
    word-spacing: 100vw;
    width: 5vw;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const Celebrity = ({ picture, name, popularity, index, deleteFunction }) => {
  return (
    <tr>
      <th>
        <img src={picture} alt={name} />
      </th>
      <th>{name}</th>
      <th>{popularity.toFixed(2)}</th>
      <button onClick={() => deleteFunction(index)}>Delete</button>
    </tr>
  );
};

export const Celebrities = () => {
  const [contactsList, setContacts] = useState(Contacts.slice(0, 5));

  const randomButton = () =>
    Contacts[Math.floor(Math.random() * Contacts.length)];

  const addRandom = () => {
    const copyContacts = [...contactsList];
    const newContacts = randomButton();

    while (contactsList.includes(newContacts)) {
      newContacts = randomButton();
    }
    copyContacts.push(newContacts);
    setContacts(copyContacts);
  };

  const Sortername = () => {
    const sortedList = [...contactsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedList);
  };

  const Sorterpopularity = () => {
    const newList = [
      ...contactsList.sort((a, b) => b.popularity - a.popularity)
    ];

    setContacts(newList);
  };

  const Delete = index => {
    const newList = [...contactsList];
    newList.splice(index, 1);
    setContacts(newList);
  };

  return (
    <div>
      <div>
        <Button onClick={addRandom}>Add Random Contact</Button>
        <Button onClick={Sortername}>Sort by name</Button>
        <Button onClick={Sorterpopularity}>Sort by popularity</Button>
      </div>

      <Tablestyle>
        <table>
          <tbody>
            <tr>
              <th>
                <h3>Picture</h3>
              </th>
              <th>
                <h3>Name</h3>
              </th>
              <th>
                <h3>Popularity</h3>
              </th>
              <th>
                <h3>Action</h3>
              </th>
            </tr>
            {contactsList.map((e, i) => (
              <Celebrity
                picture={e.pictureUrl}
                name={e.name}
                popularity={e.popularity}
                key={i}
                deleteFunction={Delete}
              />
            ))}
          </tbody>
        </table>
      </Tablestyle>
    </div>
  );
};
