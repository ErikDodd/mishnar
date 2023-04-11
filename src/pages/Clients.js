import React from 'react';

const Clients = () => {
    const clients = [
        'Organic by John Patrick',
        'Caron Callahan',
        'Thom Browne',
        'Popular Science',
        'Alvin Goldfarb',
        'Xbox',
        'Wings and Horns',
        'Nike',
        'Microsoft Surface',
        'Plant Paper',
        'Columbia Sportswear',
        'Autre Magazine',
        'MTV',
        'GQ',
        'INC Magazine',
        'Self Magazine',
        'Faris Jewelry',
        'Barneys',
        'See Kai Run',
        'TomboyX',
        'Olderbrother',
        'Barneys',
        'Totokaelo',
        'Baby and Co',
        'Grey Matters',
        'Girlfriend Collective',
        'Labucq',
        'Reebok'
    ];

    return (
        <div>
            <h2>Client List</h2>
            <ul style={{ display: "flex", flexDirection: "column" }}>
                {clients.map((client, index) => (
                    <li key={index} style={{ display: "block" }}>{client}</li>
                ))}
            </ul>
        </div>
    );
};

export default Clients;
