package com.ssafy.ttocket.repository;

import com.ssafy.ttocket.domain.User;
import com.ssafy.ttocket.repository.querydsl.UserRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> , UserRepositoryCustom {
}
