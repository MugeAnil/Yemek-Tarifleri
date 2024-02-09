
import './detail.css' ;
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

function Detail() {
    const {id} = useParams();
    const {mode,color} = useContext(ThemeContext);
    const url = "http://localhost:3000/tarifler/"+ id ;

    const {data:tarif,isLoading,error} = useFetch(url)
    /*const [tarif,setTarifler] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setTarifler(data))
    },[url])*/

  return (
    <div className={`text-${mode==="dark"? "light":"dark"} border-${mode==="dark"? "light":"dark"}`}>
        <div className='row mt-3' >
            { isLoading && <div className="alert alert-warning">Yükleniyor..</div> }
            { error && <div className="alert alert-warning">{error}</div> }
            {
                tarif && ( 
                    <>
                    <div className="col-4">
                        <img src={`/img/${tarif.resim}`}  alt={tarif.baslik} className='img-fluid rounded'/>
                        <hr />
                    </div>
                    <div className="col-8">
                        <h5>{tarif.baslik}</h5> 
                        <p>{ tarif.aciklama} </p>
                        <ul>
                            {tarif.malzemeler.map((malzeme,index) => ( <li key={index} >{malzeme}</li> ) )
                            }
                        </ul>
                    </div>
                    <div className="col-12">
                        <p>{ tarif.hazirlanisi }</p>
                        <a href={tarif.url} className={`btn btn-${color}`}>Tarifi incele</a> 
                    </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Detail ;