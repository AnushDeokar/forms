import {useState, ChangeEvent} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';

interface QuestionCardProps {
    handleChange: (type: string, value: string|string[]) => void;
    question: {type:string, text: string, options?: string[]};
    handleDelete: () => void;
  }

function QuestionCard({handleChange, question, handleDelete}: QuestionCardProps) {

    const [options, setOptions] = useState<string[]>([]);
 
    const handleQuestionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        // setQuestionType(event.target.value);
        handleChange("type", event.target.value);
    };



  

    const AddOption = ()=>{
        const temp_options = [...options, 'Option Value'];
        setOptions([...options, 'Option Value']);
        handleChange("options", temp_options);
    }

    const handleOptionDelete = (ind:Number)=>{
        const temp = options.filter((val, i)=>{
            if (i!==ind){
                return val;
            }
        })
        setOptions(temp);
        handleChange("options", temp);
    }
    const handleOptionChange = (e:ChangeEvent<HTMLElement>, ind: Number)=>{
        var temp: string[] = options;
        temp = options.map((option, i)=>{
            if (i===ind){
                return (e.target as HTMLInputElement).value;
            }else{
                return option
            }
        })
        setOptions(temp);
        handleChange("options", temp);
    }

    const renderQuestion = () => {
        return (
                <>

                {question.type === 'MCQ'?
                    <>
                    {
                    question?.options?.map((option: string, ind)=>{
                        return <p className='ml-4 flex justify-between' key={ind}><input value={option} onChange={(e)=>handleOptionChange(e, ind)}/><AiOutlineCloseCircle size={20} onClick={()=>handleOptionDelete(ind)}style={{"cursor":"pointer"}}/></p>
                    })
                    }

                    <div className='flex justify-around mt-10'>
                        <button className='btn-2' onClick={AddOption}>Add Option</button>
                        <button className='btn-2' onClick={handleDelete}>Delete Question</button>
                    </div>
                    </>
                    :
                    <>
                        <input className='w-full outline-none mt-2 pl-4' placeholder='Answer will go Here' disabled={true}/>
                        <div className='flex justify-center mt-10'>
                            <button className='btn-2' onClick={handleDelete}>Delete Question</button>
                        </div>
                    </>
                }
                </>
        )

    };


    return (
        <div className="questioncard">
            <div className='pt-5 flex gap-5 mb-5 justify-between'>
                <input className='question-input' value={question.text} onChange={(e)=>handleChange("text", e.target.value)}/>
                <select id="dropdown" value={question.type} onChange={(e)=>handleQuestionChange(e)} style={{outline:"none"}}>
                    <option value="SA">MCQ</option>
                    <option value="Short Answer">Short Answer</option>
                </select>
            </div>
            {renderQuestion()}
        </div>
    )
}

export default QuestionCard