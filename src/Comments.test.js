import React from 'react'
import { shallow } from 'enzyme'

import Comments from './Comments'
import Comment from './Comment'

describe('< Comments />', () => {
    it('should render Comments', () => {
        const comments={
            a: { id: 1, comment: 'Comment-1' },
            b: { id: 2, comment: 'Comment-2' },
            c: { id: 3, comment: 'Comment-3' }
        }
        const wrapper = shallow(< Comments comments={ comments } />)

        expect(wrapper.find(Comment).length).toBe(3)

        expect(wrapper.find(Comment).get(0).props.c).toBe(comments.a)
        expect(wrapper.find(Comment).get(1).props.c).toBe(comments.b)
        expect(wrapper.find(Comment).get(2).props.c).toBe(comments.c)
    })
})
