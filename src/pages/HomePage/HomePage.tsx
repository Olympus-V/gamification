import { Link, useNavigate } from 'react-router-dom';
 
const HomePage = () => {
    const navigate = useNavigate();
    return(
       
        <div className="buttons-container">
        <button onClick={()=>
            {navigate('/SpinTheWheel')}
        } className="button">Spin The Wheel</button>
        <button className="button">Hurdle Cuddle</button>
        <button className="button">Know Me Better</button>
        <button className="button">Spank Bank</button>
        <button className="button">Memory Lane</button>
      
    </div>

    )
}

export default HomePage;