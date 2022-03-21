import { useRouter } from "next/router";
import { LayoutComponent } from "../../components/layout";
import { MemberComponent } from "../../components/layout/Content/Member";

export default function memberPage(){
    const {query:{id}} = useRouter()

    return(
        <LayoutComponent>
            <MemberComponent id={id}/>
        </LayoutComponent>
    )
}