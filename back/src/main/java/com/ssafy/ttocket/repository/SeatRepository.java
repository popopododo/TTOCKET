package com.ssafy.ttocket.repository;

import com.ssafy.ttocket.domain.Seat;
import com.ssafy.ttocket.domain.SeatId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeatRepository extends JpaRepository<Seat, SeatId> {
}
