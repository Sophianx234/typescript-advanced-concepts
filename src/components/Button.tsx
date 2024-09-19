import { ComponentPropsWithoutRef } from "react"

type ButtonProps = {
    type: 'button'
}& ComponentPropsWithoutRef<'button'>
type AnchorProps = {
    type: 'anchor'
} & ComponentPropsWithoutRef<'a'>

export default function Button(props:ButtonProps | AnchorProps){
    if(props.type=== 'anchor')
    return <a className="button"  {...props}
    >

    </a>
    if(props.type === 'button')
    return <button className="button" {...props}>

    </button>
}