package com.ssafy.ttocket.domain;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
public class Seat {

    @NotNull
    @ColumnDefault("'EMPTY'")
    @Enumerated(EnumType.STRING)
    private SeatStatus status;
}
