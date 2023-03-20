package com.ssafy.ttocket.repository.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ttocket.domain.Performance;
import com.ssafy.ttocket.domain.PerformanceLike;
import com.ssafy.ttocket.domain.QPerformance;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static com.ssafy.ttocket.domain.QPerformance.performance;

public class PerformanceRepositoryImpl extends QuerydslRepositorySupport implements PerformanceRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public PerformanceRepositoryImpl(EntityManager em) {
        super(Performance.class);
        this.queryFactory = new JPAQueryFactory(em);
    }

    QPerformance qPerformance = performance;
    @Override
    public Performance getPerformanceById(int performanceId) {
       return queryFactory.select(performance)
               .from(performance)
               .where(performance.id.eq(performanceId))
               .fetchOne();
    }
}
