package com.airlink.airlink.repos;

import com.airlink.airlink.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@RepositoryRestResource(collectionResourceRel = "user", path = "user")
@CrossOrigin(origins = "http://localhost:3000")
public interface UserRepo extends MongoRepository<User, Integer> {
    List<User> findByEmail(String email);
}
