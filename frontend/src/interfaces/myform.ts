interface question{
    text: string,
    type: string,
    options: string[],
}
export interface myform{
    _id: string,
    title: string,
    description: string,
    questions: question[],
    createdAt: string,
    user_id: string
}