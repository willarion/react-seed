import { shallow } from 'enzyme';
import { NavigationButtons } from './NavigationButtons';

const mockFunction = jest.fn();

describe('component/NavigationButtons', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should render with no disabled btn', () => {
    expect(
      shallow(
        <NavigationButtons
          onForward={mockFunction}
          onBack={mockFunction}
          onBackButton={false}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should render with disabled btn', () => {
    expect(
      shallow(
        <NavigationButtons
          onForward={mockFunction}
          onBack={mockFunction}
          onBackButton={true}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should call function on before btn click', () => {
    const wrapper = shallow(
      <NavigationButtons
        onForward={mockFunction}
        onBack={mockFunction}
        onBackButton={true}
      />,
    );
    const event = { data: 'click event' };
    const button = wrapper.findWhere((node) => node.key() === 'back-button');
    button.simulate('click', event);
    expect(mockFunction).toBeCalled();
  });

  it('should call function on forward btn click', () => {
    const wrapper = shallow(
      <NavigationButtons
        onForward={mockFunction}
        onBack={mockFunction}
        onBackButton={true}
      />,
    );
    const event = { data: 'click event' };
    const button = wrapper.findWhere((node) => node.key() === 'forward-button');
    button.simulate('click', event);
    expect(mockFunction).toBeCalled();
  });
});
