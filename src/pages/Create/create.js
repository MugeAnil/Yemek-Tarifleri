import React, { useContext, useEffect, useRef, useState } from 'react'
import './create.css' ;
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';



function Create() {

    const[baslik,setBaslik]= useState('');
    const[aciklama,setAciklama]= useState('');
    const[resim,setResim]= useState('');
    const[malzeme,setMalzeme]= useState('');
    const[malzemeler,setMalzemeler]= useState([]);
    const[url,setUrl]= useState('');
    const[hazirlanisi,setHazirlanisi]= useState('');
    const malzemeInput = useRef(null);
    const {color,mode} = useContext(ThemeContext);
    

    const {postData,data} = useFetch("http://localhost:3000/tarifler","POST");
    
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(baslik,aciklama,hazirlanisi,resim,url);
        postData({baslik,aciklama,malzemeler,hazirlanisi,resim,url});
        
    }

    useEffect( () =>{ 
       // console.log(data);
        if (data) {
            navigate("/");   
        }
    }, [data,navigate])

    const handleAddMalzeme = (e) => {
        e.preventDefault();
        const item  = malzeme.trim();

        if (item && !malzemeler.includes(item)) {
            setMalzemeler(prevItems => [...prevItems,item]);
        }
        setMalzeme('');
        malzemeInput.current.focus();
        malzemeInput.current.value= "" ;
    }

  return (
    <div className={`text-${mode==="dark"? "light":"dark"} text-${mode==="dark"? "light":"dark"}`}>
        <div className="card-body">
            <h2>Yemek Tarifleri Ekle</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="baslik" className="form-label">Başlık</label>
                    <input type="text" name="baslik" id="baslik" className='form-control' onChange={(e)=>setBaslik(e.target.value)}/>
                    </div>
                <div className="mb-3">
                    <label htmlFor="aciklama" className="form-label">Açıklama</label>
                    <input type="text" name="aciklama" id="aciklama" className='form-control'onChange={(e)=>setAciklama(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="malzemeler" >Malzemeler <ul>{ malzemeler.map(malzeme => <li key={malzeme} > {malzeme}</li>) }</ul></label>
                    <div className="input-group">
                        <input type="text" ref = {malzemeInput} name="malzemeler" className='form-control' onChange={(e)=> setMalzeme(e.target.value)}/>
                        <button className ={`btn btn-${color}`} type="button" onClick={handleAddMalzeme} >+</button>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="hazilanisi" className="form-label">Hazırlanışı</label>
                    <textarea type="text" name="hazilanisi" id="hazilanisi" className='form-control' onChange={(e)=>setHazirlanisi(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="resim" className="form-label">Resim</label>
                    <textarea type="text" name="resim" id="resim" className='form-control' onChange={(e)=>setResim(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Url</label>
                    <textarea type="text" name="url" id="url" className='form-control' onChange={(e)=>setUrl(e.target.value)}/>
                </div>
                <button type="submit" className ={`btn btn-${color}`}>Kaydet</button>
            </form>
            
            
        </div>
    </div>
  )
}

export default Create ;