import axios from 'axios';

const Booking_Url = " http://localhost:8080/booking"

const check_ById = "http://localhost:8080/bookingbycust"

const check_status= "http://localhost:8080/bookingCheck"

class ServiceBookingsService{

        getBookings(){
                return axios.get(Booking_Url);
        }

        createBookings(booking){
                return axios.post(Booking_Url, booking);
        }

        updateBookings(booking,bookingId){
                return axios.put(Booking_Url + '/' + bookingId,booking);
            }

        getServiceProvidersById(serviceProviderId){
                return axios.get(check_ById + '/' + serviceProviderId);
        }

        getCustById(serviceProviderId){
                return axios.get(check_status + '/' + serviceProviderId);
        }

        rejectBooking(serviceProviderId){
                return axios.delete(Booking_Url + '/' +serviceProviderId);
            }

}
export default new ServiceBookingsService()