package com.ssafy.ttocket.repository.querydsl;

import com.ssafy.ttocket.domain.User;

import java.util.List;

public interface UserRepositoryCustom {

    List<User> getUserList();
}
