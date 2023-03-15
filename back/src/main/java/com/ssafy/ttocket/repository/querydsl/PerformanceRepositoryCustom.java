package com.ssafy.ttocket.repository.querydsl;

import com.ssafy.ttocket.domain.Performance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerformanceRepositoryCustom {
    List<Performance> findOpenSoon();
}
