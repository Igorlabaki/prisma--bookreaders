import { useContext } from "react";

import {FollowContext} from '../Context/follow/followContext'

const useFollowContext = () => useContext(FollowContext)

export default useFollowContext