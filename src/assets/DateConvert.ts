import React from "react";

export const formattingDate = (date: string) => {
    const newDate = new Date(date);

    const options: {
      weekday: "long";
      year: "numeric";
      month: "long";
      day: "numeric";
    } = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return newDate.toLocaleDateString(undefined, options);
}