import { shallow } from 'enzyme';
import { HomePage } from './HomePage';
import { UserProfile } from '../../models/UserProfile';
import useUserProfile from '../../hooks/useUserProfile/useUserProfile';
import { mocked } from 'ts-jest/utils';

jest.mock('../../hooks/useUserProfile/useUserProfile');

const userProfile: UserProfile = {
  googleId: 'string',
  imageUrl: 'string',
  email: 'string',
  name: 'string',
  givenName: 'string',
  familyName: 'string',
};

const mockedTrueHook = mocked(useUserProfile).mockImplementation(
  () => userProfile,
);
const mockedNullHook = mocked(useUserProfile).mockImplementation(() => null);

describe('<HomePage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should have render with user', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
    expect(mockedTrueHook).toHaveBeenCalled();
  });

  it('should have render without user', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
    expect(mockedNullHook).toHaveBeenCalled();
  });
});
