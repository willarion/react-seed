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

describe('<HomePage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should have render with user', () => {
    mocked(useUserProfile).mockImplementationOnce(() => userProfile);
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
    expect(useUserProfile).toHaveBeenCalled();
  });

  it('should have render without user', () => {
    mocked(useUserProfile).mockImplementationOnce(() => null);
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
    expect(useUserProfile).toHaveBeenCalled();
  });
});
