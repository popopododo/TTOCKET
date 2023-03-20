package com.ssafy.ttocket.repository.querydsl;

import com.ssafy.ttocket.domain.PerformanceLike;

public interface PerformanceLikeRepositoryCustom {

    public PerformanceLike getLike(String userId, int performanceId);
    public void updateLike(PerformanceLike performanceLike, boolean flag);
}
