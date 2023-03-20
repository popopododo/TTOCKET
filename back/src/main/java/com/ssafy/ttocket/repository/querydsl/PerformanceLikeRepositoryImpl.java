package com.ssafy.ttocket.repository.querydsl;

import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.ttocket.domain.PerformanceLike;
import com.ssafy.ttocket.domain.QPerformanceLike;
import com.ssafy.ttocket.domain.User;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static com.ssafy.ttocket.domain.QPerformanceLike.performanceLike;

public class PerformanceLikeRepositoryImpl extends QuerydslRepositorySupport implements PerformanceLikeRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public PerformanceLikeRepositoryImpl(EntityManager em) {
        super(PerformanceLike.class);
        this.queryFactory = new JPAQueryFactory(em);
    }

    QPerformanceLike qPerformanceLike = performanceLike;


    @Override
    public PerformanceLike getLike(String userId, int performanceId) {
       return queryFactory.select(qPerformanceLike)
               .from(qPerformanceLike)
               .where(qPerformanceLike.likeId.userId.eq(userId).and(qPerformanceLike.likeId.performanceId.eq(performanceId)))
               .fetchOne();
    }

    @Override
    public void updateLike(PerformanceLike performanceLike, boolean flag) {
    queryFactory.update(qPerformanceLike)
            .set(qPerformanceLike.isLike, flag)
            .where(qPerformanceLike.likeId.userId.eq(performanceLike.getLikeId().getUserId()).and(qPerformanceLike.likeId.performanceId.eq(performanceLike.getLikeId().getPerformanceId())))
            .execute();
    }
}
