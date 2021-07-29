import React ,{ useCallback,useState,FunctionComponent ,useContext} from "react";

import classNames from "classnames";
import { context} from './Menu'
import { MenuItemProps } from "./MenuItem";
import Transition from "../Transition/index"
interface SubMenuProps {
   
    index?: string
    title: string
    className?: string
}

const SubMenu: React.FC<SubMenuProps> = (props)=>{
    const { index,title,className,children } = props
    const myContext = useContext(context)
    const openedSubMenus = myContext.defaultOpenSubMenus as Array<string>
    const isOpen = (index && myContext.mode =='vertical') ? openedSubMenus.includes(index): false
    const [menuOpen,setOpen] = useState(isOpen)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': myContext.index === index,
        'is-opened': menuOpen,
        'is-vertical': myContext.mode === 'vertical'
    })

    const handleClick = (e: React.MouseEvent)=>{
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer: any

    const handleMouse = (e:React.MouseEvent,toggle: boolean )=>{
        clearTimeout(timer)
        e.preventDefault()
        timer =  setTimeout(() => {
            setOpen(toggle)
        }, 300);
    }

    const clickEvents = myContext.mode ==='vertical' ? {
        onclick: handleClick
    }: {}

    const hoverEvents = myContext.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent)=> {handleMouse(e,true)},
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e,false)}
    }: {}

    const renderChildren = ()=>{
        const subMenuClasses = classNames( 'myui-submenu',{
            'menu-opened': menuOpen
        } )

        const childrenComponent = React.Children.map( children,(child,i)=>{
            const childElement = child as  React.FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem'){

                return React.cloneElement( childElement,{
                    index: i
                })

            }else{
                console.log('error');
                
            }
        } )

        return (
            <Transition
              in={menuOpen}
              timeout={300}
              animation="zoom-in-top"
            >
              <ul className={subMenuClasses}>
                {childrenComponent}
              </ul>
            </Transition>
          )


    }

    return (
        <li
          key={index}
          className = {classes}
          {...hoverEvents}

        >
            <div className="submenu-title" {...clickEvents}>

            </div>

            { renderChildren()}

        </li>
    )


  


}



SubMenu.displayName = 'SubMenu'
export default SubMenu