import renderer from 'react-test-renderer';
import Hello from './Hello';

it('renders correctly', () => {
  const component = renderer.create(
    <Hello />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
