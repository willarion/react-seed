import { shallow } from 'enzyme';
import { Button } from './Button';

describe('components/Button', () => {
  it('should have primary style render', () => {
    expect(shallow(<Button styleType="primary" />)).toMatchSnapshot();
  });

  it('should have secondary style render', () => {
    expect(shallow(<Button styleType="secondary" />)).toMatchSnapshot();
  });
});
