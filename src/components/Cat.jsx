import {useState} from 'react';

const Cat = ()=>{

    const [cat , setCat] = useState({
        name:'Gigi',
        age: 5
    })

    const handleClick = () =>{

        setCat({...cat, age:cat.age +1})

    }

    return(

        <>
        <h2 className='mt-5'>{cat.name} - {cat.age}</h2>
        <button onClick={handleClick} className='btn btn-dark mb-2'>Aumentar edad</button>
        
        </>


    )


}

export default Cat;