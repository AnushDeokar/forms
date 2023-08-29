import { useEffect, useState } from 'react'
import FormCard from '../components/FormCard'
import Layout from '../components/Layout'
import { myform } from '../interfaces/myform'
import axios from 'axios';
import backendUrl from '../backendUrl';

function Home() {
  const [myforms, setMyForms] = useState<myform[]>([]);
  useEffect(()=>{
      const setformdata = async ()=>{
      
        const headers = {
          'Content-Type': 'application/json',
          'token': localStorage.getItem("auth_token")
        }
        axios.get(`${backendUrl}/form/all`, {headers: headers})
        .then((res)=>{
          setMyForms(res.data.forms)
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      setformdata();
  }, [])

  return (
    <Layout backgroundColor='#ffffff'>
        <h4 className='recent-head'>Recent Forms</h4>
        <div className='px-20'>
        <div className='mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {myforms.map((data, ind)=>{
              return <FormCard data={data} key={ind} />
            })}
        </div>
        </div>
    </Layout>
  )
}

export default Home