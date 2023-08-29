import axios from 'axios';
import Layout from '../components/Layout'
import QuestionCard from '../components/QuestionCard'
import {useState, ChangeEvent, useEffect} from 'react';
import {BsLink} from 'react-icons/bs';
import { GrAdd} from 'react-icons/gr';
import backendUrl from '../backendUrl';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
interface formhead {
  title: string, 
  description: string
}

interface question{
  type: string,
  text: string,
  options? : string[]

}
function EditForm() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<question[]>([]);

  const [formhead, setFormHead] = useState<formhead>({
    title:'Untitled Form',
    description:'Description'
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setFormHead({...formhead, [e.target.name]:e.target.value})
  }

  const handleQuestionChange = (ind: Number, type: string, value: string|string[])=>{
      const temp_questions = questions.map((question, i)=>{
        if (i===ind){
            return {...question, [type]: value};
        }else{
          return question;
        }
      })
      setQuestions(temp_questions);
  }

  const handleQuestionDelete = (ind: Number)=>{
    const temp_questions = questions.filter((question, i)=>{
      if (i!==ind){
        return question;
      }
    })
    setQuestions(temp_questions);
  }

  useEffect(()=>{
    const setformdata = async ()=>{
      
        const headers = {
          'Content-Type': 'application/json',
          'token': localStorage.getItem("auth_token")
        }
        axios.get(`${backendUrl}/form/edit/${id}`, {headers: headers})
        .then((res)=>{
            const form = res.data.form;
            const presentformhead = {
                title: form.title,
                description: form.description
            }
            setFormHead(presentformhead);
            setQuestions(form.questions);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      setformdata();
  }, [])
  const handleSubmit = async ()=>{
      const formDetails = {
        title: formhead.title,
        description: formhead.description,
        questions: questions
      }
      const headers = {
        'Content-Type': 'application/json',
        'token': localStorage.getItem("auth_token")
      }
      
      const res = await axios.put(`${backendUrl}/form/edit/${id}`, formDetails, {headers: headers});
      if (res.data.success){
        toast.success('Form successfully Edited!', {duration: 3000})
        navigate("/");
      }
      
  }

  const addQuestion = ()=>{
    setQuestions([...questions, {type:"MCQ", text:"Type your question here", options:[]}]);
  }

  return (
    <Layout backgroundColor="#f0ebf8">
        <Toaster/>
        <div className='w-full' >
            <div className='form-box m-auto'>
                <div className='createform-head overflow-hidden'>
                    <input className='form-title' name="title" value={formhead.title} onChange={handleChange} />
                    <textarea className='w-full outline-none' name="description" value={formhead.description} onChange={handleChange}/>
                </div>
                {questions.map((question, ind)=>{
                    return (<QuestionCard key={ind} question={question} handleChange={(type: string, value: string | string[])=>handleQuestionChange(ind, type, value)} handleDelete={()=>handleQuestionDelete(ind)}/>)
                })}
                
                <div className='flex justify-between mt-10 w-full overflow-hidden'>
                      <button className='flex items-center gap-2 ml-10 create_button px-3' ><BsLink/> <span>Copy Link</span></button>
                      <button className='flex items-center gap-2 ml-10 create_button px-3' onClick={addQuestion}><GrAdd style={{color:"white"}}/> <span>Add Question</span></button>
                      <button className='btn-2 mr-10 w-20' onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default EditForm