
const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

// then you should be able to:
expect(mockedNavigate).toHaveBeenCalledWith('/');