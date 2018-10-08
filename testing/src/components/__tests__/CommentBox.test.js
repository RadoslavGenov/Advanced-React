import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('should have a text area and a button', function () {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('should have a text area the user can type in', function () {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

}); 

