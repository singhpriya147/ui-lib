import {ComponentProps} from "react";


type ButtonProps=ComponentProps<"button">;


const Button
 = ({...props}:ButtonProps) => {
  return (
    <button className="text-red-500" {...props}>

    </button>
  )
}

export default Button
