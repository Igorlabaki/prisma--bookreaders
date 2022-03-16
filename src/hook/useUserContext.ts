import { useContext } from "react";

import {UserContext} from '../Context/user/UserContext'

const useUserContext = () => useContext(UserContext)

export default useUserContext