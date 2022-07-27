import React from 'react';

const Section = (e) => {
    return (
        <div>
            <tr>
                <th>Name
                    {e.users.map((item) => (
                        <p>{item.name}</p>
                    ))}
                </th>
                <th>Lastname
                    {e.users.map((item) => (
                        <p>{item.lastname}</p>
                    ))}
                </th>
                <th>Age
                    {e.users.map((item) => (
                        <p>{item.age}</p>
                    ))}
                </th>
                <th>Id
                    {e.users.map((item) => (
                        <p>{item.id}</p>
                    ))}
                </th>
            </tr>
        </div>
    );
};

export default Section;