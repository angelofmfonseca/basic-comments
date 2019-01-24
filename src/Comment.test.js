import React from 'react'
import { render } from 'enzyme'

import Comment from './Comment'

it('shoud render Comment', () => {
    const c = {
        comment: 'test'
    }
    const wrapper = render(<Comment c={ c } />)
    
    expect(wrapper.text()).toBe('test')
})