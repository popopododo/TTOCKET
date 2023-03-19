package com.ssafy.ttocket.repository;

import com.ssafy.ttocket.domain.Seat;
import com.ssafy.ttocket.domain.SeatId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;


public interface SeatRepository extends JpaRepository<Seat, SeatId> {
    List<Seat> findByPerformanceId(int performanceId);
}
