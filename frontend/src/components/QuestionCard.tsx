import {useState, ChangeEvent} from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function QuestionCard() {
    const [questionType, setQuestionType] = useState('mcq');
    const [options, setOptions] = useState<string[]>([]);
 
    const handleQuestionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setQuestionType(event.target.value);
    };


  

    const AddOption = ()=>{
        setOptions([...options, 'Option Value']);
    }

    const handleOptionDelete = (ind:Number)=>{
        const temp = options.filter((val, i)=>{
            if (i!==ind){
                return val;
            }
        })
        setOptions(temp);
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
    }
    const renderQuestion = () => {
        return (
                <>

                {questionType === 'mcq'?
                    <>
                    {
                    options.map((option, ind)=>{
                        return <p className='ml-4 flex justify-between'><input value={option} onChange={(e)=>handleOptionChange(e, ind)}/><AiOutlineCloseCircle size={20} onClick={()=>handleOptionDelete(ind)}style={{"cursor":"pointer"}}/></p>
                    })
                    }

                    <div className='flex justify-around mt-10'>
                        <button className='btn-2' onClick={AddOption}>Add Option</button>
                        <button className='btn-2'>Delete Question</button>
                    </div>
                    </>
                    :
                    <>
                        <input className='w-full outline-none mt-2 pl-4' placeholder='Your Answer' disabled={true}/>
                        <div className='flex justify-center mt-10'>
                            <button className='btn-2'>Delete Question</button>
                        </div>
                    </>
                }
                </>
        )

    };


    return (
        <div className="questioncard">
            <div className='pt-5 flex gap-5 mb-5 justify-between'>
                <input className='question-input' value="1. Type your question here"/>
                <select id="dropdown" value={questionType} onChange={(e)=>handleQuestionChange(e)} style={{outline:"none"}}>
                    <option value="mcq">MCQ</option>
                    <option value="Short Answer">Short Answer</option>
                </select>
            </div>
            {renderQuestion()}
        </div>
    )
}

export default QuestionCard