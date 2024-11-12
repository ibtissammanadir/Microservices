package org.example.usermicroservice.Repository;

import org.example.usermicroservice.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}