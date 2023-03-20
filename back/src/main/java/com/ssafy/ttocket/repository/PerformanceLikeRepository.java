package com.ssafy.ttocket.repository;

import com.ssafy.ttocket.domain.LikeId;
import com.ssafy.ttocket.domain.PerformanceLike;
import com.ssafy.ttocket.repository.querydsl.PerformanceLikeRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerformanceLikeRepository extends JpaRepository<PerformanceLike, LikeId>, PerformanceLikeRepositoryCustom {
}
