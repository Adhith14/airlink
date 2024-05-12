package com.airlink.airlink.repos;



import com.airlink.airlink.models.Flight;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "flight", path = "flight")
@CrossOrigin(origins = "http://localhost:3000")
public interface FlightRepo extends MongoRepository<Flight, Integer> {



}
