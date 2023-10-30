//! ".d.ts" defines as TypeScript Global Area. 
//! We can reach all types here from any Components without export-import

interface TodoType {
    id: string | number;
    task: string;
    isDone: boolean;
}

// to add function
type Addfn = (task:string) => void;

//to delete function 
type DeleteFn = (id: string | number)=>void;
type ToggleFn = (item:TodoType)=>void;