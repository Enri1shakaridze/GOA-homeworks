import { Avatar } from "./avatar";
import { Avatar2 } from "./Userinfos";
function Resmain({imgs2, names, mails}){
    return (
        <div>
            <Avatar imgs={imgs2} />
            <Avatar2 name={names} mail={mails} />
        </div>
    )
}
export {Resmain}