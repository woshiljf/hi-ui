import React ,{useState,createContext }from "react";
import classNames from "classnames";
import { MenuItemProps } from "./MenuItem";

type MenuMode ='horizontal' | 'vertical'
type OnSelect = (selectIndex:number)=>void
export interface MenuProps {
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: OnSelect
    className?: string;
    defaultIndex?: number;
    defaultOpenSubMenus ?: Array<string>
}

interface MenuContext {
    index?: number;
    onSelect?: OnSelect;
    mode ?: MenuMode;
    defaultOpenSubMenus ?: Array<string>
}

export const context = createContext<MenuContext>({
    index: 0,
})

const Menu: React.FC<MenuProps> = (props) =>{
   
    let { className,style,onSelect,children,defaultIndex,mode ,defaultOpenSubMenus} = props
    const classes = classNames('myui-menu',className,{
        [`menu-${mode}`]: mode
    })
    const [clickIndex, setClickIndex] = useState(defaultIndex)
    const handleClick = (index: number) =>{
        setClickIndex(index)
        if(onSelect){
            onSelect(index)
        }

    }
    const passedContext: MenuContext = {
        index: clickIndex,
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    }
    
    const renderChildren = ()=>{

        return React.Children.map(children,(child,index1)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>

            console.log(childElement);
            

            const { displayName } = childElement.type
            // console.log(displayName);
            
            if(displayName ==='MenuItem' || displayName === 'SubMenu'){
               
                return React.cloneElement( childElement,{
                    index: index1
                
                })
            }else{
                console.log('error')
            }
        })

    }


    return (
        <ul className={classes} style = {style}>

           <context.Provider value = { passedContext}>
              {
                renderChildren()
              }
            </context.Provider>           


        </ul>
    )


}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu