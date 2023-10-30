//! .d.ts defines as TypeScript Global Area. 
//! We can reach all types here from any Components without export-import



type Addfn = (text:string) => void;


interface TodoType {
    id: string | number;
    task: string;
    isDone: boolean;
}

//delete function icin 
type DeleteFn = (id: string | number)=>void;

type ToggleFn = (item:TodoType)=>void;