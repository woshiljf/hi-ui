import React from 'react';

import { render ,fireEvent} from '@testing-library/react';

import Button ,{ ButtonProps,ButtonType,ButtonSize } from './Button';
const defaultProps = {
    onClick: jest.fn()
}

const testProps = {
    size: ButtonSize.Large,
    className: 'my-button',
    btnType: ButtonType.Primary
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
}

// 测试组件功能1
describe(' test Button component',()=>{
    test(' first react test Button ',()=>{

        const wrapper = render( <Button {...defaultProps}>ldh</Button> )
        const element = wrapper.getByText('ldh')
        expect(element).toBeTruthy()
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()

    })

    test(' test Button Props',()=>{
        const wrapper = render( <Button {...testProps}>ldh</Button> )
        const element = wrapper.getByText('ldh')
        expect(element).toBeTruthy()
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-lg btn-primary my-button')
    })

    it('should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType='link' href="http://dummyurl">Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
      })
      it('should render disabled button when disabled set to true', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
      })

})

