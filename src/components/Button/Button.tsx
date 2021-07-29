import React from "react";
import classNames from 'classnames'
// button按钮的所有的属性
// 大小
import '../../styles/index.scss'
export enum ButtonSize {
    
    Large = 'lg',
    Medium = 'md',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

interface BaseButtonProps {
    className?: string,
    disabled?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children: React.ReactNode,
    href?: string
    
}
// Button 按钮制作,函数组件, 获取元素button 的所有属性类型。
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// 获取button按钮的所有的anchor类型。
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 合并类型后的ButtonProps
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) =>{
    
    // 导入所有的熟悉，以及剩余的属性。。。
    const { className,disabled,size,btnType,children,href, ...restProps } = props
    // 使用classNames获取多个样式类，比较好控制。
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link && disabled)
    })
    
    if(btnType === ButtonType.Link && href){
      
        return (
            <a 
               className = {classes}
               href={href}
               {...restProps}
               >
                {children}
            </a>
        )

    }else{
        return (
            <button
            className = {classes}
            disabled = {disabled}
            {...restProps}
            
            >{children}</button>
        )
    }


}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button