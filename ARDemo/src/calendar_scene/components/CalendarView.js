//
import React from "react";

import { BASE_URL, CALENDAR, ROOM } from "../config/Client";
import { PRISM_COLOR, TEXT_COLOR } from "../config/Colors";
import { PRISM_X, PRISM_Y } from "../config/Sizes";

import CalendarItem from "./CalendarItem";

export default class CalendarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: `Downloading calendar for room ${ROOM}`,
      space: undefined,
      counter: 0
    };
  }

  async componentDidMount() {
    this.interval = setInterval(async () => await this.updateCalendar(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async updateCalendar() {
    const data = await this.fetchJsonData(`${BASE_URL}`/*/${CALENDAR}`*/).catch(
      e => {
        this.setState(state => ({
          message: e.message
        }));
      }
    );

    if (data) {
      this.setState(state => ({
        message: `Calendar downloaded for room ${ROOM}`,
        space: data,
        counter: state.counter > 99 ? 0 : state.counter + 1
      }));
    }
  }

  async fetchJsonData(url) {
    const response = await fetch(url);

    if (!response || !response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }

    return await response.json();
  }

  renderCalendarView(info) {
    if (info === undefined) {
      return (
        <text localPosition={[0, 0.4, 0]} alignment={"top-center"} textSize={0.05}>
          {this.state.message}
        </text>
      );
    }

    const calendarView = info.events.map((event, index) => {
      return <CalendarItem event={event} index={index} key={index} />;
    });

    return <view name="events-list">{calendarView}</view>;
  }

  render() {
    const calendarView = this.renderCalendarView(this.state.space);
    return (
      <view name="main-view">
        <image
          color={PRISM_COLOR}
          localPosition={[0, 0, -0.03]}
          width={PRISM_X}
          height={PRISM_Y}
          useFrame={true}
        />
        <text
          textSize={0.05}
          textColor={TEXT_COLOR}
          localPosition={[0, 0.32, 0]}
          width={PRISM_X}
          alignment={"top-center"}
        >
          {"Schedule for room"}
        </text>
        <text
          textSize={0.05}
          textColor={TEXT_COLOR}
          width={0.64}
          alignment={"top-center"}
          localPosition={[0, 0.27, 0]}
        >
          {ROOM}
        </text>
        {calendarView}
      </view>
    );
  }
}
