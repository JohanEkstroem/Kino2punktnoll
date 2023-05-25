import { jest } from "@jest/globals";
import  {filterUpcomingScreening} from "../src/upComing.js";

//mock time to compare with mock api
beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2023, 5, 25));
});

afterEach(() => {
    jest.clearAllTimers();
});

test("Length of array", async () => {
    const screening = await filterUpcomingScreening(api.fakeScreenings())
    expect(screening).length =10;
});
test("Screenings only five days ahead" , async ()  =>{
    const screening = await filterUpcomingScreening(api.fakeScreenings())
    const toBecomeFakedTime = new Date()

    screening.forEach((screening) => {
        expect(
        Date.parse(screening.start_time)< Date.parse(toBecomeFakedTime)
    ).toBeTruthy();
    });

    });

// mock api
const api = {
    async fakeScreenings() {
        return {"data":[{"id":161,"attributes":{"start_time":"2023-05-26T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:40.310Z","updatedAt":"2023-05-25T13:09:40.310Z"}},
                {"id":162,"attributes":{"start_time":"2023-05-27T12:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:40.536Z","updatedAt":"2023-05-25T13:09:40.536Z"}},
                {"id":163,"attributes":{"start_time":"2023-05-27T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:40.743Z","updatedAt":"2023-05-25T13:09:40.743Z"}},
                {"id":164,"attributes":{"start_time":"2023-05-27T19:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:41.001Z","updatedAt":"2023-05-25T13:09:41.001Z"}},
                {"id":165,"attributes":{"start_time":"2023-05-27T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:41.252Z","updatedAt":"2023-05-25T13:09:41.252Z"}},
                {"id":166,"attributes":{"start_time":"2023-05-28T12:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:41.511Z","updatedAt":"2023-05-25T13:09:41.511Z"}},
                {"id":167,"attributes":{"start_time":"2023-05-28T19:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:41.875Z","updatedAt":"2023-05-25T13:09:41.875Z"}},
                {"id":168,"attributes":{"start_time":"2023-05-28T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:42.106Z","updatedAt":"2023-05-25T13:09:42.106Z"}},
                {"id":169,"attributes":{"start_time":"2023-05-29T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:42.405Z","updatedAt":"2023-05-25T13:09:42.405Z"}},
                {"id":170,"attributes":{"start_time":"2023-05-29T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:42.742Z","updatedAt":"2023-05-25T13:09:42.742Z"}},
                {"id":171,"attributes":{"start_time":"2023-05-30T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:43.137Z","updatedAt":"2023-05-25T13:09:43.137Z"}},
                {"id":172,"attributes":{"start_time":"2023-05-30T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:43.507Z","updatedAt":"2023-05-25T13:09:43.507Z"}},
                {"id":173,"attributes":{"start_time":"2023-05-31T12:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:43.710Z","updatedAt":"2023-05-25T13:09:43.710Z"}},
                {"id":174,"attributes":{"start_time":"2023-05-31T19:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:44.037Z","updatedAt":"2023-05-25T13:09:44.037Z"}},
                {"id":175,"attributes":{"start_time":"2023-05-31T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:44.309Z","updatedAt":"2023-05-25T13:09:44.309Z"}},
                {"id":176,"attributes":{"start_time":"2023-06-02T12:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:44.970Z","updatedAt":"2023-05-25T13:09:44.970Z"}},
                {"id":177,"attributes":{"start_time":"2023-06-02T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:45.441Z","updatedAt":"2023-05-25T13:09:45.441Z"}},
                {"id":178,"attributes":{"start_time":"2023-06-03T19:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:45.909Z","updatedAt":"2023-05-25T13:09:45.909Z"}},
                {"id":179,"attributes":{"start_time":"2023-06-03T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:46.138Z","updatedAt":"2023-05-25T13:09:46.138Z"}},
                {"id":180,"attributes":{"start_time":"2023-06-04T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:46.486Z","updatedAt":"2023-05-25T13:09:46.486Z"}},
                {"id":181,"attributes":{"start_time":"2023-06-04T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:46.798Z","updatedAt":"2023-05-25T13:09:46.798Z"}},
                {"id":182,"attributes":{"start_time":"2023-06-05T12:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:47.015Z","updatedAt":"2023-05-25T13:09:47.015Z"}},
                {"id":183,"attributes":{"start_time":"2023-06-05T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:47.228Z","updatedAt":"2023-05-25T13:09:47.228Z"}},
                {"id":184,"attributes":{"start_time":"2023-06-05T19:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:47.466Z","updatedAt":"2023-05-25T13:09:47.466Z"}},
                {"id":185,"attributes":{"start_time":"2023-06-05T21:00:00.000Z","room":"Stora salongen","createdAt":"2023-05-25T13:09:47.693Z","updatedAt":"2023-05-25T13:09:47.693Z"}}]}
    }
}
