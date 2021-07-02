jest.mock('../src/config', () => ({
  config: {
    test: 'MOCK_VARIABLE',
  },
}));

export {};
