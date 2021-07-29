import React ,{ useContext} from "react";
import classNames from "classnames";
import { context } from './Menu'
export interface MenuItemProps{
    style?: React.CSSProperties;
    index: number;
    className?: string;
    disabled?: boolean
}

const MenuItem: React.FC<MenuItemProps> = (props)=>{
    const { style,className,index,disabled,children } = props
    const myContext = useContext(context)
    const classes = classNames( 'menu-item',className,{
        'is-disabled': disabled,
        'is-active': myContext.index ===index
    } )
    const handleClick = () =>{
        if(myContext.onSelect && !disabled){
            // 传入当前item的索引 index
            myContext.onSelect(index)
        }
    }
    return (
        <li className = {classes} style={style} onClick={handleClick}>
          {children}
        </li>
    )

}
MenuItem.displayName = 'MenuItem'
export default MenuItem;