package com.airlink.airlink.repos;


import com.airlink.airlink.models.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "booking", path = "booking")
@CrossOrigin(origins = "http://localhost:3000")
public interface BookingRepo extends MongoRepository<Booking, Integer> {



}
