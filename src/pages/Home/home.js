
import './home.css' ;
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

function Home() {

    //data ismini tarifler olarak aldık
    const {data:tarifler,isLoading,error } = useFetch("http://localhost:3000/tarifler");
    
    /*const [tarifler,setTarifler]= useState(null);
    useEffect(()=>{
        fetch("http://localhost:3000/tarifler")
        .then(res => res.json())
        .then(data => setTarifler(data))
    },[])*/
  return (
    <div className='row mt-3' > 
    {isLoading && <div className="alert alert-warning">Yükleniyor..</div>}
    { error && <div className="alert alert-warning">{error}</div> }

    {
        tarifler && tarifler.map(tarif => ( 
            <ProductCard key={tarif.id} tarif={tarif}  />
         ))
    }
    </div>
    /*<div className='row mt-3' > 
    {
        tarifler && tarifler.map(tarif => ( 
            <ProductCard key={tarif.id} tarif={tarif}  />

         ))
    }
    </div>*/
  )
}

export default Home ;