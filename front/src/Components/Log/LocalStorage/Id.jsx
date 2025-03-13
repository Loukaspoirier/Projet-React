import React, { useState, useEffect } from 'react';

export default function Id() {
    const [id, setId] = useState(localStorage.getItem('id'));
    return (
        <div>
            <p>{id}</p>
        </div>
    );
}