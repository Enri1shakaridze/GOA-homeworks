
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then((response) => response.json())
                .then((data) => setUser(data));
        }
    }, [userId]);

    return (
        <div>
            {user ? <h3>{user.name}</h3> : <p>მომხმარებელი არ არის არჩეული</p>}
        </div>
    );
}

export default UserProfile;