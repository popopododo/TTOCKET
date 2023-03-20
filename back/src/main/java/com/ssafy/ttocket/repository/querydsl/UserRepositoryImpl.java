package com.ssafy.ttocket.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ttocket.domain.QUser;
import com.ssafy.ttocket.domain.User;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.util.List;

import static com.ssafy.ttocket.domain.QUser.*;

public class UserRepositoryImpl extends QuerydslRepositorySupport implements UserRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public UserRepositoryImpl(EntityManager em) {
        super(User.class);
        this.queryFactory = new JPAQueryFactory(em);
    }

    QUser user = QUser.user;


    @Override
    public List<User> getUserList() {
        return queryFactory.select(user)
                .from(user)
                .fetch();
    }
}
