import FormCard from '../components/FormCard'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout backgroundColor='#ffffff'>
        <h4 className='recent-head'>Recent Forms</h4>
        <div className='ml-20'>
            <FormCard/>
        </div>
    </Layout>
  )
}

export default Home