import React, { useEffect,useState} from 'react';

const Text = () => {
    const [name, setName] = useState("Thao");
    const [age, setAge] = useState(27);

    useEffect(() => {
        // console.log("so lan");
        setName("Everybody");
        setAge("00");
    })
       
    return (
        <div>
            <h1>Hi {name}</h1>
            <h2> Age: {age}</h2>
        </div>    
    );
};

export default Text;