import Layout from '../components/Layout'
import QuestionCard from '../components/QuestionCard'
import {useState} from 'react';
function CreateForm() {

  const [questions, setQuestions] = useState([]);
  
  return (
    <Layout backgroundColor="#f0ebf8">
        <div className='w-full' >
            <div className='form-box m-auto'>
                <div className='createform-head'>
                    <input className='form-title' value="Untitled Form"/>
                    <textarea className='w-full outline-none' value="Description"/>
                </div>
                <QuestionCard/>
                <div className='flex justify-between'>

                </div>
            </div>
        </div>
    </Layout>
  )
}

export default CreateForm