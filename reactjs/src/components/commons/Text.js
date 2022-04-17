import React, { useEffect,useState} from 'react';

const Text = (props) => {
    // const [name, setName] = useState("Thao");
    // const [age, setAge] = useState(27);

    // useEffect(() => {
    //     // console.log("so lan");
    //     setName("Everybody");
    //     setAge("00");
    // })
       
    return (
        <div>
            <h1>{props.text}</h1>
        </div>    
    );
};

export default Text;