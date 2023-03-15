package com.ssafy.ttocket.repository;

import com.ssafy.ttocket.domain.Seat;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class SeatRepository {

    @PersistenceContext
    EntityManager em;

    public void save(Seat seat) {
        em.persist(seat);
    }
}
