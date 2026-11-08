import { useRef } from "react"
export function Comp1(){
    const usesR = useRef(null)
    function hendler(e){
        e.target.src === 'https://www.svgrepo.com/show/380010/eye-password-show.svg' ? e.target.src = 'https://img.icons8.com/ios7/600w/FFFFFF/hide.png': e.target.src = 'https://www.svgrepo.com/show/380010/eye-password-show.svg'
        usesR.current.type === 'password' ? usesR.current.type = 'text': usesR.current.type = 'password'
    }
    return (
        <div>
            <input ref={usesR} type="password" />
            <img onClick={hendler} width='30px' src="https://img.icons8.com/ios7/600w/FFFFFF/hide.png" alt="" />
        </div>
    )
}