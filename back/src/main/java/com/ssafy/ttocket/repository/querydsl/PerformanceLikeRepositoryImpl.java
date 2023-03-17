package com.ssafy.ttocket.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ttocket.domain.PerformanceLike;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;

public class PerformanceLikeRepositoryImpl extends QuerydslRepositorySupport{
    private final JPAQueryFactory queryFactory;
    public PerformanceLikeRepositoryImpl(EntityManager em) {
        super(PerformanceLike.class);
        this.queryFactory = new JPAQueryFactory(em);
    }

}
