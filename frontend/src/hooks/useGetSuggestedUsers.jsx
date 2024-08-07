import { setSuggestedUsers } from "@/redux/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetSuggestedUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSuggestedUsers = async () => {
            try {
                const res = await axios.get(
                  "https://clone-instragram.onrender.com/api/v1/user/suggested",
                  { withCredentials: true }
                );
                if (res.data.success) { 
                    dispatch(setSuggestedUsers(res.data.users));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSuggestedUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
export default useGetSuggestedUsers;