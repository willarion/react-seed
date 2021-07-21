import { shallow } from 'enzyme';
import { Menu } from './Menu';
import { useMessagesSearchString } from '../../hooks/useSearchParams/useSearchParams';
import { mocked } from 'ts-jest/utils';

jest.mock('../../hooks/useSearchParams/useSearchParams');

const mockedHook = mocked(useMessagesSearchString).mockImplementation(
  () => 'some string',
);

describe('<Menu />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should have render', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper).toMatchSnapshot();
    expect(mockedHook).toBeCalledTimes(2);
  });
});
