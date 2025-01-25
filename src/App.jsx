import Input from "./components/input";
import Tasks from "./components/tasks";
import Constext from "./components/store/constext";

 
function App() { 
  return (
    <>
    <Constext>
    <div className="flex flex-col bg-blue-400 items-center rounded-xl justify-center py-6 m-5">
    <h1 className="font-serif font-bold text-lg">Todo-List</h1>
     <Input></Input>
     <Tasks></Tasks>
    </div>

    </Constext>
    

        
    </>
  );
}

export default App;
