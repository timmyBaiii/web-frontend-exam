import React, { useEffect } from "react";

const App = () => {
    useEffect(() => {
        console.log(process.env);
    }, []);

    return (
        <div className='main'>Hello World</div>
    );
};

export default App;
