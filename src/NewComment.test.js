import React from 'react'
import { shallow } from 'enzyme'

import NewComment from './NewComment'

describe('< NewComment />', () => {
    it('should handleChange in NewComment', () => {
        const wrapper = shallow(<NewComment />)
        const e = {
            target: { value: 'test' }
        }
        wrapper.find('textarea').simulate('change', e)

        expect(wrapper.state().newComment).toBe('test')
    })

    it('should sendComment in NewComment', () => {
        const sendComment = jest.fn()
        const wrapper = shallow(<NewComment sendComment={ sendComment } />)
        const e = {
            target: { value: 'test' }
        }
        wrapper.find('textarea').simulate('change', e)
        wrapper.find('button').simulate('click')

        expect(sendComment).toBeCalledWith('test')
        expect(wrapper.state().newComment).toBe('')
    })
})