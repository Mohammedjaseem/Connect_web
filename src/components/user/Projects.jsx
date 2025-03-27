"use client";

import { Tabs } from "../ui/tabs";

import maintenanceImg from "../../assets/image/services/maintenance.jpg";
import gatePassImg from "../../assets/image/services/gate.pass.jpg";
import surgeryScheduleImg from "../../assets/image/services/surgery.schedule.jpg";
import vehicleBookingImg from "../../assets/image/services/vehicle.booking.jpg";
import leaveRequestImg from "../../assets/image/services/leave.request.jpg";
import attendanceImg from "../../assets/image/services/attendance.jpg";
import taskManagerImg from "../../assets/image/services/task.manager.jpg";
import geoPunchingImg from "../../assets/image/services/geo.punching.jpg";
// import appointmentImg from "../../assets/image/services/appointment.jpg";
import meetingScheduleImg from "../../assets/image/services/meeting.schedule.jpg";
// import venueBookingImg from "../../assets/image/services/venue.booking.jpg";
import voucherSystemImg from "../../assets/image/services/voucher.system.jpg";

export function Projects() {
  const tabs = [
    {
      title: "Maintenance",
      value: "Maintenance",
      image: maintenanceImg,
      description:
        "Our maintenance arm ensures the smooth operation and reliability of your products and systems.",
    },
    {
      title: "Geo Punching",
      value: "Geo Punching",
      image: geoPunchingImg,
      description:
        "A location-based attendance tracking system that ensures accurate check-ins and check-outs.",
    },
    {
      title: "Task Manager",
      value: "Task Manager",
      image: taskManagerImg,
      description:
        "Organize, assign, and track tasks efficiently to enhance productivity and collaboration.",
    },
    {
      title: "Voucher System",
      value: "Voucher System",
      image: voucherSystemImg,
      description:
        "A digital solution for generating, distributing, and redeeming vouchers efficiently.",
    },
    {
      title: "Leave Request",
      value: "Leave Request",
      image: leaveRequestImg,
      description:
        "Digital system for employees or students to request and receive leave approvals.",
    },
    {
      title: "Attendance",
      value: "Attendance",
      image: attendanceImg,
      description: "Customize attendance marking for your needs.",
    },
    {
      title: "Surgery Schedule",
      value: "Surgery Schedule",
      image: surgeryScheduleImg,
      description:
        "Doctors can receive messages about today's scheduled surgeries and receive reminders for the day.",
    },
    {
      title: "Vehicle Booking",
      value: "Vehicle Booking",
      image: vehicleBookingImg,
      description:
        "In our vehicle booking system, you can reserve vehicles for guests or for personal use.",
    },
    // {
    //   title: "Appointment",
    //   value: "Appointment",
    //   image: appointmentImg,
    //   description:
    //     "Schedule and manage appointments seamlessly, reducing conflicts and improving efficiency.",
    // },
    {
      title: "Meeting Schedule",
      value: "Meeting Schedule",
      image: meetingScheduleImg,
      description:
        "Plan, schedule, and manage meetings with reminders and easy participant coordination.",
    },
    // {
    //   title: "Venue Booking",
    //   value: "Venue Booking",
    //   image: venueBookingImg,
    //   description:
    //     "Book and manage venues for events, meetings, and conferences with ease.",
    // },
    {
      title: "Gate Pass",
      value: "Gate Pass",
      image: gatePassImg,
      description:
        "Students and staff can request permission for early or outgoing departures.",
    },
  ];

  return (
    <div className="h-[37rem] md:h-[33rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-30 mt-10 px-5">
      <Tabs
        tabs={tabs.map((tab) => ({
          ...tab,
          content: (
            <TabContent
              title={tab.title}
              image={tab.image}
              description={tab.description}
            />
          ),
        }))}
      />
    </div>
  );
}

const TabContent = ({ title, image, description }) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row-reverse items-center md:items-start gap-5 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
      {/* Right-side image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-[400px] h-[300px] md:w-[500px] md:h-[350px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Left-side text - Centered */}
      <div className="flex-1 flex flex-col justify-center h-full text-left">
        <p className="mb-4 text-center md:text-left">{title}</p>
        <p className="text-lg font-medium text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};
