package com.ssafy.ttocket.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ttocket.domain.Performance;
import com.ssafy.ttocket.domain.QPerformance;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class PerformanceRepositoryImpl extends QuerydslRepositorySupport implements PerformanceRepositoryCustom {

    @PersistenceContext
    EntityManager em;

    private final JPAQueryFactory queryFactory;

    public PerformanceRepositoryImpl(EntityManager entityManager) {
        super(Performance.class);
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<Performance> findOpenSoon()

}
