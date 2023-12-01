import { throttledGetDataFromApi } from './index';
import axios, { AxiosInstance } from 'axios';

describe('throttledGetDataFromApi', () => {
  jest.mock('axios');
  let response: any;
  console.log(response);

  const baseURL = 'https://jsonplaceholder.typicode.com';
  const relativePath = '/users';

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618',
            },
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
          },
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
              lat: '-68.6102',
              lng: '-47.0653',
            },
          },
          phone: '1-463-123-4447',
          website: 'ramiro.info',
          company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications',
          },
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
              lat: '29.4572',
              lng: '-164.2990',
            },
          },
          phone: '493-170-9623 x156',
          website: 'kale.biz',
          company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services',
          },
        },
      ],
    };
  });

  jest.mock('axios', () => ({
    create: jest.fn(),
    get: jest.fn().mockReturnValue(response),
  }));

  afterAll(() => {
    jest.unmock('./index');
  });

  test('should create instance with provided base url', async () => {
    const mockedAxiosInstance: any = {
      get: jest.fn(() => Promise.resolve({ data: response })),
    };
    const mockedAxiosCreate = jest.spyOn(axios, 'create');

    mockedAxiosCreate.mockReturnValueOnce(mockedAxiosInstance);
    await throttledGetDataFromApi(relativePath);
    expect(mockedAxiosCreate).toHaveBeenCalledWith({ baseURL });
  });

  test('should perform request to correct provided url', async () => {
    const mockAxiosInstance = { get: jest.fn() } as unknown as AxiosInstance;
    axios.create = jest.fn(() => mockAxiosInstance);

    const mockResponse = { data: 'mocked data' };
    (mockAxiosInstance.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(mockResponse),
    );

    await throttledGetDataFromApi('/');

    throttledGetDataFromApi.flush();

    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/');
  });

  test('should return response data', async () => {
    const mockAxiosInstance = { get: jest.fn() } as unknown as AxiosInstance;
    axios.create = jest.fn(() => mockAxiosInstance);

    const mockResponseData = 'mocked data';
    const mockResponse = { data: mockResponseData };
    (mockAxiosInstance.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(mockResponse),
    );

    const result = await throttledGetDataFromApi('/');

    expect(result).toEqual(mockResponseData);
  });
});