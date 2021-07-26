import React from 'react';

import Button from '../Layout/Button';

const Home = (props) => {

    const linkList = props.linkList.map(item =>
        <Button key={item.path} to={item.path}>{item.link}</Button>
    )

    return (
        <div>
            <div className="container">
                <h1>Home</h1>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {linkList}
                </div>
            </div>
        </div>
    );
}

export default Home;
