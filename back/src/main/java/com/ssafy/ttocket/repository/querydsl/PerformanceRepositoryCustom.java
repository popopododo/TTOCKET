package com.ssafy.ttocket.repository.querydsl;

import com.ssafy.ttocket.domain.Performance;

public interface PerformanceRepositoryCustom {
    Performance getPerformanceById(int performanceId);
}
