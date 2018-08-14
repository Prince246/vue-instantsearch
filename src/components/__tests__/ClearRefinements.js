import { mount } from '@vue/test-utils';
import ClearRefinements from '../ClearRefinements.vue';
import { __setState } from '../../component';

jest.mock('../../component');
jest.mock('../../panel');

it('renders correctly with refinements', () => {
  __setState({
    hasRefinements: true,
  });
  const wrapper = mount(ClearRefinements);
  expect(wrapper.html()).toMatchSnapshot();
});

it('renders correctly without refinements', () => {
  __setState({
    hasRefinements: false,
  });

  const wrapper = mount(ClearRefinements);

  expect(wrapper.find('button').attributes().disabled).toBe('disabled');
  expect(wrapper.html()).toMatchSnapshot();
});

it('behaves correctly', () => {
  __setState({
    refine: jest.fn(),
    hasRefinements: true,
  });

  const wrapper = mount(ClearRefinements);

  wrapper.find('button').trigger('click');

  expect(wrapper.vm.state.refine).toHaveBeenCalledTimes(1);
});

it('calls the Panel mixin with `hasRefinement`', () => {
  __setState({
    hasRefinements: true,
  });

  const wrapper = mount(ClearRefinements);

  const mapStateToCanRefine = () =>
    wrapper.vm.mapStateToCanRefine(wrapper.vm.state);

  expect(mapStateToCanRefine()).toBe(true);

  wrapper.setData({
    state: {
      hasRefinements: false,
    },
  });

  expect(mapStateToCanRefine()).toBe(false);
});
