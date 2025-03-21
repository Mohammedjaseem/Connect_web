"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://cdn.azeusconvene.com/wp-content/uploads/Mobile-%E2%80%93-16.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://assets.grab.com/wp-content/uploads/sites/4/2024/07/08142428/shutterstock_2152292393-1-scaled.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://www.infoworld.com/wp-content/uploads/2024/06/coding_programming_software_development_thinkstock_871030872-100749644-orig.jpg?quality=50&strip=all"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://media.istockphoto.com/id/1458218307/photo/time-stands-still.jpg?s=612x612&w=0&k=20&c=kdxyI5VFIDL3A1upRypfzTsb1Jy8nPQmgRFbHuDZXoM="
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
