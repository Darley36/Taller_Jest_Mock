import axios from 'axios';
import Users from '../components/users';
jest.mock('axios');
test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  return Users.all().then(data => expect(data).toEqual(users));
});