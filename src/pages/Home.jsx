import { useDispatch, useSelector } from "react-redux"
import { remove } from "../redux/tokenSlice";

function Home() {
    const user = useSelector(state => state.user.value);
    const dispatch = useDispatch();
    function handlelog () {
        dispatch(remove())
    }
    return (
        <>
           {
            user.map((el , index) => {
                return (
                    <div className="w-[300px] mx-auto mt-[100px] shadow-2xl	p-[15px] rounded-lg" key={index}>
                        <h1 className="text-[15.94px]">Name: {el.name}</h1>
                        <h1 className="text-[15.94px]">Email: {el.email}</h1>
                        <h1 className="text-[15.94px]">Password: {el.pass}</h1>
                        <button onClick={handlelog} className="bg-slate-800	text-white p-4 rounded-lg flex items-center gap-[10px] mt-[15px] w-[90px]">LOG OUT<i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                    </div>
                )
            })
        } 
        </>
    )
}

export default Home
