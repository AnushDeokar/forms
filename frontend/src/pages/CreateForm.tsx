import Layout from '../components/Layout'
import QuestionCard from '../components/QuestionCard'
import {useState, ChangeEvent} from 'react';
import {BsLink} from 'react-icons/bs';
import { GrAdd} from 'react-icons/gr';

interface formhead {
  title: string, 
  description: string
}

function CreateForm() {

  const [questions, setQuestions] = useState<string[]>([]);

  const [formhead, setFormHead] = useState<formhead>({
    title:'Untitled Form',
    description:'Description'
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setFormHead({...formhead, [e.target.name]:e.target.value})
  }


  const addQuestion = ()=>{
    setQuestions([...questions, ""]);
  }

  return (
    <Layout backgroundColor="#f0ebf8">
        <div className='w-full' >
            <div className='form-box m-auto'>
                <div className='createform-head overflow-hidden'>
                    <input className='form-title' name="title" value={formhead.title} onChange={handleChange} />
                    <textarea className='w-full outline-none' name="description" value={formhead.description} onChange={handleChange}/>
                </div>
                {questions.map((question, ind)=>{
                    return (<QuestionCard key={ind} />)
                })}
                
                <div className='flex justify-between mt-10 w-full overflow-hidden'>
                      <button className='flex items-center gap-2 ml-10 create_button px-3' ><BsLink/> <span>Copy Link</span></button>
                      <button className='flex items-center gap-2 ml-10 create_button px-3' onClick={addQuestion}><GrAdd style={{color:"white"}}/> <span>Add Question</span></button>
                      <button className='btn-2 mr-10 w-20'>Save</button>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default CreateForm