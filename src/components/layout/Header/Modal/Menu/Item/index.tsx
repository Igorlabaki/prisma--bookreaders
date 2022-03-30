import Link from "next/link";
import {ItemContainer} from './style'
import useModalContext from "../../../../../../hook/useModalContext";
import useUserContext from "../../../../../../hook/useUserContext";
import { signOut } from "next-auth/react";

interface ItemProps {
    text: string
    icon?: React.ReactNode
    href?: string
    onClick?: (event: any) => void
}

export function ItemComponent({text, href,icon}:ItemProps){

    const {handleCloseConfigModal}  = useModalContext()
    const {}                  = useUserContext()

    function handleItemMenu(){
        return(
            <>
                {href ? (
                <Link href={href}>
                    <p>{icon}{text}</p>
                </Link>
            ):
                <p onClick={() => signOut()}>
                    {icon}{text}
                </p>
            }
            </>
        )
    }

    return(
        <ItemContainer>
            {handleItemMenu()}
        </ItemContainer>
    )
}