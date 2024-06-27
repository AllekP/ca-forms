import React, { useState, useEffect } from 'react';

export const SelectForms = ({province, client}) => {
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //   console.log('Component mounted');
    //   return () => {
    //     console.log('Component unmounted');
    //   };
    // }, []);

    return (
        <div>
            <p>Selected Matter Province: <strong>{province}</strong></p>
            <p>Client Name: <strong>{client}</strong></p>
            <p>Please select the forms you want to create from following folders</p>
        </div>
    );
};