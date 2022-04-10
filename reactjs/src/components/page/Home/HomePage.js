import React, { useEffect,useState} from 'react';
import Button from './../../commons/Button';
import Text from './../../commons/Text';
import Input from './../../commons/Input';
import Social from './../../Social';
import  './../../../assets/css/style.css';
const HomePage = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [loading, setLoading] = useState(false)

    const removeData = () =>{

        setLoading(true)
        setTimeout(() => {    
            setLoading(false);
           
        },5000)
        if(name.length >0 & age.length >0){
            setName("")
            setAge('')
        }
        else{
            alert("vui long nhap thong tin!")
        }
        
    }
    
    return (
        <div className="wrapper">   
        {loading ? (
            <h1>loading...</h1>
        ):(
         <div>
            <input type="text" value={name} onChange ={(e) => setName(e.target.value)} placeholder = "nhap ten" />
            <input type = "number" value={age} onChange ={(e) => setAge(e.target.value)} placeholder = "nhap tuoi"/>

            <h1>Hi {name}</h1>
            <h2>Age: {age}</h2> 
        </div>   
        )}
         <button onClick={() => removeData()}>Remove</button>   
        </div>
    );
};

export default HomePage;