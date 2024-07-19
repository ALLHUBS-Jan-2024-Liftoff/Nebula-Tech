package org.nebula_tech.itinera.models.data;

import org.nebula_tech.itinera.models.user;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends CrudRepository<user, Integer> {
}
