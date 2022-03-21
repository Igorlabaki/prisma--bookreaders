import { useContext } from "react";

import {MemberContext} from '../Context/member/memberContext'

const useMemberContext = () => useContext(MemberContext)

export default useMemberContext