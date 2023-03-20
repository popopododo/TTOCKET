package com.ssafy.ttocket.repository;

import com.ssafy.ttocket.domain.Performance;
import com.ssafy.ttocket.repository.querydsl.PerformanceRepositoryCustom;
import com.ssafy.ttocket.service.PerformanceService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerformanceRepository extends JpaRepository<Performance, Long>, PerformanceRepositoryCustom {
}
