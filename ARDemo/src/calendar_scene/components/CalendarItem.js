//
import React from "react";

import {
  TEXT_COLOR,
  TITLE_COLOR,
  TIME_BG_COLOR,
  TITLE_BG_COLOR_1,
  TITLE_BG_COLOR_2
} from "../config/Colors";

export default class CalendarItem extends React.Component {
  formatTime(date) {
    let hrs = date.getHours() + 1;
    let min = date.getMinutes();
    let type = hrs <= 12 ? "AM" : "PM";

    const h = +hrs % 12 || hrs;
    const hh = h > 9 ? `${h}` : `${h}`;
    const mm = min > 9 ? `${min}` : `0${min}`;

    return `${hh}:${mm}${type}`;
  }

  render() {
    const { index, event } = this.props;

    const yPosition = 0.19 - index * 0.045;
    const summary = event.summary === undefined ? "no title" : event.summary;

    const beginDate = new Date(event.start.dateTime);
    const endDate = new Date(event.end.dateTime);

    const time = `${this.formatTime(beginDate)}-${this.formatTime(endDate)}`;

    return (
      <view name="event-view">
        <image
          color={TIME_BG_COLOR}
          localPosition={[-0.215, yPosition, -0.01]}
          width={0.2}
          height={0.045}
          useFrame={true}
        />
        <text
          width={0.2}
          height={0.045}
          textColor={TEXT_COLOR}
          textSize={0.024}
          localPosition={[-0.215, yPosition, 0]}
          alignment={'center-center'}
        >
          {time}
        </text>
        <image
          color={index % 2 == 0 ? TITLE_BG_COLOR_1 : TITLE_BG_COLOR_2}
          localPosition={[0.1, yPosition, -0.01]}
          width={0.43}
          height={0.045}
          useFrame={true}
        />
        <text
          width={0.43}
          height={0.045}
          textColor={TITLE_COLOR}
          textSize={0.02}
          localPosition={[0.1, yPosition, 0]}
          alignment={'center-center'}
        >
          {summary}
        </text>
      </view>
    );
  }
}
