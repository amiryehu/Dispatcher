import React from "react";
import moment from "moment";

export const formattingDate = (date: string) => {
    const newDate = new Date(date);
    return moment(newDate).format("dddd MMM d, yyyy");
}