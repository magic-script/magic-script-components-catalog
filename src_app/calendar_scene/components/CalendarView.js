//
import React from "react";

import { BASE_URL, CALENDAR, ROOM } from "../config/Client";
import { PRISM_COLOR, TEXT_COLOR } from "../config/Colors";
import { PRISM_X, PRISM_Y, UPDATE_FREQUENCY } from "../config/Sizes";
import CalendarItem from "./CalendarItem";

const initialEventsUrl = "https://firebasestorage.googleapis.com/v0/b/components-storage.appspot.com/o/events_initial.json?alt=media&token=c445d8a0-c4c4-4d7f-83b7-a42289bfd93a";
const allEventsUrl = "https://firebasestorage.googleapis.com/v0/b/components-storage.appspot.com/o/events_all.json?alt=media&token=309a34e5-fa42-4c17-aa79-9400e0b01a2d";

export default class CalendarView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: `Downloading calendar for room ${ROOM}`,
      space: undefined,
      counter: 0
    };

    this.onInitialEventsClick = this.onInitialEventsClick.bind(this);
    this.onMoreEventsClick = this.onMoreEventsClick.bind(this);
  }

  async componentDidMount() {
		await this.updateCalendar(initialEventsUrl);
		// if (this.interval === undefined) {
		// 	this.interval = setInterval(async () => await this.updateCalendar(), UPDATE_FREQUENCY);
		// }
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  async updateCalendar(url) {
    const data = await this.fetchJsonData(url).catch(
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

  onInitialEventsClick() {
    this.updateCalendar(initialEventsUrl);
  }

  onMoreEventsClick() {
    this.updateCalendar(allEventsUrl);
  }

  renderControlPanel() {
    return (
      <view localPosition={[0, 0.5, 0]}>
        <button
          localPosition={[-0.25, 0, 0]}
          width={0.25}
          height={0.10}
          roundness={0.5}
          textSize={0.035}
          onClick={this.onInitialEventsClick}
        >Initial events</button>
        <button
          localPosition={[0.25, 0, 0]}
          width={0.25}
          height={0.10}
          roundness={0.5}
          textSize={0.035}
          onClick={this.onMoreEventsClick}
        >More events</button>
      </view>
    );
  }

  render() {
    const calendarView = this.renderCalendarView(this.state.space);
    return (
      <view name="main-view" localPosition={this.props.localPosition}>
        {this.renderControlPanel()}
        <view>
          <text
            textSize={0.05}
            textColor={TEXT_COLOR}
            width={PRISM_X}
            alignment={"top-center"}
            localPosition={[0, 0.32, 0]}
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
      </view>
    );
  }
}
