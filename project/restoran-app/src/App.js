import React, { useEffect } from 'react'
import { Header, CreateContainer, MainContainer } from './components'
import { Route, Routes } from 'react-router-dom'
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header/>

      <main className='mt-14 md:mt-20 px-4 md:px-16 py-6 w-full'>
        <Routes>
          <Route path='/' element={ <MainContainer /> } />
          <Route path='/createItems' element={ <CreateContainer/> } />
        </Routes>
      </main>
    </div>
  )
}

export default App