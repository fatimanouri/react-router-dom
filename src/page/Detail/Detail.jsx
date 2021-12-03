import {useParams} from 'react-router-dom';

const Detail =()=>{
    const {params} = useParams();

    return(
        <div>
        <h1>detail</h1>
        <p>{params.id}</p>
        </div>
    ) 
}
export default Detail;