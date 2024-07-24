package org.nebula_tech.itinera.data;
import org.nebula_tech.itinera.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);

}
