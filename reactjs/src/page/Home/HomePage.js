import React, { useEffect,useState, useMemo} from 'react';
import Button from './../../components/commons/Button';
import Text from './../../components/commons/Text';
import Input from './../../components/commons/Input';
import Social from './../../components/Social';
import  './../../assets/css/style.css';
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
    // useEffect(() =>{
    //  console.log("vào lần đầu");
    // },[])
    //callapi, sate thay đổi

    // usememo
    const memoizedValue = useMemo(() => computeExpensiveValue(name, value));

    return (
        <div className="wrapper"> 
        {loading ? (
            <h1>loading...</h1>
        ):(
            <div>
        <Text text= {"Hi " +name} />
        <Text text= {"Age" + age} />
        <Input 
        LabelText="Name" 
        placeholderUserName = "Nhập vào đây" 
        handleOnChange ={(e) => setName(e.target.value)}
        />

        <Input 
        LabelText="Age" 
        placeholderUserName = "Nhập vào đây" 
        handleOnChange ={(e) => setAge(e.target.value)}
        />

        <Button onClickHandle={()=> removeData()} btnText = "Remove data"  /> 
            </div>
        
       
        )}
         
        </div>
    );
};

export default HomePage;